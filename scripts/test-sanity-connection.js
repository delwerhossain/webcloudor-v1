const { createClient } = require('@sanity/client')

// Load environment variables manually from .env.local
const fs = require('fs')
const path = require('path')
const envPath = path.resolve('.env.local')

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const [key, ...values] = line.split('=')
    if (key && values.length) {
      process.env[key] = values.join('=')
    }
  })
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false
})

async function testConnection() {
  try {
    console.log('Testing Sanity connection...')
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
    console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
    console.log('API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION)
    console.log('Token length:', process.env.SANITY_API_TOKEN?.length || 'Not set')
    
    // Test basic connection
    const datasets = await client.datasets.list()
    console.log('✅ Connection successful!')
    console.log('Available datasets:', datasets.map(d => d.name))
    
    // Test document query
    const documents = await client.fetch('*[_type == "blogPost"][0...5]{_id, title}')
    console.log('✅ Query successful!')
    console.log('Sample documents:', documents)
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message)
    if (error.statusCode) {
      console.error('Status code:', error.statusCode)
    }
  }
}

testConnection()