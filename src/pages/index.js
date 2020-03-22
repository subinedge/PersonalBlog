import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/Simplehero'
import Banner from '../components/Banner'
import Services from '../components/Home/Services'

export default () => { 
  return (
  <Layout>
    <SimpleHero>
      <Banner title="FrontEndDev Blog" info="Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.">
      <Link to="/blog" className="btn-white">
        Learn More
      </Link>
      </Banner>
    </SimpleHero>
    <Services/>
  </Layout>
  )
}
