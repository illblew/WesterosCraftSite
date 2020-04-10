import React from 'react'
import { WikiLayout } from '../components/templates/wikiLayout'
import { Redactor } from '../components/atoms/redactor/redactor'

const DestinationPage = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <WikiLayout title={pageContext.data.title || 'WesterosCraft Wiki'}>
      {/* <WikiSliceZone slices={data.craft.entry.wikiSlices} /> */}
      <Redactor dangerouslySetInnerHTML={{ __html: pageContext.data.copy }} />
    </WikiLayout>
  )
}

export default DestinationPage
