import React from 'react';
import {navigate} from 'gatsby';


import Layout from '../../components/Layout';

import * as styles from '../../styles/workProject.module.css';

import { BiArrowBack, BiLinkExternal } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";




import ylMockup from '../../../static/youtube-learning-mockup.png';
import ylNote from '../../../static/yl-notes.png'
import ylPersona1 from '../../../static/yl-persona1.png'
import ylPersona2 from '../../../static/yl-persona2.png'
import ylPersona3 from '../../../static/yl-persona3.png'
import wireframe1 from '../../../static/yl-l-wireframe-1.png'
import wireframe2 from '../../../static/yl-l-wireframe-2.png'
import wireframe3 from '../../../static/yl-l-wireframe-3.png'
import wireframe4 from '../../../static/yl-l-wireframe-4.png'
import wireframe5 from '../../../static/yl-l-wireframe-5.png'
import wireframe6 from '../../../static/yl-l-wireframe-6.png'
import wireframe7 from '../../../static/yl-l-wireframe-7.png'
import wireframe8 from '../../../static/yl-l-wireframe-8.png'
import wireframe9 from '../../../static/yl-l-wireframe-9.png'
import wireframe10 from '../../../static/yl-l-wireframe-10.png'
import wireframe11 from '../../../static/yl-l-wireframe-11.png'
import wireframe12 from '../../../static/yl-l-wireframe-12.png'
import wireframe13 from '../../../static/yl-l-wireframe-13.png'
import wireframe14 from '../../../static/yl-l-wireframe-14.png'
import wireframe15 from '../../../static/yl-l-wireframe-15.png'
import hWireframe1 from '../../../static/yl-h-wireframe-1.png'
import hWireframe2 from '../../../static/yl-h-wireframe-2.png'
import hWireframe3 from '../../../static/yl-h-wireframe-3.png'
import hWireframe4 from '../../../static/yl-h-wireframe-4.png'
import hWireframe5 from '../../../static/yl-h-wireframe-5.png'
import hWireframe6 from '../../../static/yl-h-wireframe-6.png'
import hWireframe7 from '../../../static/yl-h-wireframe-7.png'
import hWireframe8 from '../../../static/yl-h-wireframe-8.png'
import hWireframe9 from '../../../static/yl-h-wireframe-9.png'
import hWireframe10 from '../../../static/yl-h-wireframe-10.png'
import hWireframe11 from '../../../static/yl-h-wireframe-11.png'
import hWireframe12 from '../../../static/yl-h-wireframe-12.png'
import hWireframe13 from '../../../static/yl-h-wireframe-13.png'
import hWireframe14 from '../../../static/yl-h-wireframe-14.png'
import hWireframe15 from '../../../static/yl-h-wireframe-15.png'
import hWireframe16 from '../../../static/yl-h-wireframe-16.png'

