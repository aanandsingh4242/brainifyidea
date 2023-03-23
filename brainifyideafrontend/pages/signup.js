import React from 'react'
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/signup.module.css';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi';
import { ImUser } from 'react-icons/im'
import { BsGoogle, BsToggle2Off } from 'react-icons/bs';

function signup() {

// This is the new user section to manage the state of user
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: ""
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


{/*This is eye visible section */}
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (

    <>
      {/* <div>{data}</div>Hello this is testing api signup page */}
      <div className={styles.main_signup_page}>
        <Head>
          <title>Brainify Idea | Signup</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main_signup}>
          <div className={styles.main_signup_box}>
            <div className={styles.main_login}>{/*sign up section*/}
              <Image src="/../public/white_logo.png" width={90} height={90} className={styles.site_logo}></Image>
              <h2 className={styles.login_main_content}>Welcome to Brainify Idea</h2>
              <p className={styles.login_content}>Already have an account?</p>
              <Link href="/login" className={styles.login_button}>LOGIN</Link>
            </div>
            {/*login section of brainlyidea*/}
            <div className={styles.signup_page}>
              <div className={styles.signup_box}>
                {console.log("User", user)}
                <h2 className={styles.signup_box_content}>Create Account</h2>
                {/*Social login section of brainlyidea*/}
                <div className={styles.main_signup_form}>
                  <div className={styles.signup_form_name_box}>
                    <HiOutlineUser className={styles.signup_form_name_icon}></HiOutlineUser>
                    <input className={styles.signup_form_name} type="text" name="fullName" value={user.fullName} placeholder="Full Name" onChange={ handleChange } />
                  </div>
                  <div className={styles.signup_form_username_box}>
                    <ImUser className={styles.signup_form_username_icon}></ImUser>
                    <input className={styles.signup_form_username} type="text" name="username" value={user.username} placeholder="Username" onChange={ handleChange } />
                  </div>
                  <div className={styles.signup_form_email_box}>
                    <FaRegEnvelope className={styles.signup_form_email_icon}></FaRegEnvelope>
                    <input className={styles.signup_form_email} type="email" name="email" value={user.email} placeholder="Email" onChange={ handleChange } />
                  </div>
                  <div className={styles.signup_form_password_box}>
                    <MdLockOutline className={styles.signup_form_password_icon}></MdLockOutline>
                    <input className={styles.signup_form_password} type={visible ? "text" : "password"} name="password" value={user.password} placeholder="Password" onChange={ handleChange } />
                    <AiOutlineEyeInvisible className={styles.signup_form_password_visible} onClick={toggleVisible}></AiOutlineEyeInvisible>
                  </div>
                  <Link href="#" className={styles.signup_button} onClick={ signup }>SIGN UP</Link>
                </div>
                <p className={styles.signup_or_content}>or <br></br>Signup with</p>
                <div className={styles.signup_icons}>
                  <Link href="#" className={styles.signup_facebook_link}>
                    <FaFacebookF className={styles.facebook_icon}></FaFacebookF>
                  </Link>
                  <Link href="#" className={styles.signup_google_link}>
                    <BsGoogle className={styles.google_icon}></BsGoogle>
                  </Link>
                  <Link href="#" className={styles.signup_twitter_link}>
                    <FaTwitter className={styles.twitter_icon}></FaTwitter>
                  </Link>
                </div>
                <p className={styles.last_login_content}>Already have an account!
                  <Link href="/login" className={styles.last_login_link}> Login</Link>
                </p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}

export default signup
