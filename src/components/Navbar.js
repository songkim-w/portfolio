import React, {useState} from 'react'
import {Link} from 'gatsby'
import { FaRegEnvelope, FaLinkedinIn} from "react-icons/fa";
import { GrMenu} from "react-icons/gr";
import * as styles from '../styles/navbar.module.css'
import resume from '../../static/2024_EunsongKim_resume.pdf'

export default function Navbar() {
    let[navMobile, setNavMobile] = useState(false);

    const current = new Date();
    const date = `${current.getMonth()+1} . ${current.getDate()} . ${current.getFullYear()}`;
  

    return (

      <nav>
        <div className={styles.container}>
          <div> 
            <p className={styles.date}>{date}</p>
          </div>
          <div className={styles.navTop}>
              <Link to="/">
                  <h1>
                      <img src="/logo.png" alt="logo img" className={styles.logoImg}/>
                      <span className={styles.name}>song kim</span></h1>
              </Link>
                <div>
                  <Link to='/'>
                  <h2 className={styles.title}>Eunsong Kim</h2>
                  </Link>
                   
                </div>
                <div onClick={ ()=>{ setNavMobile(!navMobile) } }  className={styles.hamburger}><GrMenu></GrMenu></div>
                <div className={styles.navLinks}>
                    <Link className={styles.link}><a href="mailto:songkim.w@gmail.com"><FaRegEnvelope></FaRegEnvelope></a></Link>
                    <Link className={styles.link}><a href={resume} target="_blank"><FaLinkedinIn></FaLinkedinIn></a></Link>
                </div>
          </div>
          <div className={styles.slogan}> 
              <p></p>
              <div className={styles.thin}></div>
              <div className={styles.thick}></div>
          </div>

          <div className={styles.menuLinks}>
              <Link to="/work">Work</Link>
              <Link to="/about">About</Link>
              <a href={resume} target='_blank'>Resume</a>
          </div>

          {
          navMobile === true
          ?<div className={styles.navBottom}>
            <div className={styles.sloganM}>
              <p></p>
            </div>
            <div className={styles.menuLinksM}>
              <Link to="/work">Work</Link>
              <Link to="/about">About</Link>
              <a href={resume} target='_blank'>Resume</a>
            </div>
            <div className={styles.navLinksM}>
              <Link className={styles.link}><a href="mailto:songkim.w@gmail.com"><FaRegEnvelope></FaRegEnvelope></a></Link>
              <Link className={styles.link}><a href="https://www.linkedin.com/in/songkim0130/" target="_blank"><FaLinkedinIn></FaLinkedinIn></a></Link>
            </div>
          </div>
          :null
        }

        </div>
      </nav>
  )
}
