import React from 'react';
import {navigate} from 'gatsby';


import Layout from '../../components/Layout';

import * as styles from '../../styles/workProject.module.css';

import {BiArrowBack} from "react-icons/bi";

import bbMockup from '../../../static/bubblebath-cover.png';
import wireframe1 from '../../../static/bubblebath-page-0.png'
import wireframe2 from '../../../static/bubblebath-page-1.png'
import wireframe3 from '../../../static/bubblebath-page-2.png'
import wireframe4 from '../../../static/bubblebath-page-3.png'


export default function Bubbnebath() {
  return (
    <Layout>
        <div className={styles.projectContainer}>
            <div className={styles.title }>Bubble Bath</div>
            <div>
                <img src={bbMockup} alt="Jjewerly mock image" className={styles.mainVisual}/>
            </div>
            <div className={styles.projectNav}><div onClick={() => navigate(-1)}><BiArrowBack></BiArrowBack></div></div>
            <div className={styles.overview}>
                <h2>Overview</h2>
                <p>e-commerce website made with Vue.js</p>
                <ul className={styles.details}>
                    <li><div>type:</div> Web site</li>
                    <li><div>role:</div> Web develope <br /> Web Designer</li>
                    <li><div>Tool:</div> Vue.js</li>
                    <li><div>team:</div> solo project</li>
                    <li><div>timeLine:</div> 1week</li>
                </ul>

                <div>
                    <button className={styles.linkBtn}><a href='https://songkim-w.github.io/bubblebath/' target='_blank'>view live</a></button>
                    <button className={styles.linkBtn}><a href='https://github.com/songkim-w/bubblebath-vue' target='_blank'>view code</a></button>
                </div>
            </div>

            <div className={styles.statement}>
            It is a website for small businesses made with <span>VUE.js</span>. I created a website that is as <span>Simple</span> as possible by reflecting the client's needs. The client wanted to focus on the <span>business introduction</span> and <span>price list</span> pages. The main page contains a business introduction part, and the second page includes a <span>service menu table</span>. The <span>accordion tab</span> was added to expand the list of services when the user clicks on the desired service. The last page contains <span>contact information</span> and <span>location information.</span>
            </div>


            <div className={styles.bbFinalResult}>
                <h2>final result</h2>
                <div className={styles.bbContainer}> 
                 <img src={wireframe1} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe2} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe3} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe4} alt="youtube leanrning wireframe " width='100%'/>
                </div>
            </div>


         
        </div>
    </Layout>
 
  )
}
