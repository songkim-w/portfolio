import React from 'react';
import {navigate} from 'gatsby';


import Layout from '../../components/Layout';

import * as styles from '../../styles/workProject.module.css';

import { BiArrowBack } from "react-icons/bi";




import xsaverLogoImg from '../../../static/xsaver-logo-img.png';
import xsaverIdeation1 from'../../../static/xsaver-sketch1.png'
import xsaverIdeation2 from'../../../static/xsaver-sketch2.png'
import xsaverSystemMap from'../../../static/xsaver-systemmap.png'
import xsaverJourneyMap from'../../../static/xsaver-journeymap.png'
import xsaverDesign from'../../../static/xsaver-design.png'
import xsaverMockup1 from'../../../static/xsaver-go.png'
import xsaverMockup2 from'../../../static/xsaver-stop.png'


export default function Xsaver() {
  return (
    <Layout>
        <div className={styles.projectContainer}>
            <div className={styles.title}>X-saver</div>
            <div>
                <img src={xsaverLogoImg} alt="X saver thumbnail" className={styles.mainVisual}/>
            </div>
            <div className={styles.projectNav}><div onClick={() => navigate(-1)}><BiArrowBack></BiArrowBack></div> 
            </div>
            <div className={styles.overview}>
                <h2>Overview</h2>
                <p>YouTube App focuses on learning about a specific topic. The app is designed for no distraction and consistency in studies.</p>
                <ul className={styles.details}>
                    <li><div>type:</div> Interaction design</li>
                    <li><div>role:</div> Interaction designer</li>
                    <li><div>Tool:</div> Figma</li>
                    <li><div>team:</div> Team project</li>
                    <li><div>timeLine:</div> 1month</li>
                </ul>
            </div>

            <div className={styles.statement}>
            The <span>X-saver</span> is a <span>safety bar</span> that indicates a line with a <span>red neon sign</span> to notify <span>pedestrians</span> of the stop signal. When a pedestrian waves their hands on sensors, the <span>crosswalk signal</span> changes after a few seconds. A <span>blue neon sign</span> from the safety bar shows the crosswalk. Also, when the signal is changed, the <span>crosswalk sound</span> will be activated to notify the pedestrians to cross the street. <span>Sensors on the road</span> warn the car to slow down some distance before the stop sign. In addition, if a pedestrian <span>jaywalks,</span> a warning tone will sound to prevent safety accidents.
            </div>


            <div className={styles.research}>
                <h2>problems</h2>
                <div className={styles.statement}>
                Many people come up with ideas for a smart future and believe that the technologies they develop always need to be supplemented. Our team has spent a lot of time thinking about what needs to be supplemented in transportation. What we've identified is a problem related to people's careless habits. We believe there was a lack of attention to pedestrians when smart cars and alternative fuels were being developed and people were enthusiastic about them. Yet, people still don't pay attention to jaywalking, and accidents resulting from it continue. If we can alert people about safety and unconsciously warn them, it can make a big difference to smart cities.
                </div>


                <div className={styles.XSaver_researchContainer}>
                    <div>
                        <h4>
                        ALMOST 9,000 PEDESTRIANS WERE KILLED AND HUNDREDS OF THOUSANDS WERE INJURED IN CANADAIN ROAD COLLISIONS BETWEEN 1989 AND 2009.
                        </h4>
                        <h4>ACCORDING TO TRANSPORT CANADA, AN ANALYSIS OF PEDESTRIAN COLLISIONS REVEALED THAT 60% OF PEDESTRIANS KILLED IN TRAFFIC CRASHES WERE TRYING TO CROSS THE ROAD.</h4>
                        <p>
                        Note: Based on "Pedestrians: What Do We Know?" By Robyn D. Robertson, TIRF
                        </p>
                        <h4 className={styles.XSaver_problem}><strong>How might we alert jaywalkers and careless drivers to <mark>prevent accidents</mark> around crosswalks?</strong></h4>
                    </div>
                    
                </div>
            </div>

            <div className={styles.ideation}>
                <h2>ideation</h2>
                <img src={xsaverIdeation1} alt="x saver ideation" width='100%'/>
                <img src={xsaverIdeation2} alt="x saver ideation" width='100%'/>
            </div>

            <div className={styles.ideation}>
                <h2>System map</h2>
                <img src={xsaverSystemMap} alt="x saver systemap" width='100%'/>
            </div>


            <div className={styles.ideation}>
                <h2>Journey map</h2>
                <img src={xsaverJourneyMap} alt="x saver systemap" width='100%'/>
            </div>

            <div className={styles.ideation}>
                <h2>DESIGN - SAFETY BAR DESIGN</h2>
                <img src={xsaverDesign} alt="x saver systemap" width='100%'/>
            </div>

            <div className={styles.ideation}>
                <h2>X-SAVER MOCKUP IMAGES</h2>
                <img src={xsaverMockup1} alt="x saver systemap" width='100%'/>
                <img src={xsaverMockup2} alt="x saver systemap" width='100%'/>
            </div>

        </div>
    </Layout>
 
  )
}
