import React, { useEffect, useRef} from 'react'
import { Link } from 'gatsby';
import Layout from '../../components/Layout'
import * as styles from '../../styles/work.module.css'
import { gsap, Expo } from "gsap";
import project0 from '../../../static/cheil.png'
import project1 from '../../../static/youtube-learning-mockup.png'
import project2 from '../../../static/j-mockup.png'
import project3 from '../../../static/muko-pc.png'
import project4 from '../../../static/argo-thumbnail.png'
import project5 from '../../../static/bubblebath-cover.png'
import project6 from '../../../static/xsaver-logo-img.png'

export default function Work() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  
  useEffect(()=>{
    let workList = document.querySelector('#workList');
    workList.addEventListener('wheel', (e)=>{
      e.preventDefault();
      workList.scrollBy({
        left: e.deltaY < 0 ? -30 : 30,
      });
      
    }) 
  })

  const onEnter0  = ()=>{
    tl.current = gsap.timeline()
      .to(q('#projectCover'), {
        x: '200%',
        ease: Expo.easeInOut,
        duration: 1,
      },)


      let projectPreview = document.querySelector('#projectPreview');
      projectPreview.style.backgroundImage = `url(${project0})`;

       

  }


  const onEnter1  = ()=>{
    tl.current = gsap.timeline()
      .to(q('#projectCover'), {
        x: '200%',
        ease: Expo.easeInOut,
        duration: 1,
      },)


      let projectPreview = document.querySelector('#projectPreview');
      projectPreview.style.backgroundImage = `url(${project1})`;

       

  }

  const onEnter2  = ()=>{
    tl.current = gsap.timeline()
      .to(q('#projectCover'), {
        x: '200%',
        ease: Expo.easeInOut,
        duration: 1,
      })

      let projectPreview = document.querySelector('#projectPreview');
      projectPreview.style.backgroundImage = `url(${project2})`
  }

    const onEnter3  = ()=>{
    tl.current = gsap.timeline()
      .to(q('#projectCover'), {
        x: '200%',
        ease: Expo.easeInOut,
        duration: 1,
      })

      let projectPreview = document.querySelector('#projectPreview');
      projectPreview.style.backgroundImage = `url(${project3})`
  }

  const onEnter4  = ()=>{
    tl.current = gsap.timeline()
    .to(q('#projectCover'), {
        x: '200%',
        ease: Expo.easeInOut,
        duration: 1,
      })

      let projectPreview = document.querySelector('#projectPreview');
      projectPreview.style.backgroundImage = `url(${project4})`
  }

  const onEnter5  = ()=>{
    tl.current = gsap.timeline()
    .to(q('#projectCover'), {
        x: '200%',
        ease: Expo.easeInOut,
        duration: 1,
      })

      let projectPreview = document.querySelector('#projectPreview');
      projectPreview.style.backgroundImage = `url(${project5})`
  }

  const onEnter6  = ()=>{
    tl.current = gsap.timeline()
    .to(q('#projectCover'), {
        x: '200%',
        ease: Expo.easeInOut,
        duration: 1,
      })

      let projectPreview = document.querySelector('#projectPreview');
      projectPreview.style.backgroundImage = `url(${project6})`
  }


  const onLeave = ()=>{

    tl.current = gsap.timeline()
      .to(q('#projectCover'), {
        x: 0,
        ease: Expo.easeInOut,
        duration: 0.5,
      })
      


  }
 

  return (
    <Layout>
        <div className={styles.workContainer} ref={el}>
            <div className={styles.workLeft}>
              <div className={styles.workList} id='workList'>
              
              <div className='projectTitle' onMouseEnter={onEnter0} onMouseLeave={onLeave}><Link to='/work/cheil'><span>Cheil Canada<p>Graphic/ Web design</p></span></Link>00</div>
                <div className='projectTitle' onMouseEnter={onEnter1} onMouseLeave={onLeave}><Link to='/work/youtube-learning'><span>YouTube Learning<p>UX/UI Desizgn</p></span></Link>01</div>
                <div className='projectTitle' onMouseEnter={onEnter2} onMouseLeave={onLeave}><Link to='/work/jjewerly'><span>Jjewerly<p>Web Development/ React</p></span></Link>02</div>
                <div className='projectTitle' onMouseEnter={onEnter3} onMouseLeave={onLeave}><Link to='/work/muko'><span>MUKO<p>Web Design</p></span></Link>03</div>
                <div className='projectTitle' onMouseEnter={onEnter4} onMouseLeave={onLeave}><Link to='/work/argo'><span>ARGO<p>UX/UI Design</p></span></Link>04</div>
                <div className='projectTitle' onMouseEnter={onEnter5} onMouseLeave={onLeave}><Link to='/work/bubblebath'><span>Bubblebath<p>Web development/ Vue</p></span></Link>05</div>
                <div className='projectTitle' onMouseEnter={onEnter6} onMouseLeave={onLeave}><Link to='/work/xsaver'><span>X-Saver<p>Interaction Design</p></span></Link>06</div>
              
            
  
        
              </div>
            </div>
            <div className={styles.workRight}>
                <div className={styles.projectPreview} id='projectPreview'></div>
                <div className={styles.projectCover}id='projectCover'> </div>
            </div>
        </div>
    </Layout>
  )
}
