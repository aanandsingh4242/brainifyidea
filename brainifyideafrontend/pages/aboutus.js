import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from "reactstrap";
import styles from '../styles/aboutus.module.css'
import Head from 'next/head'
import Nav from '../components/nav'

function problem() {

  return (
    <>
      <div className={styles.main_body}>
        <Head>
          <title>Brainify Idea | About Us</title>
          <Link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav></Nav>

        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col sm className={styles.column_first}>
              <div className={styles.main_content}>
                <h1 className={styles.main_heading}>ABOUT US</h1>
                <p>Welcome to Brainify Idea, a community of innovators, entrepreneurs, and creative thinkers who believe that great ideas can change the world. Our mission is to empower people to share their ideas and get the support they need to turn them into reality. We believe that by connecting people with diverse backgrounds and skills, we can create a more vibrant, dynamic, and innovative society.</p>
              </div>
              <Link href="#" className={styles.learnmore_button}>Learn More</Link>
            </Col>

            <Col sm className={styles.column_second}>
              <Image src="/../public/aboutus.png" width={664} height={490}></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default problem