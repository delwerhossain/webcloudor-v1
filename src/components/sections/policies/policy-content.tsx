interface PolicyContentProps {
  children: React.ReactNode
}

export const PolicyContent = ({ children }: PolicyContentProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-slate max-w-none prose-sm sm:prose-base prose-headings:text-[#1B365D] prose-headings:font-semibold prose-h3:text-lg sm:prose-h3:text-xl prose-h4:text-base sm:prose-h4:text-lg prose-p:leading-relaxed prose-p:mb-3 sm:prose-p:mb-4 prose-p:text-sm sm:prose-p:text-base prose-ul:mb-4 sm:prose-ul:mb-6 prose-li:mb-1 sm:prose-li:mb-2 prose-li:text-sm sm:prose-li:text-base prose-strong:text-[#1B365D] prose-strong:font-semibold prose-a:text-[#1B365D] prose-a:no-underline hover:prose-a:underline">
        {children}
      </div>
    </div>
  )
}