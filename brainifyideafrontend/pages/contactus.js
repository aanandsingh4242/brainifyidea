import React from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/contactus.module.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { ImLinkedin2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs';

function contactus() {
  const logo = () => <logo />;
// This is the new user section to manage the state of user
const [user, setUser] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
})

const handleChange = e => {
  const { name, value } = e.target
  setUser({
    ...user,
    [name]: value
  })
}


// This is backend and frontend connecton
const signup = () => {
  const { fullName, username, email, password } = user
  if( fullName && username && email && password ){
    axios.post("http://localhost:4001/signup", user)
    .then( res => alert(res.data.message))
  }else{
    alert("invalid input")
  }
}

return (

  <>
    {/* <div>{data}</div>Hello this is testing api signup page */}
    <div className={styles.main_signup_page}>
      <Head>
        <title>BrainifyIdea | Contact</title>
        <link rel="icon" href="../main_logo.png" />
      </Head>
      <main className={styles.main_signup}>
        <div className={styles.main_signup_box}>
          <div className={styles.main_login}>{/*sign up section*/}
            <h2 className={styles.send_message_content}>Get in touch with us</h2>
            <form className={styles.main_signup_form}>
                <div className={styles.form_name_box}>
                  <input className={styles.form_name_input} type="text" name="name" placeholder="Name"/>
                </div>
                <div className={styles.form_email_box}>
                  <input className={styles.form_email_input} type="email" name="email" placeholder="Email" />
                </div>
                <div className={styles.form_subject_box}>
                  <input className={styles.form_subject_input} type="text" name="subject" placeholder="Subject" />
                </div>
                <div className={styles.form_message_box}>
                  <textarea className={styles.form_message_input} type="text" name="message" placeholder="Message" />
                </div>
              </form>
              <div className={styles.main_send_message_button}>
            <Link href="#" className={styles.send_message_button}>Send Message</Link>
            </div>
          </div>
          {/*login section of brainlyidea*/}
          <div className={styles.signup_page}>
            <div className={styles.signup_box}>
              {console.log("User", user)}
              <h2 className={styles.signup_box_content}>Contact Us</h2>
              <hr className={styles.contact_line}></hr>
              <p className={styles.signup_or_content}>Write to us if you have any questions, queries or suggestions regarding any page/content published on Brainifyidea.com</p><br></br><br></br><br></br>
              <Link href='#' className={styles.supportmail_link}><HiMail className={styles.supportmail_icon}></HiMail><spam className={styles.supportmail_content}>support@brainifyidea.com</spam></Link><br></br><br></br><br></br><br></br><br></br>
              <p>FOLLOW US ON</p>
              <div className={styles.signup_icons}>
                <Link href="#" className={styles.facebook_link}>
                  <FaFacebookF className={styles.facebook_icon}></FaFacebookF>
                </Link>
                <Link href="#" className={styles.instagram_link}>
                  <BsInstagram className={styles.google_icon}></BsInstagram>
                </Link>
                <Link href="#" className={styles.linkedin_link}>
                  <ImLinkedin2 className={styles.linkedin_icon}></ImLinkedin2>
                </Link>
                <Link href="#" className={styles.signup_twitter_link}>
                  <FaTwitter className={styles.twitter_icon}></FaTwitter>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  </>
  )
}

export default contactus
