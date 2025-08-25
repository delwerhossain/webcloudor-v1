interface PolicyContentProps {
  children: React.ReactNode
}

export const PolicyContent = ({ children }: PolicyContentProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-slate max-w-none prose-headings:text-[#1B365D] prose-headings:font-semibold prose-h3:text-xl prose-h4:text-lg prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-6 prose-li:mb-2 prose-strong:text-[#1B365D] prose-strong:font-semibold">
        {children}
      </div>
    </div>
  )
}