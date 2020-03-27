import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Tutorials from '../components/tutorial/tutorials'

const Blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.landingImage.childImageSharp.fluid}/>
      <Tutorials/>
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
