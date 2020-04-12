import React from 'react'
import { WikiLayout } from '../components/templates/wikiLayout'

import { graphql } from 'gatsby'
import { WikiSliceZone } from '../components/slices/wikiSliceZone'

const GuidePage = ({ pageContext, data }) => {
  return (
    <WikiLayout
      title={(pageContext && pageContext.data && pageContext.data.title) || 'WesterosCraft Wiki'}
      breadcrumb={pageContext.breadcrumb}
    >
      <WikiSliceZone slices={data.craft.entries[0].wikiSlices} />
    </WikiLayout>
  )
}

export const pageQuery = graphql`
  query GuideQuery($slug: [String]) {
    craft {
      entries(site: "westeroscraft", type: "wikiGuide", slug: $slug) {
        title
        ... on Craft_wiki_wikiGuide_Entry {
          title
          wikiSlices {
            ... on Craft_wikiSlices_text_BlockType {
              ...wikiText
            }
            ... on Craft_wikiSlices_entryGrid_BlockType {
              ...entryGrid
            }
            ... on Craft_wikiSlices_imageGrid_BlockType {
              ...imageGrid
            }
          }
        }
      }
    }
  }
`

export default GuidePage
