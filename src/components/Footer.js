import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index)=> {
          return <Link key={index} href={item.path}>
            {item.text}
          </Link>
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index)=> {
          return <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        })}
      </div>

      <div className={styles.copyright}>
        Copyright &copy; <span className={styles.footerLogo}>JavaScript will rule</span> <em>{new Date().getFullYear()}</em> all Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
