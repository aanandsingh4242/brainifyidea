import React from 'react'
import styles from "../styles/nav.module.css"
import Link from 'next/link'

function nav() {
  return (
    <nav className={styles.mainnav}>
      <div className={styles.nav}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/aboutus">About Us</Link></li>
        <li><Link href="/problem">Problem</Link></li>
        <li><Link href="/idea">Idea</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/signup">Sign Up</Link></li>
        <li><Link href="/contactus">Contact Us</Link></li>
        <input type="text" placeholder="Search.." className={styles.search}/>
      </div>
    </nav>
  )
}

export default nav
