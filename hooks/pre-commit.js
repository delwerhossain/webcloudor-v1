#!/usr/bin/env node

/**
 * WebCloudor Pre-commit Hook
 * Intelligent pre-commit processing for enhanced commit workflow
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PreCommitHook {
  constructor() {
    this.colors = {
      reset: '\x1b[0m',
      green: '\x1b[32m',
      blue: '\x1b[34m',
      yellow: '\x1b[33m',
      red: '\x1b[31m',
      cyan: '\x1b[36m',
    };
    
    this.config = {
      enableLinting: true,
      enableFormatting: true,
      enableAutoCommitSuggestions: true,
      maxFilesForAutoCommit: 5,
    };
  }

  log(message, color = 'reset') {
    console.log(`${this.colors[color]}${message}${this.colors.reset}`);
  }

  execCommand(command) {
    try {
      return execSync(command, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
    } catch (error) {
      return null;
    }
  }

  getStagedFiles() {
    const staged = this.execCommand('git diff --cached --name-only') || '';
    return staged.split('\n').filter(f => f.trim() && fs.existsSync(f));
  }

  async runLinting() {
    this.log('🔍 Running code quality checks...', 'blue');
    
    const tsFiles = this.getStagedFiles().filter(f => 
      /\.(ts|tsx|js|jsx)$/.test(f) && !f.includes('node_modules')
    );
    
    if (tsFiles.length === 0) {
      this.log('⏭️  No TypeScript/JavaScript files to lint', 'yellow');
      return true;
    }
    
    // Run Biome check on staged files
    try {
      const result = this.execCommand('npm run lint');
      if (result !== null) {
        this.log('✅ Code quality checks passed', 'green');
        return true;
      }
    } catch (error) {
      this.log('⚠️  Code quality issues detected', 'yellow');
      this.log('Running auto-fix...', 'blue');
      
      // Try to auto-fix issues
      const fixResult = this.execCommand('npm run format');
      if (fixResult !== null) {
        this.log('🔧 Auto-fixed formatting issues', 'green');
        
        // Re-add files that were auto-fixed
        tsFiles.forEach(file => {
          this.execCommand(`git add "${file}"`);
        });
        
        return true;
      }
    }
    
    this.log('❌ Code quality checks failed', 'red');
    return false;
  }

  analyzeCommitSize() {
    const stagedFiles = this.getStagedFiles();
    
    this.log(`\n📊 Commit Analysis: ${stagedFiles.length} files staged`, 'cyan');
    
    if (stagedFiles.length === 0) {
      this.log('⚠️  No files staged for commit', 'yellow');
      return false;
    }
    
    // Categorize files
    const categories = {
      components: stagedFiles.filter(f => f.includes('component') || f.includes('src/components')),
      api: stagedFiles.filter(f => f.includes('api') || f.includes('/api/')),
      styles: stagedFiles.filter(f => /\.(css|scss|sass)$/.test(f)),
      config: stagedFiles.filter(f => /\.(json|js|ts)$/.test(f) && (f.includes('config') || f.includes('.config.'))),
      docs: stagedFiles.filter(f => /\.(md|txt)$/.test(f)),
      other: []
    };
    
    // Files that don't fit other categories
    categories.other = stagedFiles.filter(f => 
      !categories.components.includes(f) &&
      !categories.api.includes(f) &&
      !categories.styles.includes(f) &&
      !categories.config.includes(f) &&
      !categories.docs.includes(f)
    );
    
    // Display categorization
    Object.entries(categories).forEach(([cat, files]) => {
      if (files.length > 0) {
        this.log(`  📁 ${cat}: ${files.length} files`, 'cyan');
      }
    });
    
    return { stagedFiles, categories };
  }

  suggestChunkedCommits(analysis) {
    const { stagedFiles, categories } = analysis;
    
    if (stagedFiles.length <= this.config.maxFilesForAutoCommit) {
      this.log('\n✅ Commit size is optimal for single commit', 'green');
      return true;
    }
    
    this.log('\n💡 Large commit detected! Consider chunked commits:', 'yellow');
    this.log('==========================================', 'yellow');
    
    Object.entries(categories).forEach(([category, files]) => {
      if (files.length > 0) {
        this.log(`🗂️  ${category} (${files.length} files):`, 'blue');
        files.slice(0, 3).forEach(f => console.log(`    • ${f}`));
        if (files.length > 3) {
          console.log(`    ... and ${files.length - 3} more`);
        }
        console.log('');
      }
    });
    
    this.log('🎯 Recommended approach:', 'green');
    console.log('  1. Cancel this commit (Ctrl+C)');
    console.log('  2. Run: node scripts/auto-commit-manager.js chunked');
    console.log('  3. This will create separate commits for each category');
    console.log('');
    
    return false; // Suggest not to proceed with large commit
  }

  async enhanceCommitMessage() {
    // Read the commit message that's being prepared
    const commitMsgFile = '.git/COMMIT_EDITMSG';
    
    if (!fs.existsSync(commitMsgFile)) {
      return; // No commit message file found
    }
    
    let commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim();
    
    // If it's an empty or default commit message, suggest improvements
    if (!commitMsg || commitMsg.startsWith('#') || commitMsg === '') {
      const stagedFiles = this.getStagedFiles();
      
      if (stagedFiles.length > 0) {
        const primaryFile = stagedFiles[0];
        const fileName = path.basename(primaryFile);
        const category = this.categorizeFile(primaryFile);
        
        const suggestedMessage = this.generateCommitSuggestion(category, fileName, stagedFiles.length);
        
        this.log('\n💬 Suggested commit message:', 'yellow');
        console.log(suggestedMessage);
        console.log('');
        
        // Write suggestion to commit message file (user can edit it)
        fs.writeFileSync(commitMsgFile, suggestedMessage + '\n\n# Enhanced by WebCloudor pre-commit hook\n# Edit above message as needed\n');
      }
    }
  }

  categorizeFile(filePath) {
    if (filePath.includes('src/components/')) return 'component';
    if (filePath.includes('/api/')) return 'api';
    if (path.basename(filePath).includes('page.')) return 'page';
    if (/\.(css|scss)$/.test(filePath)) return 'style';
    if (filePath.includes('config')) return 'config';
    if (/\.md$/.test(filePath)) return 'docs';
    return 'general';
  }

  generateCommitSuggestion(category, fileName, fileCount) {
    const templates = {
      component: `feat: enhance ${fileName.replace(/\.(tsx?|jsx?)$/, '')} component\n\n- Improved user experience and functionality\n- Added proper TypeScript interfaces\n- Enhanced responsive design`,
      
      api: `feat: implement ${fileName} endpoint\n\n- Added comprehensive validation\n- Included proper error handling\n- Enhanced security measures`,
      
      style: `style: improve visual design in ${fileName}\n\n- Enhanced responsive behavior\n- Improved accessibility\n- Better visual consistency`,
      
      config: `chore: update ${fileName} configuration\n\n- Improved development workflow\n- Better build performance\n- Enhanced tooling setup`,
      
      docs: `docs: update ${fileName}\n\n- Improved clarity and examples\n- Better organization\n- Enhanced developer guidance`,
      
      page: `feat: optimize ${fileName} page\n\n- Enhanced SEO and performance\n- Improved Core Web Vitals\n- Better accessibility`
    };
    
    const baseMessage = templates[category] || templates.component;
    
    if (fileCount > 1) {
      return baseMessage + `\n\nAffected files: ${fileCount} files updated`;
    }
    
    return baseMessage;
  }

  async run() {
    this.log('🚀 WebCloudor Pre-commit Hook', 'blue');
    this.log('=============================', 'blue');
    
    // Analyze commit
    const analysis = this.analyzeCommitSize();
    if (!analysis) {
      this.log('❌ No files to commit', 'red');
      process.exit(1);
    }
    
    // Run code quality checks
    if (this.config.enableLinting) {
      const lintPassed = await this.runLinting();
      if (!lintPassed) {
        this.log('\n❌ Pre-commit checks failed', 'red');
        this.log('Please fix the issues and try again', 'yellow');
        process.exit(1);
      }
    }
    
    // Suggest chunked commits for large changes
    if (this.config.enableAutoCommitSuggestions) {
      const shouldProceed = this.suggestChunkedCommits(analysis);
      if (!shouldProceed) {
        this.log('💡 Consider using chunked commits for better organization', 'yellow');
        // Don't exit - let user decide
      }
    }
    
    // Enhance commit message
    if (this.config.enableAutoCommitSuggestions) {
      await this.enhanceCommitMessage();
    }
    
    this.log('\n✅ Pre-commit checks completed successfully!', 'green');
    console.log('');
  }
}

// Run the pre-commit hook
if (require.main === module) {
  const hook = new PreCommitHook();
  hook.run().catch(error => {
    console.error('Pre-commit hook failed:', error);
    process.exit(1);
  });
}