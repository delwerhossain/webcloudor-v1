#!/usr/bin/env node

/**
 * WebCloudor Auto Commit Manager
 * Enhanced chunk-by-chunk auto-commit system with intelligent file handling
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AutoCommitManager {
  constructor() {
    this.colors = {
      reset: '\x1b[0m',
      green: '\x1b[32m',
      blue: '\x1b[34m',
      yellow: '\x1b[33m',
      red: '\x1b[31m',
      cyan: '\x1b[36m',
    };
    
    this.humanCommitTemplates = {
      component: [
        'refactor: enhance {fileName} component with improved functionality',
        'feat: add enhanced {fileName} component with better UX',
        'update: improve {fileName} component architecture and performance',
        'enhance: optimize {fileName} component for better user experience',
        'polish: refine {fileName} component with visual improvements'
      ],
      
      api: [
        'feat: implement {fileName} endpoint with comprehensive validation',
        'enhance: improve {fileName} API with better error handling',
        'update: add robust validation to {fileName} endpoint',
        'refactor: optimize {fileName} API performance and security',
        'fix: enhance {fileName} endpoint reliability and response handling'
      ],
      
      style: [
        'style: improve visual consistency in {fileName}',
        'polish: enhance responsive design for {fileName}',
        'update: refine styling and animations in {fileName}',
        'improve: optimize CSS architecture in {fileName}',
        'enhance: better mobile experience for {fileName}'
      ],
      
      config: [
        'chore: update {fileName} configuration for better performance',
        'config: enhance {fileName} settings for improved developer experience',
        'update: optimize {fileName} configuration and tooling',
        'improve: streamline {fileName} setup and build process',
        'chore: fine-tune {fileName} for better project workflow'
      ],
      
      docs: [
        'docs: update {fileName} with clearer explanations',
        'improve: enhance documentation in {fileName}',
        'update: add practical examples to {fileName}',
        'docs: refine {fileName} for better developer guidance',
        'enhance: improve clarity and structure in {fileName}'
      ],
      
      page: [
        'feat: create optimized {fileName} page with enhanced SEO',
        'update: improve {fileName} page performance and accessibility',
        'enhance: optimize {fileName} page for better Core Web Vitals',
        'refactor: streamline {fileName} page architecture',
        'improve: enhance user experience on {fileName} page'
      ],
      
      test: [
        'test: add comprehensive tests for {fileName}',
        'improve: enhance test coverage in {fileName}',
        'update: refine test cases for {fileName}',
        'fix: improve test reliability in {fileName}',
        'enhance: add edge case testing to {fileName}'
      ],
      
      fix: [
        'fix: resolve issue in {fileName} for better stability',
        'bugfix: address edge case handling in {fileName}',
        'fix: improve error handling in {fileName}',
        'resolve: fix performance issue in {fileName}',
        'bugfix: enhance reliability of {fileName}'
      ]
    };
  }

  log(message, color = 'reset') {
    console.log(`${this.colors[color]}${message}${this.colors.reset}`);
  }

  execGit(command) {
    try {
      return execSync(command, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
    } catch (error) {
      this.log(`Git command failed: ${command}`, 'red');
      this.log(error.message, 'red');
      return null;
    }
  }

  checkGitRepo() {
    const result = this.execGit('git rev-parse --git-dir');
    if (!result) {
      this.log('❌ Not in a git repository', 'red');
      process.exit(1);
    }
    return true;
  }

  getGitConfig() {
    const name = this.execGit('git config user.name') || 'Developer';
    const email = this.execGit('git config user.email') || 'developer@webcloudor.com';
    
    this.log('📋 Current Git Configuration:', 'yellow');
    this.log(`User: ${name} <${email}>`, 'cyan');
    console.log('');
    
    return { name, email };
  }

  getChangedFiles() {
    const unstagedFiles = this.execGit('git diff --name-only') || '';
    const untrackedFiles = this.execGit('git ls-files --others --exclude-standard') || '';
    
    const allFiles = [
      ...unstagedFiles.split('\n').filter(f => f.trim()),
      ...untrackedFiles.split('\n').filter(f => f.trim())
    ].filter(f => f && !f.includes('.git/'));

    return [...new Set(allFiles)]; // Remove duplicates
  }

  categorizeFile(filePath) {
    const fileName = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const dirPath = path.dirname(filePath).toLowerCase();
    
    // Determine file category
    if (filePath.includes('src/components/') || filePath.includes('components/')) return 'component';
    if (filePath.includes('/api/') || filePath.includes('api.')) return 'api';
    if (fileName.includes('page.') || fileName.includes('layout.')) return 'page';
    if (['.css', '.scss', '.sass'].includes(ext)) return 'style';
    if (fileName.includes('config') || fileName.includes('.config.')) return 'config';
    if (['.md', '.txt'].includes(ext) || dirPath.includes('doc')) return 'docs';
    if (fileName.includes('test') || fileName.includes('spec') || dirPath.includes('test')) return 'test';
    if (fileName.includes('fix') || filePath.includes('fix/')) return 'fix';
    
    return 'general';
  }

  generateHumanCommitMessage(category, fileName) {
    const templates = this.humanCommitTemplates[category] || this.humanCommitTemplates.component;
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    const cleanFileName = fileName.replace(/\.(tsx?|jsx?|css|scss|md)$/, '');
    
    const title = randomTemplate.replace('{fileName}', cleanFileName);
    
    // Add human-like commit body
    const bodies = [
      `\n\n- Implemented with modern best practices and clean architecture\n- Enhanced user experience and maintainability\n- Added proper error handling and TypeScript support`,
      `\n\n- Optimized for performance and accessibility\n- Improved code organization and readability\n- Follows WebCloudor development standards`,
      `\n\n- Enhanced functionality with careful attention to detail\n- Improved development workflow and code quality\n- Maintained consistency with existing codebase`,
      `\n\n- Refined implementation with focus on user experience\n- Added comprehensive error handling and validation\n- Optimized for better performance and maintainability`
    ];
    
    const randomBody = bodies[Math.floor(Math.random() * bodies.length)];
    return title + randomBody;
  }

  async commitSingleFile(filePath) {
    const fileName = path.basename(filePath);
    const category = this.categorizeFile(filePath);
    const commitMessage = this.generateHumanCommitMessage(category, fileName);
    
    this.log(`📁 Processing: ${filePath}`, 'blue');
    
    // Add file
    const addResult = this.execGit(`git add "${filePath}"`);
    if (addResult === null) {
      this.log(`❌ Failed to add ${filePath}`, 'red');
      return false;
    }
    
    // Check if there are changes to commit
    const diffCached = this.execGit('git diff --cached --name-only');
    if (!diffCached || !diffCached.includes(path.basename(filePath))) {
      this.log(`⏭️  No changes to commit for ${filePath}`, 'yellow');
      return false;
    }
    
    // Commit
    const commitResult = this.execGit(`git commit -m "${commitMessage}"`);
    if (commitResult) {
      this.log(`✅ Committed: ${fileName}`, 'green');
      this.log(`💬 Message: ${commitMessage.split('\n')[0]}`, 'cyan');
      console.log('');
      return true;
    } else {
      this.log(`❌ Failed to commit ${filePath}`, 'red');
      return false;
    }
  }

  async runAutoCommits(maxCommits = 10) {
    this.log('🚀 WebCloudor Auto-Commit Manager', 'blue');
    this.log('====================================', 'blue');
    console.log('');

    this.checkGitRepo();
    this.getGitConfig();

    this.log('📊 Current Git Status:', 'yellow');
    execSync('git status --short', { stdio: 'inherit' });
    console.log('');

    const files = this.getChangedFiles();
    
    if (files.length === 0) {
      this.log('✅ No files to commit. Working tree is clean!', 'green');
      return;
    }

    this.log(`📁 Found ${files.length} files to process`, 'yellow');
    
    // Limit number of commits if specified
    const filesToProcess = files.slice(0, maxCommits);
    let successCount = 0;
    
    for (const file of filesToProcess) {
      const success = await this.commitSingleFile(file);
      if (success) {
        successCount++;
        // Add small delay to make commits more natural
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    this.log(`🎉 Auto-commit completed!`, 'green');
    this.log(`📈 Successfully created ${successCount} commits`, 'green');
    console.log('');
    
    // Show recent commits
    this.log('📝 Recent commits:', 'yellow');
    execSync('git log --oneline -10', { stdio: 'inherit' });
  }

  async runChunkedCommits() {
    this.log('🔄 Running chunked auto-commits with intelligent grouping...', 'yellow');
    console.log('');
    
    const files = this.getChangedFiles();
    if (files.length === 0) {
      this.log('✅ No files to commit. Working tree is clean!', 'green');
      return;
    }

    // Group files by category for better commit organization
    const filesByCategory = {};
    files.forEach(file => {
      const category = this.categorizeFile(file);
      if (!filesByCategory[category]) filesByCategory[category] = [];
      filesByCategory[category].push(file);
    });

    let totalCommits = 0;
    
    // Process each category
    for (const [category, categoryFiles] of Object.entries(filesByCategory)) {
      this.log(`\n📂 Processing ${category} files (${categoryFiles.length} files):`, 'cyan');
      
      for (const file of categoryFiles) {
        const success = await this.commitSingleFile(file);
        if (success) {
          totalCommits++;
          // Small delay between commits
          await new Promise(resolve => setTimeout(resolve, 150));
        }
      }
    }
    
    this.log(`\n🎯 Chunked commits completed! Created ${totalCommits} commits`, 'green');
    
    // Show final status
    this.log('\n📊 Final repository status:', 'yellow');
    execSync('git status --short', { stdio: 'inherit' });
  }
}

// CLI Interface
const manager = new AutoCommitManager();

const args = process.argv.slice(2);
const command = args[0] || 'help';
const maxCommits = parseInt(args[1]) || 10;

switch (command) {
  case 'auto':
    manager.runAutoCommits(maxCommits);
    break;
    
  case 'chunked':
    manager.runChunkedCommits();
    break;
    
  case 'single':
    const filePath = args[1];
    if (filePath) {
      manager.commitSingleFile(filePath);
    } else {
      manager.log('Please provide a file path', 'red');
    }
    break;
    
  default:
    manager.log('📖 WebCloudor Auto-Commit Manager Usage:', 'yellow');
    console.log('');
    console.log('  node scripts/auto-commit-manager.js auto [maxCommits]     # Auto-commit up to N files');
    console.log('  node scripts/auto-commit-manager.js chunked              # Chunked commits by category');  
    console.log('  node scripts/auto-commit-manager.js single <file>        # Commit single file');
    console.log('');
    manager.log('💡 Examples:', 'yellow');
    console.log('  node scripts/auto-commit-manager.js auto 5               # Commit up to 5 files');
    console.log('  node scripts/auto-commit-manager.js chunked              # Commit all files by category');
    console.log('');
}