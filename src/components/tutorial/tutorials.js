import React from 'react'
import Title from '../Title'
import styles from '../../css/items.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Tutorial from './tutorial'

export default () => {
  const response = useStaticQuery(graphql`
  query{
    latestTutorial:allContentfulTutorialBlog(sort:{fields:dateOfPost, order:DESC}){
      edges{
        node{
          name
          blogTag
          dateOfPost(formatString:"MMMM Do, YYYY")
          slug
          excerpt{
            excerpt
          }
          contentful_id
          thumbnailImage{
            fluid{
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
  `);

const allBlogs = response.latestTutorial.edges;


  return (
    <section className={styles.blog}>
      <Title title="Blog" subtitle="Posts"/>
        
      <div className={styles.center}>
        {allBlogs.map(({node})=> {
      return(
        <Tutorial key={node.contentful_id} tut={node}/>
      )
    })}
      </div>
    </section>
  )
}
