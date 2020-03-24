import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const ContactComponent = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="Me"/>
      <div className={styles.center}>
        <form action="https://formspree.io/subinsamrat@gmail.com" method="POST" className={styles.form}>
          <div>
            <input type="text" name="name" id="name" className={styles.formControl} placeholder="Name..."/>
          </div>

          <div>
            <input type="email" name="email" id="email" className={styles.formControl} placeholder="Email..."/>
          </div>

          <div>
            <textarea name="message" rows="10" id="message" className={styles.formControl} placeholder="Message..."/>
          </div>

          <div>
            <input type="submit" value="Submit here" className={styles.submit}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactComponent
