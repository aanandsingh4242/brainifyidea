import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/profile.module.css';
import { FaFacebookF, FaTwitter, FaRegCommentAlt } from 'react-icons/fa';
import { BsInstagram, BsShare } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { MdOutlineTipsAndUpdates, MdWork, MdEdit } from 'react-icons/md';
import { GoKebabHorizontal } from 'react-icons/go';
import { RiDeleteBin5Line } from 'react-icons/ri';

function profile() {

    //onClick option for kebab_icon
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }

    //onMouseOver and onMouseOut for kebeb_icon
    const [bgColor, setBgColor] = useState("white");


    return (
        <>
            <Head>
                <title>Profile</title>
                <Link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className={styles.main_body}>
                <div className={styles.body}></div>
                <div className={styles.container}>
                    <div className={styles.main_column}>
                        <div className={styles.card}>
                            <Image src="/../public/testing_profile.jpg" width={90} height={90} className={styles.image}></Image>
                            <Link href="#" className={styles.edit_profile}><span className={styles.edit_profile_button}>Edit Profile</span></Link>
                            <div>
                                <span className={styles.fullname}>Full Name</span>
                            </div>
                        </div>

                        <div className={styles.main_content}>
                            <div className={styles.main_bio}>
                                <p className={styles.main_fonts}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>

                            <div className={styles.work1}><span><MdWork className={styles.test}></MdWork>Works at something</span></div>

                            <div className={styles.main_social_list}>
                                <Link href="#" className={styles.profile_facebook_link}>
                                    <FaFacebookF className={styles.facebook_icon}></FaFacebookF>
                                </Link>
                                <Link href="#" className={styles.profile_instagram_link}>
                                    <BsInstagram className={styles.instagram_icon}></BsInstagram>
                                </Link>
                                <Link href="#" className={styles.profile_twitter_link}>
                                    <FaTwitter className={styles.twitter_icon}></FaTwitter>
                                </Link>
                            </div>
                            <div className={styles.all_button}>
                                <span className={styles.like_button}>0<br></br> Like</span>
                                <span className={styles.follow_button}>0<br></br> Follower</span>
                                <span className={styles.following_button}>0<br></br> Following</span>
                            </div>
                            <div className={styles.post_your_ideas}>
                                <Link href="#" className={styles.posts_link}>Posts</Link>
                                <span className={styles.add_ideas}>
                                    <Link href="#" className={styles.message_button}>Add Your Ideas Here</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.posts}><br></br>
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
                    <div>
                        <div className={styles.first_post}>
                            <Image src="/../public/testing_profile.jpg" width={40} height={40} className={styles.first_post_profile}></Image>
                            <Link href="#" className={styles.first_post_profile_fullname}>Full Name
                                <spam className={styles.topic}>Topic</spam>
                                <GoKebabHorizontal className={styles.kebab_icon} />
                            </Link>
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
            </div>
        </>
    )
}

export default profile
