export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* WebCloudor branded loader */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#E2E8F0]"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#1B365D] border-t-transparent animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FFC300] rounded-full"></div>
        </div>
        
        <div className="text-center">
          <h2 className="text-[#1B365D] font-semibold text-lg mb-1">Loading WebCloudor</h2>
          <p className="text-[#64748B] text-sm">Preparing your experience...</p>
        </div>
      </div>
    </div>
  )
}