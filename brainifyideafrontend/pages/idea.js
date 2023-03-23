import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from "reactstrap";
import styles from '../styles/idea.module.css'
import Head from 'next/head'
import Nav from '../components/nav'
import { FaFacebookF, FaTwitter, FaRegCommentAlt } from 'react-icons/fa';
import { BsInstagram, BsShare } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { MdOutlineTipsAndUpdates, MdWork, MdEdit } from 'react-icons/md';
import { GoKebabHorizontal } from 'react-icons/go';
import { RiDeleteBin5Line } from 'react-icons/ri';

function problem() {

  //onClick option for kebab_icon
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  //onMouseOver and onMouseOut for kebeb_icon
  const [bgColor, setBgColor] = useState("white");


  return (
    <>
      <div className={styles.jpt}>
        <Head>
          <title>Brainify Idea | Idea</title>
          <Link rel="icon" href="./main_logo.png" />
        </Head>

        <Nav></Nav>

        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col sm className={styles.column_first}>
              <div className={styles.main_content}>
                <h1 className={styles.main_heading}>Share your idea with the world.</h1>
                <p>Mention your idea here so that the person who see your idea may got helped.</p>
              </div>
              <div className={styles.main_topic}>
                <div className={styles.problem_topic}>Problem Topic</div>
                <input className={styles.problem_topic_textarea} />
                <br /><br />
                <div className={styles.explaination}>Explaination</div>
                <textarea className={styles.explaination_textarea} /><br /><br />
              </div>
              <Link href="#" className={styles.submit_button}>Submit</Link>
            </Col>

            <Col sm className={styles.column_second}>
              <Image src="/../public/idea.jpg" width={664} height={500}></Image>
            </Col>

          </Row>
        </Container>

        <div>
          <div className={styles.first_post}><div>
            <Image src="/../public/testing_profile.jpg" width={40} height={40} className={styles.first_post_profile}></Image>
            <spam className={styles.first_post_profile_fullname}>Full Name
              <GoKebabHorizontal className={styles.kebab_icon} size={20}
                onClick={handleMenuClick}
                style={{ backgroundColor: bgColor }}
                onMouseOver={() => setBgColor('rgb(238, 238, 238)')}
                onMouseOut={() => setBgColor("white")} />
              {showMenu &&
                <div className={styles.mainlist}>
                  <li className={styles.editpost} onClick={() => {
                    // Code to edit the post here
                  }}><MdEdit className={styles.editicon} /> Edit
                  </li>
                  <li className={styles.deletepost} onClick={() => {
                    // Code to delete the post here
                  }}><RiDeleteBin5Line className={styles.deleteicon} /> Delete
                  </li>
                </div>
              }
            </spam>
          </div>
            <spam className={styles.topic}>Topic</spam>
            <div className={styles.first_post_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
            <hr className={styles.main_line2}></hr>
            <div className={styles.first_post_all_buttons}>

              <Link href="#" className={styles.like_button2}>
                <AiOutlineLike className={styles.like_icon}></AiOutlineLike><spam className={styles.like_text}>Like</spam>
              </Link>

              <Link href="#" className={styles.comment_button}>
                <FaRegCommentAlt className={styles.comment_icon}></FaRegCommentAlt><spam className={styles.comment_text}>Comment</spam>
              </Link>

              <Link href="#" className={styles.suggest_button}>
                <MdOutlineTipsAndUpdates className={styles.suggest_icon}></MdOutlineTipsAndUpdates><spam className={styles.suggest_text}>Suggest</spam>
              </Link>

              <Link href="#" className={styles.share_button}>
                <BsShare className={styles.share_icon}></BsShare><spam className={styles.share_text}>Share</spam>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default problem