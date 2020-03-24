import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import FeaturedTutorial from '../components/Home/featuredTutorial'

export default ({data}) => { 
  return (
  <Layout>
    <StyledHero home="true" img={data.landingImage.childImageSharp.fluid}>
      <Banner title="FrontEndDev Blog" info="Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.">
      <AniLink fade to="/blog" className="btn-white">
        Learn More
      </AniLink>
      </Banner>
    </StyledHero>
    <Services/>
    <FeaturedTutorial/>
  </Layout>
  )
}

export const query = graphql`
  query {
    landingImage:file(relativePath:{eq:"landingImage.jpg"}) {
      childImageSharp {
        fluid(quality:90, maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
