import React from 'react'
import Tutorial from '../tutorial/tutorial'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default () => {
  const response = useStaticQuery(graphql`
  query{
    latestTutorial:allContentfulTutorialBlog(limit:3,sort:{fields:dateOfPost, order:DESC}){
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
  const tutorials = response.latestTutorial.edges;
  return (
    <section className={styles.tours}>
    <Title title="Latest" subtitle="Blog Posts"/>

    <div className={styles.center}>
      {tutorials.map(({node})=> {
      return(
        <Tutorial key={node.contentful_id} tut={node}/>
      )
    })}
    </div>
    <AniLink fade to="/blog" className="btn-primary">Read More Posts</AniLink>
    </section>
  )
}
