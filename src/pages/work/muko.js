import React from 'react';
import {navigate} from 'gatsby';


import Layout from '../../components/Layout';

import * as styles from '../../styles/workProject.module.css';

import { BiArrowBack } from "react-icons/bi";

import mukoBg from '../../../static/muko-thumbnail.png';
import mukoMockup from '../../../static/muko-pc.png';
import mukoIdea from'../../../static/muko-idea.png';
import mukoLogoSketchs from'../../../static/muko-logo-idea.png';
import mukoLogoIdeas from'../../../static/muko-logoideation.png';
import mukoVariant1 from'../../../static/muko-logo-variant-0.png';
import mukoVariant2 from'../../../static/muko-logo-variant-1.png';
import mukoVariant3 from'../../../static/muko-logo-variant-2.png';
import mukoVariant4 from'../../../static/muko-logo-variant-3.png';
import mukoColors from'../../../static/muko-colors.png';
import mukoFonts from'../../../static/muko-font.png';
import mukoIa from'../../../static/muko-ia.png';
import wireframe1 from '../../../static/muko-wireframe-01.png';
import wireframe2 from '../../../static/muko-wireframe-02.png';
import wireframe3 from '../../../static/muko-wireframe-03.png';
import wireframe4 from '../../../static/muko-wireframe-04.png';
import wireframe5 from '../../../static/muko-wireframe-05.png';
import wireframe6 from '../../../static/muko-wireframe-06.png';
import wireframe7 from '../../../static/muko-wireframe-07.png';
import wireframe8 from '../../../static/muko-wireframe-08.png';
import wireframe9 from '../../../static/muko-wireframe-09.png';

import wireHFrame1 from '../../../static/muko-h-wireframe-01.png';
import wireHFrame2 from '../../../static/muko-h-wireframe-02.png';
import wireHFrame3 from '../../../static/muko-h-wireframe-03.png';
import wireHFrame4 from '../../../static/muko-h-wireframe-04.png';
import wireHFrame5 from '../../../static/muko-h-wireframe-05.png';
import wireHFrame6 from '../../../static/muko-h-wireframe-06.png';
import wireHFrame7 from '../../../static/muko-h-wireframe-07.png';
import wireHFrame8 from '../../../static/muko-h-wireframe-08.png';
import wireHFrame9 from '../../../static/muko-h-wireframe-09.png';



export default function Muko() {
  return (
    <Layout>
        <div className={styles.projectContainer}>
            <div className={styles.title }>MUKO</div>
            <div>
                <img src={mukoBg} alt="argo mockup image" className={styles.mainVisual}/>
            </div>
            <div className={styles.projectNav}><div onClick={() => navigate(-1)}><BiArrowBack></BiArrowBack></div></div>
            <div className={styles.overview}>
                <h2>Overview</h2>
                <p>Web design for a resort including logo design.</p>
                <ul className={styles.details}>
                    <li><div>type:</div> Web site</li>
                    <li><div>role:</div> Web designer<br/>Web developer</li>
                    <li><div>Tool:</div> HTML/CSS<br/>javaScript</li>
                    <li><div>team:</div> solo project</li>
                    <li><div>timeLine:</div> 3weeks</li>
                </ul>

                <div>
                    <button className={styles.linkBtn}><a href='https://songkim-w.github.io/muko/' target='_blank'>view live</a></button>
                    <button className={styles.linkBtn}><a href='https://github.com/songkim-w/muko' target='_blank'>view code</a></button>
                </div>
            </div>

            <div className={styles.statement}>
            It is a web design project, including <span>logo design.</span> The resort is located in Muskoka, which has beautiful views and nature. The <span>design concept</span> emphasizes <span>the forests</span> and <span>the lake</span>, and I tried putting the idea into the design. For example, <span>the logo</span> is inspired by <span>the trees, lake and sun.</span> The colour pallet reminds the deep forest and lake. For development, I used <span>HTML, CSS, and Vanilla javascript.</span>span The element interacted through the scrolling, mouse moving and clicking. Also, on the bottom part, I put a Canvas tag that has a scroll event. When users scroll down the window, images are changed, and it creates an Image sprite that looks like a video.

            </div>

            <div className={styles.workSection}>
                <img src={mukoMockup} alt="MUKO mockup page" width='100%'/>
            </div>

            <div className={styles.workSection}>
                <h2>ideation</h2>
                <div className={styles.mukoIdeationContainer}>
                    <img src={mukoIdea} alt="muko ideas" />
                    <img src={mukoLogoSketchs} alt="muko logo sketchs" />
                </div>
                
                <div className={styles.logoIdeation}>
                    <h3>logo ideation</h3>
                    <img src={mukoLogoIdeas} alt="muko logo ideation" width='100%'/>
                </div> 
            </div>

            <div className={styles.workSection}> 
                <h2>logo variant</h2>
                <div className={styles.mukoLogoVariantContainer}>
                    <img src={mukoVariant1} alt="MUKO logo variant " />
                    <img src={mukoVariant2} alt="MUKO logo variant " />
                    <img src={mukoVariant3} alt="MUKO logo variant " />
                    <img src={mukoVariant4} alt="MUKO logo variant " />
                </div>
            </div>

            <div className={styles.workSection}>
                <h2>colours</h2>
                <img src={mukoColors} alt="muko color pallet" width='100%'/>
            </div>

            <div className={styles.workSection}>
                <h2>fonts</h2>
                <img src={mukoFonts} alt="muko fonts" width='100%'/>
            </div>

            <div className={styles.workSection}>
                <h2>inforamtion architecture</h2>
                <img src={mukoIa} alt="muko information architecture" width='100%'/>
            </div>


            <div className={styles.mukoWireframe}>
                <h2>wireframes</h2>
                <div className={styles.mukoWireframeContainer}> 
                 <img src={wireframe1} alt="muko wireframe " width='100%'/>
                 <img src={wireframe2} alt="muko wireframe " width='100%'/>
                 <img src={wireframe3} alt="muko wireframe " width='100%'/>
                 <img src={wireframe4} alt="muko wireframe " width='100%'/>
                 <img src={wireframe5} alt="muko wireframe " width='100%'/>
                 <img src={wireframe6} alt="muko wireframe " width='100%'/>
                 <img src={wireframe7} alt="muko wireframe " width='100%'/>
                 <img src={wireframe8} alt="muko wireframe " width='100%'/>
                 <img src={wireframe9} alt="muko wireframe " width='100%'/>
                </div>
            </div>

            <div className={styles.mukoWireframe}>
                <h2>final results</h2>
                <div className={styles.mukoWireframeContainer}> 
                    <img src={wireHFrame1} alt="muko wireframe " width='100%'/>
                    <img src={wireHFrame2} alt="muko wireframe " width='100%'/>
                    <img src={wireHFrame3} alt="muko wireframe " width='100%'/>
                    <img src={wireHFrame4} alt="muko wireframe " width='100%'/>
                    <img src={wireHFrame5} alt="muko wireframe " width='100%'/>
                    <img src={wireHFrame6} alt="muko wireframe " width='100%'/>
                    <img src={wireHFrame7} alt="muko wireframe " width='100%'/>
                    <img src={wireHFrame8} alt="muko wireframe " width='100%'/>
                    <img src={wireHFrame9} alt="muko wireframe " width='100%'/>
                </div>
            </div>




        </div>
    </Layout>
 
  )
}
