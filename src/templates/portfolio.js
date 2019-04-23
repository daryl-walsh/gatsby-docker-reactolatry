import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`
export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.id.title}</h1>

    <div dangerouslySetInnerHTML={{ __html: pageContext.id.content }} />
  </Layout>
)

// <FeaturedImage src={pageContext.id.featured_media.source_url} />
