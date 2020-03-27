import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const blogPageTemplate = ({data}) => {

  const {name, blogPost:{json}, dateOfPost} = data.blogs

  return (
    <Layout>
     
      <StyledHero img={data.blogs.blogHeaderImage.fluid}/>
      <section className={styles.template}>
        <div className={styles.center}>
           <h1>{name}</h1>
           <div className={styles.info}>
            <p className={styles.desc}>
            {documentToReactComponents(json)}
            </p>
           </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query($slug:String!) {
  blogs:contentfulTutorialBlog(slug:{eq:$slug}){
    name
    dateOfPost(formatString:"MMMM Do, YYYY")
    authorImage{
          fixed{
            srcSet
          }
        }
    blogHeaderImage{
      fluid{
      	...GatsbyContentfulFluid_tracedSVG
    	}
    }
    blogPost{
      json
    }
}
}
`

export default blogPageTemplate
