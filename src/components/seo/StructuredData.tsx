/**
 * StructuredData Component for WebCloudor
 * Injects JSON-LD structured data into page head for SEO
 */

import { Thing } from 'schema-dts'

interface StructuredDataProps {
  data: Thing | Thing[]
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
export const MultipleStructuredData = ({ schemas }: { schemas: Thing[] }) => {
  return <StructuredData data={schemas} />
}

// SEO utility hooks and functions
export const injectStructuredData = (data: Thing | Thing[]) => {
  return <StructuredData data={data} />
}

export default StructuredData