export default function YoutubeLearning() {
  return (
    <Layout>
        <div className={styles.projectContainer}>
            <div className={styles.title}>YouTube Learning</div>
            <div>
                <img src={ylMockup} alt="youtube learning mock image" className={styles.mainVisual}/>
            </div>
            <div className={styles.projectNav}><div onClick={() => navigate(-1)}><BiArrowBack></BiArrowBack></div> 
            </div>
            <div className={styles.overview}>
                <h2>Overview</h2>
                <p>YouTube App focuses on learning about a specific topic. The app is designed for no distraction and consistency in studies.</p>
                <ul className={styles.details}>
                    <li><div>type:</div> UX/UI design</li>
                    <li><div>role:</div> UX designer/ UI designer</li>
                    <li><div>Tool:</div> Figma</li>
                    <li><div>team:</div> solo project</li>
                    <li><div>timeLine:</div> 1month</li>
                </ul>
                <h3>process</h3>
                <ul className={styles.process}>
                    <li>research</li>
                    <li>→</li>
                    <li>ideation</li>
                    <li>→</li>
                    <li>crazy8</li>
                    <li>→</li>
                    <li>perosonas</li>
                    <li>→</li>
                    <li>user journey map</li>
                    <li>→</li>
                    <li>user scenario</li>
                    <li>→</li>
                    <li>Navigation structure</li>
                    <li>→</li>
                    <li>low fidelity wire frame</li>
                    <li>→</li>
                    <li>high fidelity wire frame</li>
                </ul>
            </div>

            <div className={styles.statement}>
            When I first started to be interested in digital design and web development, what I did was watch tutorials on YouTube. On Youtube, there are various types of videos, from just entertainment to very informative videos. So I thought, what if there is YouTube learning that could <span>only watch educational videos and no distraction</span>and among the videos on YouTube and design data <span>optimized</span> for people <span>who want to study with YouTube videos.</span> So I started this project.
            </div>

            <div className={styles.object}>
                <p>
                How might we provide <br/> <span> optimized learning experiences</span><br/>to user with <span>YouTube videos</span>?
                </p>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                <div className={styles.circle4}></div>
                <div className={styles.circle5}></div>
            </div>
            

            <div className={styles.research}>
                <h2>research</h2>
                <div className={styles.researchContainer}>
                    <div>
                        <h4>Benefits of Using YouTube For Your Online Education.</h4>
                        <p>
                        The availability of free, high-quality, and informative videos online on platforms like YouTube is an intuitive addition to modern learning environments. Videos uploaded on your channel can easily be integrated into every online education system to help students learn effectively for free. 
                        </p>
                        <a href="https://web.asu.edu/newblog/benefits-using-youtube-your-online-education" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                    </div>
                    <div>
                        <h4>Half of YouTube viewers use it to learn how to do things they’ve never done.</h4>
                        <p>
                        New Pew research study that surveyed 4,594 Americans in 2018 found that 51 percent of YouTube users say they rely on the video service to figure out how to do new things. Twenty-eight percent of users say they`re on YouTube just to pass the time (many of these users are younger adults), 19 percent are there for guidance on new purchases, while another 19 percent say they use YouTube to help them understand what`s going on in the world
                        </p>
                        <a href="https://www.theverge.com/2018/11/7/18071992/youtube-pew-study-education-news-childrens-videos" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                    </div>
                    <div>
                        <h4>Why Generation Z Learners Prefer YouTube Lessons Over Printed Books.</h4>
                        <p>
                        In a survey released last month of people ages 14 to 23—the so-called Generation Z group—YouTube ranked the highest as a preferred learning tool. Fifty-nine percent picked YouTube as a learning preference.
                        </p>
                        <a href="https://www.edweek.org/teaching-learning/why-generation-z-learners-prefer-youtube-lessons-over-printed-books/2018/09" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                    </div>
                </div>

                <h3>competitor audit</h3>
                <div className={styles.competitor}>
                    <div>
                        <h4><div className={styles.skillShare}></div>skill share</h4>
                        <ul>
                            <li><GiCheckMark></GiCheckMark>Users can see all videos when they subscribe.</li>
                            <li><GiCheckMark></GiCheckMark>Students can interact with the tutors directly.</li>
                            <li><GiCheckMark></GiCheckMark>Background audio</li>
                            <li><GiCheckMark></GiCheckMark>Download video</li>
                        </ul>
                        <p><HiOutlineLightBulb></HiOutlineLightBulb>There are many lectures that users can listen to because they subscribe to the app, but it would be nice to have a list of lecture recommendations tailored to the user on the first screen after onboarding.</p>
                    </div>
                    <div>
                        <h4><div className={styles.masterClass}></div>Master class</h4>
                        <ul>
                            <li><GiCheckMark></GiCheckMark>Lectures by famous figures in the industry.</li>
                            <li><GiCheckMark></GiCheckMark>The content looks high quality.</li>
                            <li><GiCheckMark></GiCheckMark>There is a lecture preview, so it would be good for users to select a course.</li>
                        </ul>
                        <p><HiOutlineLightBulb></HiOutlineLightBulb>It seems there is no interaction between users or between users and instructors.</p>
                    </div>
                    <div>
                        <h4><div className={styles.coursera}></div>Coursera</h4>
                        <ul>
                            <li><GiCheckMark></GiCheckMark>The list of recommended lectures is well-curated on the main page, so users will be curious about the classes while scrolling.</li>
                            <li><GiCheckMark></GiCheckMark>The course detail page design is easy to understand at a glance.</li>
                        </ul>
                        <p><HiOutlineLightBulb></HiOutlineLightBulb>The lecture detail page has more text than other apps, and there is no lecture preview, so I think I will be worried before purchasing the lecture.</p>
                    </div>
                    <div>
                        <h4><div className={styles.udemy}></div>Udemy</h4>
                        <ul>
                            <li><GiCheckMark></GiCheckMark>Career-focused classes</li>
                            <li><GiCheckMark></GiCheckMark>Stars and bestseller marks will help users decide when choosing a course.</li>
                            <li><GiCheckMark></GiCheckMark>There are category buttons at the top of the main page to see the selected list of lectures.</li>
                            <li><GiCheckMark></GiCheckMark>The lecture information is designed well to be easy to understand.</li>
                        </ul>
                        <p><HiOutlineLightBulb></HiOutlineLightBulb> The app has a similar structure to other apps, but the part I like is that users can see the evaluation of the lecture right away. It will be helpful when users select the courses. Also, there are search recommendations on the search page, so users can go to the search result page directly when they tab the button. Furthermore, lecture information is provided so that users can figure out what they can learn at a glance. </p>
                    </div>
                </div>
            </div>

            <div className={styles.ideation}>
                <h2>ideation</h2>
                <img src={ylNote} alt="youtube leanrning ideation" width='100%'/>
            </div>

            <div className={styles.personas}>
                <h2>Personas</h2>
                <img src={ylPersona1} alt="youtube leanrning persona Michael" width='100%'/>
                <img src={ylPersona2} alt="youtube leanrning persona Jasmine" width='100%'/>
                <img src={ylPersona3} alt="youtube leanrning persona Tom" width='100%'/>
            </div>

            <div className={styles.lowWireframe}>
                <h2>wireframes</h2>
                <div className={styles.wireframeGridContainer}> 
                 <img src={wireframe1} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe2} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe3} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe4} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe5} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe6} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe7} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe8} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe9} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe10} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe11} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe12} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe13} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe14} alt="youtube leanrning wireframe " width='100%'/>
                 <img src={wireframe15} alt="youtube leanrning wireframe " width='100%'/>
                </div>
            </div>

            <div className={styles.highWireframe}>
                <h2>high fidelity wireframe</h2>
                <div className={styles.highWireframeGridContainer}>
                    <img src={hWireframe1} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe2} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe3} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe4} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe5} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe6} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe7} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe8} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe9} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe10} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe11} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe12} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe13} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe14} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe15} alt="youtube leanrning high fidelity wireframe "/>    
                    <img src={hWireframe16} alt="youtube leanrning high fidelity wireframe "/>    

                </div>
            </div>
         
        </div>
    </Layout>
 
  )
}
