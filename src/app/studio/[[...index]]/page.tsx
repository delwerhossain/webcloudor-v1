const StudioPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Sanity Studio
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Studio Access Options
          </h2>
          
          <div className="space-y-4 text-left">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="font-semibold text-blue-800 mb-2">
                Option 1: Standalone Studio (Recommended)
              </h3>
              <p className="text-blue-700 mb-3">
                Run Sanity Studio as a separate application to avoid build conflicts:
              </p>
              <div className="bg-blue-900 text-blue-100 p-3 rounded font-mono text-sm">
                npm run sanity:start
              </div>
              <p className="text-blue-700 mt-2 text-sm">
                This will start the studio at http://localhost:3333
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-green-50">
              <h3 className="font-semibold text-green-800 mb-2">
                Option 2: Create Content Programmatically
              </h3>
              <p className="text-green-700 mb-3">
                Use our population script after getting a valid API token:
              </p>
              <div className="bg-green-900 text-green-100 p-3 rounded font-mono text-sm">
                npm run sanity:populate
              </div>
              <p className="text-green-700 mt-2 text-sm">
                This will create sample blog posts, categories, and authors
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">
            📋 Next Steps
          </h3>
          <ol className="text-yellow-700 text-sm text-left space-y-1">
            <li>1. Choose one of the options above</li>
            <li>2. Create categories, authors, and blog posts</li>
            <li>3. Visit /blog to see your content live</li>
            <li>4. The site will automatically switch from mock data to real content</li>
          </ol>
        </div>
        
        <div className="mt-6">
          <a 
            href="/blog" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Blog Page
          </a>
        </div>
      </div>
    </div>
  )
}

export default StudioPage