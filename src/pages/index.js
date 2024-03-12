import React, {useRef, useEffect} from "react"
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { FaRegObjectGroup, FaCode, FaShapes } from "react-icons/fa"
import Profile from '../../static/profile.mp4' 
import { gsap } from "gsap";

export default function Home() {
    const scrollRef = useRef();

    useEffect(()=>{
      gsap.to(scrollRef.current, {
        rotation: -360,
        transformOrigin: "center",
        duration: 6,
        ease: "none",
        repeat: -1,
       });
    })

  return (
    <Layout>
      <section > 
        <div className={styles.homeDisplay}>
            <div className={styles.skillLists}>
              <ul>
                <li>design  <FaRegObjectGroup></FaRegObjectGroup></li>
                <li>UX/UI design</li>
                <li>Web design</li>
              </ul>
              <ul>
                <li>development <FaCode></FaCode></li>
                <li>HTML</li>
                <li>CSS / SASS</li>
                <li>javaScript</li>
                <li>web animation libraries</li>
                <li>React.js</li>
                <li>Vue.js</li>
              </ul>
              <ul>
                <li>tools <FaShapes></FaShapes></li>
                <li>adobe creative suite</li>
                <li>figma</li>
                <li>etc.</li>
              </ul>
            </div>

            <div className={styles.profileContainer}>
              <video autoPlay loop muted className={styles.profile}> 
                <source src={Profile} type="video/mp4"/>
              </video>
              <div className={styles.introduce}>“ I stay curious and I'm dedicated to design & development, embracing simplicity, minimalism, and occasional maximalism. ”</div>
            </div>

            <div className={styles.bannerContainer}>
                <div className={styles.bannerText1}>Hi there!<br></br> I'm a web designer who loves <span>exploring ideas</span> and <span>making user experiences more inviting.</span> I take joy in <span>enhancing the bond between brands and users</span> through design and teamwork. I'm also passionate about continuous <span>learning and growth</span>. Let's collaborate to craft even better designs together!</div>
              <div lassName={styles.bannerText}>

              </div>
            </div>


              <div className={styles.click}>Click the selected projects 
              <span>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 136" id='scrollAni'> 
                  <defs>
                    <path d="M7,69a60,60 0 1,0 120,0a60,60 0 1,0 -120,0" id='circlePath'></path>
                  </defs>
                  <g>
                    <text x='50%' y='50%' className={styles.arrowDown}>↓</text>
                    <text className={styles.textCurved} id='textCurved' ref={scrollRef}>  
                      <textPath side="right" xlinkHref="#circlePath" >
                        <tspan>• Scroll</tspan>
                        <tspan>• Scroll</tspan>
                        <tspan>• Scroll</tspan>
                      </textPath>
                    </text>
                    <circle className={styles.circle} cx="67" cy="69" r="60"/>
                  </g>
                </svg>
              </span>
            </div>
        </div>
        
       
        

        <div className={styles.projectContainer}>
          <div className={styles.textAniContainer}> 
          <Link className={styles.projectLink} to="/work">
            <p>
              <span className={styles.textAni1}> work work work work work work</span>
              <span className={styles.textAni2}> work work work work work work</span>
            </p>
            <p>
              <span className={styles.textAni1}> work work work work work work </span>
              <span className={styles.textAni2}> work work work work work work</span>
            </p>
            </Link>  
          </div>
          <div className={styles.projectThumbnails}>

            <div className={styles.cheil}>
              <Link className={styles.projectLink} to="/work/cheil">
                 <div className={styles.projectType}><span>Cheil</span>Graphic/web Design</div>
              </Link>
            </div>

            <div className={styles.youtubeLearning}>
              <Link className={styles.projectLink} to="/work/youtube-learning">
                <div className={styles.projectType}><span>YouTube Learning</span>UX/UI DESIGN</div>
              </Link>
            </div>

            <div className={styles.muko}>
              <Link className={styles.projectLink} to="/work/muko">
              <div className={styles.projectType}><span>MUKO</span> WEB DESIGN</div>
              </Link>
            </div>
            <div className={styles.argo}>
              <Link className={styles.projectLink} to='/work/muko'>
                <div className={styles.projectType}><span>ARGO</span> UX/UI DESIGN </div>
              </Link>  
            </div>

        

          </div>
        </div>




      </section>
    </Layout>
  )
}
