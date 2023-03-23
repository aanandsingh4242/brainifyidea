import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Container, Row, Col } from "reactstrap";
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/nav'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Brainify Idea</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav></Nav>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col sm className={styles.column_first}>
              <div className={styles.main_content}>
                <h1 className={styles.main_heading}>Welcome to Brainify Idea, the community where ideas meet solutions!</h1>
                <p>We believe that everyone has a great idea waiting to be discovered or developed. That's why we created Brainify Idea, a platform that empowers people to share their ideas and get help from others in turning them into reality. Whether you're an entrepreneur, a student, a creative professional, or just someone with a brilliant idea, Brainify Idea is the perfect place to connect with like-minded individuals and turn your vision into action.</p>
              </div>
            </Col>

            <Col sm className={styles.column_second}>
              <Image src="/../public/home_page.png" width={664} height={500}></Image>
            </Col>

          </Row>
        </Container>

        <footer className={styles.footer}>
          <Link href="#" target="_blank" rel="noopener noreferrer"></Link>
          Powered by {'brainifyidea.com'}
          <span className={styles.logo}>
            <Image src="/public/main_logo.png" alt="Brainifyidea Logo" width={72} height={16} />
          </span>
        </footer>
      </div>
    </>
  )
}
