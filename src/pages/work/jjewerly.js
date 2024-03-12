import React from 'react';
import {navigate} from 'gatsby';


import Layout from '../../components/Layout';

import * as styles from '../../styles/workProject.module.css';

import { BiArrowBack} from "react-icons/bi";

import jjMockup from '../../../static/j-mockup.png';
import wireframe1 from '../../../static/j-page-0.png'
import wireframe2 from '../../../static/j-page-1.png'
import wireframe3 from '../../../static/j-page-2.png'
import wireframe4 from '../../../static/j-page-3.png'
import wireframe5 from '../../../static/j-page-4.png'
import wireframe6 from '../../../static/j-page-5.png'
import wireframe7 from '../../../static/j-page-6.png'


export default function Jjewerly() {
  return (
    <Layout>
        <div className={styles.projectContainer}>
            <div className={styles.title }>J jewerly</div>
            <div>
                <img src={jjMockup} alt="Jjewerly mock image" className={styles.mainVisual}/>
            </div>
            <div className={styles.projectNav}><div onClick={() => navigate(-1)}><BiArrowBack></BiArrowBack></div></div>
            <div className={styles.overview}>
                <h2>Overview</h2>
                <p>e-commerce website made with React.js</p>
                <ul className={styles.details}>
                    <li><div>type:</div> Web site</li>
                    <li><div>role:</div> Web developer</li>
                    <li><div>Tool:</div> React.js</li>
                    <li><div>team:</div> solo project</li>
                    <li><div>timeLine:</div> 1week</li>
                </ul>

                <div>
                    <button className={styles.linkBtn}><a href='https://songkim-w.github.io/jjewelry/' target='_blank'>view live</a></button>
                    <button className={styles.linkBtn}><a href='https://github.com/songkim-w/jjewerly-react' target='_blank'>view code</a></button>
                </div>
            </div>

            <div className={styles.statement}>
            It is an e-commerce website made with <span>React.js.</span> The main page has links to the categories, and also, the nav reacted by users' scroll is on the top so users can go to each category. The product list is formed repeatedly with the product data. Clicking on a product takes users to the detail page, and the data is also brought from the product data. If users click the <span>add to cart button</span>, the product is added to the shopping cart, and users can <span>add, subtract, or delete</span> the product from the shopping cart. In addition, a <span>search</span> function was added to allow users to find products directly by searching product names or types.
            </div>


            <div className={styles.jjwerlyFinalResult}>
                <h2>final result</h2>
                <div className={styles.jjwerlyContainer}> 
                 <img src={wireframe1} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe2} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe3} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe4} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe5} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe6} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe7} alt="youtube leanrning wireframe " width='100%'/>
                </div>
            </div>


         
        </div>
    </Layout>
 
  )
}
