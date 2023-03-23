import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from '../styles/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import { FaFacebookF, FaTwitter, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { ImUser } from 'react-icons/im'
function login() {

    //this is the new user section to manage the state of user
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    axios.post("http://localhost:4001/login", user)
    .then(res => alert(res.data.message))
  }

 {/*This is backend and frontend connecton */}
    // const [data, setData] = useState("");

    // const getData = async() =>{
    //     const response = await axios.get("http://localhost:4001/login");
    //     setData(response.data);
    // }

    // useEffect(() =>{
    //     getData()
    // },[]);
    return (
        <>
        {/* <div>{data}</div> */}
            <div className={styles.main_login_page}>
                <Head>
                    <title>Brainify Idea | Login</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main_login}>
                    <div className={styles.main_login_box}>
                        {/*login section of brainlyidea*/}
                        <div className={styles.login_page}>
                            <div className={styles.login_box}>
                                {console.log(user)}
                                <h2 className={styles.login_box_content}>Login</h2>
                                {/*Social login section of brainlyidea*/}
                                <div className={styles.main_login_form}>
                                    <div className={styles.login_form_email_box}>
                                        <ImUser className={styles.login_form_username_icon}></ImUser>
                                        <input className={styles.login_form_email} type="text" name="username" value={user.username} onChange={ handleChange } placeholder="Username" />
                                    </div>
                                    <div className={styles.login_form_password_box}>
                                        <MdLockOutline className={styles.login_form_lockout_icon}></MdLockOutline>
                                        <input className={styles.login_form_password} type="password" name="password" value={user.password} onChange={ handleChange } placeholder="Password" />
                                        <AiOutlineEyeInvisible className={styles.login_form_password_visible}></AiOutlineEyeInvisible>
                                    </div>
                                    <div className={styles.login_rem_forgot}>
                                        <label className={styles.login_rem}>
                                            <input className={styles.login_rem_checkbox} type="checkbox" name="remember" />Remember me
                                        </label>
                                        <Link href="#" className={styles.login_forgot}>Forgot Password?</Link>
                                    </div>
                                    <Link href="#" className={styles.login_button} onClick={login}>Login</Link>
                                </div>
                                <p className={styles.login_or_content}>or <br></br> Login with</p>
                                <div className={styles.login_icons}>
                                    <Link href="#" className={styles.login_facebook_link}>
                                        <FaFacebookF className={styles.facebook_icon}></FaFacebookF>
                                    </Link>
                                    <Link href="#" className={styles.login_google_link}>
                                        <BsGoogle className={styles.google_icon}></BsGoogle>
                                    </Link>
                                    <Link href="#" className={styles.login_twitter_link}>
                                        <FaTwitter className={styles.twitter_icon}></FaTwitter>
                                    </Link>
                                </div>
                                <p className={styles.signup_last_content}>Don't have an account!
                                    <Link href="/signup" className={styles.last_signup_link}> Signup</Link>
                                </p>
                            </div>
                        </div>
                        <div className={styles.main_signup}>{/*sign up section*/}
                            <Image src="/../public/white_logo.png" width={90} height={90} className={styles.site_logo}></Image>
                            <h2 className={styles.signup_main_content}>Brainify Idea</h2>
                            <p className={styles.signup_content}>Don't have an account?</p>
                            <Link href="/signup" className={styles.signup_button}>Sign Up</Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default login
