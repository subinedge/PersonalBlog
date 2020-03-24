import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'

const Blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.landingImage.childImageSharp.fluid}>

      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  query {
    landingImage:file(relativePath:{eq:"blogBcg.jpeg"}) {
      childImageSharp {
        fluid(quality:90, maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Blog
