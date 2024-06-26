import { cache } from 'react'

const dedupedFetch = cache(async (serializedInit: string) => {
  const response = await fetch(
    'https://graphql.datocms.com/',
    JSON.parse(serializedInit)
  )
  const responseBody = await response.json()
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`
    )
  }
  return responseBody
})

export async function performRequest({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  revalidate
}: {
  query: string
  variables?: object
  includeDrafts?: boolean
  excludeInvalid?: boolean
  revalidate: boolean
}) {
  const { data } = await dedupedFetch(
    JSON.stringify({
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
        ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
        ...(process.env.NEXT_DATOCMS_ENVIRONMENT
          ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT }
          : {})
      },
      body: JSON.stringify({ query, variables, revalidate }),
      next: { revalidate }
    })
  )
  return data
}
