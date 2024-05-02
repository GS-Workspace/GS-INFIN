'use server'

import { performRequest } from '@/lib/datocms'

const NAV_DATA_QUERY = `
    query NavData ($ItemId: ItemId) {
        navigationBar (filter: {
            id: {
                eq: $ItemId
            }
        } ) {
            id
            items {
                links {
                    text
                    url
                    id
                }
            }
        }
    }
`

export const getNavData = async () => {
  const data = await performRequest({
    query: NAV_DATA_QUERY,
    variables: {
      ItemId: 'UmWsOBhyTwSUvJYimLnBog'
    },
    revalidate: false
  })

  return data
}
