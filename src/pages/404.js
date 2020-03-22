import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import Banner from '../components/Banner'

export default function error({title}) {
  return(
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops! It's a dead end.">
          <Link to="/" className="btn-white">Back to home</Link>
        </Banner>
      </header>
    </Layout>
  ) 
}

