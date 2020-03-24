import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const tutorial = ({tut}) => {
  const {name, blogTag, dateOfPost, slug} = tut;
  const thumbnail = tut.thumbnailImage.fluid;
  // console.log(thumbnail);
  
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={thumbnail} className={styles.img} alt="thumbnail of latest blog"/>
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>Read More</AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>
    </article>
  )
}

export default tutorial