import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'

const Contact = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.landingImage.childImageSharp.fluid}>

      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  query {
    landingImage:file(relativePath:{eq:"contactBcg.jpg"}) {
      childImageSharp {
        fluid(quality:90, maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Contact
