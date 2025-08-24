export const BlogLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-muted rounded-lg aspect-[3/2] mb-4" />
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="bg-muted rounded-full h-5 w-16" />
              <div className="bg-muted rounded-full h-5 w-20" />
            </div>
            <div className="space-y-2">
              <div className="bg-muted rounded h-6 w-full" />
              <div className="bg-muted rounded h-6 w-3/4" />
            </div>
            <div className="space-y-2">
              <div className="bg-muted rounded h-4 w-full" />
              <div className="bg-muted rounded h-4 w-full" />
              <div className="bg-muted rounded h-4 w-2/3" />
            </div>
            <div className="flex gap-4 pt-2">
              <div className="bg-muted rounded h-4 w-20" />
              <div className="bg-muted rounded h-4 w-24" />
              <div className="bg-muted rounded h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}