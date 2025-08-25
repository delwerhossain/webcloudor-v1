/**
 * StructuredData Component for WebCloudor
 * Injects JSON-LD structured data into page head for SEO
 */

interface StructuredDataProps {
  data: any | any[]
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  const schemaData = Array.isArray(data) ? data : [data]
  
  return (
    <>
      {schemaData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0) // Minified for production
          }}
        />
      ))}
    </>
  )
}

// Convenience wrapper for multiple schemas
export const MultipleStructuredData = ({ schemas }: { schemas: any[] }) => {
  return <StructuredData data={schemas} />
}

// SEO utility hooks and functions
export const injectStructuredData = (data: any | any[]) => {
  return <StructuredData data={data} />
}

export default StructuredData