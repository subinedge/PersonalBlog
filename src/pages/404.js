import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

export default function error() {
  return(
    <Layout>
      Oops! It's a dead end.
      <div>
        <button>
          <Link to="/">Back to home</Link>
        </button>
      </div>
    
    </Layout>
  ) 
}

