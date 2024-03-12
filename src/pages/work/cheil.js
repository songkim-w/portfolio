import React from 'react';
import {navigate} from 'gatsby';


import Layout from '../../components/Layout';

import * as styles from '../../styles/workProject.module.css';

import { BiArrowBack} from "react-icons/bi";

import costco from '../../../static/cheil_costco.png'
import leons from '../../../static/cheil_leons.png'
import midland from '../../../static/cheil_midland.png'
import cropzn from '../../../static/cheil_cropzn.png'
import ses from '../../../static/cheil_ses.png'
import hkt from '../../../static/cheil_hkt.png'



export default function Cheil() {
  return (
    <Layout>
        <div className={styles.projectContainer}>
            <div className={styles.title }>Cheil Canada</div>
            <div className={styles.projectNav}><div onClick={() => navigate(-1)}><BiArrowBack></BiArrowBack></div></div>
       

            <div className={styles.statement}>
            Cheil Canada is a full-service agency based out of Mississauga, Ontario and part of the Cheil Worldwide network primarily focusing on the Samsung Canada.  In this role, I develop engaging digital and print graphics across various platforms, collaborate on customer personalization strategies, and ensure project alignment with client brand guidelines. 
            </div>


            <div className={styles.web}>
                <h2>Brand store pages for retailer websites</h2>
                <div className={styles.webContainer}> 
                    <a href="https://www.costco.ca/samsung.html" target='_blank'>
                        <img src={costco} alt=" " width='100%'/>
                    </a>
                    <a href="https://www.leons.ca/pages/samsung" target='_blank'>
                        <img src={leons} alt=" " width='100%'/>
                    </a>
                    <a href="https://www.midlandappliance.com/samsung" target='_blank'>
                        <img src={midland} alt=" " width='100%'/>
                    </a>
                </div>
            </div>

            <div className={styles.cropzn}> 
                <h2>CROPZN<span>(Conversion Rate Optimization & Personalization)</span></h2>
                <p className={styles.textSmall}>I collaborated with data analysts to redesign bundles within the Samsung.com website or design new ones. Considering the reusability of bundles, we explored ways for users to more easily select various product packages on a single page. Additionally, we prepared two or more options for AB testing to design for data analysis on which design, copy, and products best met customers' needs and were selected.</p>
                <img src={cropzn} alt=" " width='100%'/>
            </div>


            <div className={styles.ses}> 
                <h2>samsung Experience Store page redesign</h2>
                <p className={styles.textSmall}>I worked alongside another designer to revamp a page that introduces the Samsung Experience Store, contributing to the creation of wireframes and designing images for banners. Our goal was to enhance the overall user experience by creating engaging visuals that effectively showcase the unique features and offerings of the Samsung Experience Store.</p>
                <a href="https://www.samsung.com/ca/samsung-experience-store/about/" target='_blank'>
                <img src={ses} alt=" " width='100%'/>
                </a>
            </div>

            <div className={styles.hkt}> 
                <h2>Hankook Tire event support</h2>
                <p className={styles.textSmall}>I offered graphic design assistance for the Hankook Tire Winter Tire Event, crafting brochures, car decals, banner images, and other visual elements essential for the occasion.</p>
                <img src={hkt} alt=" " width='100%'/>
            </div>




         
        </div>
    </Layout>
 
  )
}
