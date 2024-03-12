import React from 'react';
import {navigate} from 'gatsby';


import Layout from '../../components/Layout';

import * as styles from '../../styles/workProject.module.css';

import {BiArrowBack, BiLinkExternal} from "react-icons/bi";

import argoBg from '../../../static/argo-thumbnail.png';
import stayHome from '../../../static/argo-stayhome.png';
import ar from '../../../static/argo-ar.png';
import healthChallenges from '../../../static/argo-health-challenges.png';
import persona1 from '../../../static/argo-persona1.png'
import persona2 from '../../../static/argo-persona2.png'
import persona3 from '../../../static/argo-persona3.png'
import argoNotes from'../../../static/argo-notes.png'
import argoIA from'../../../static/argo-ia.png'
import argoUserFlow from'../../../static/argo-user-flow.png'
import argoJourneyMap from'../../../static/argo-journey-map.png'
import argoWireframe from '../../../static/argo-wireframe.png'
import argoMockup from'../../../static/argo-mockup.png'
// import argoVideo from '../../static/argo.mp4' 
import ArgoVideo from'../../../static/argo.mp4'

export default function Argo() {
  return (
    <Layout>
        <div className={styles.projectContainer}>
            <div className={styles.title }>Argo</div>
            <div>
                <img src={argoBg} alt="Argo mockup image" className={styles.mainVisual}/>
            </div>
            <div className={styles.projectNav}><div onClick={() => navigate(-1)}><BiArrowBack></BiArrowBack></div> </div>
            <div className={styles.overview}>
                <h2>Overview</h2>
                <p>AR mobile application that provides the past images of the historical sites in the users' city to compare then and now of the sites.</p>
                <ul className={styles.details}>
                    <li><div>type:</div> AR Moblil Application</li>
                    <li><div>role:</div> UX/UI designer<br/>App developer</li>
                    <li><div>Tool:</div> Figma<br/>Flutter<br/>Unity</li>
                    <li><div>team:</div>Group10<br/>Enkhmaa Sandagdorj<br/>Eunsong Kim<br/>Kwang Yeol Park</li>
                    <li><div>timeLine:</div> 2months</li>
                </ul>
            </div>

            <div className={styles.statement}>
                People had gathered, cities were created by people, and new buildings were stacked up continuously. Cities grew and declined by interacting with people. The theme of this project is <span>City of Experience.</span> Also, we decided to focus on <span>history</span> because the history of the cities is accumulated by people's experience with developing and shrinking. Due to COVID-19, we are facing unprecedented circumstances, and during this time, people are advised to have <span>less social activity</span>and <span>stay home.</span> People do not have much of the daily enjoyment and pleasure that they are used to having. Even though we are adapting and changing, we would still like to feel <span>a little of normalcy.</span> Therefore, this app is designed to entertain its users to <span>enjoy the little things in our city.</span>
            </div>

            <div className={styles.workSection}> 
                <h2>research</h2>
                <div className={styles.argoResearch}>
                     <div className={styles.argoResearchContainer}>
                         <div>
                             <div className={styles.researchIcon}>
                                 <img src={stayHome} alt="stayhome icon"/>
                             </div>
                             <div className={styles.argoResearchP}>
                                <p>First, after COVID-19, people are more staying home and more likely to be less active. Also, it has negative impacts on the small businesses because people are tending to stay home.</p>
                             </div>
                         </div>
                         <div>
                             <div className={styles.researchIcon}>
                                 <img src={ar} alt="ar icon" />
                            </div>
                             <div className={styles.argoResearchP}> 
                                 <p>Second, AR on art and historical tourism is growing and can be a new chapter in the tourism industry. It is a meeting of traditional tourism and new technology. When seeing the examples, it is giving a unique experience to tourists and audiences, getting attention when they are using it.</p>
                             </div>
                         </div>
                     </div>
                  
                    <div className={styles.argoArticleContainer}>
                        <div>
                            <h4>MUMA| MILAN - MUSEUM OF AUGMENT URBAN ART</h4>
                            <p>
                            An example of use of AR on the art in the city.
                            </p>
                            <a href="https://www.youtube.com/watch?v=PJnxShb175U&ab_channel=BEPARTThePublicImaginationMovement" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                        </div>
                        <div>
                            <h4>HOW MUSEUN ARE USING AUGMENTED REALITY</h4>
                            <p>
                            Overall explanation of AR and possibilities of the use of AR in historical site.
                            </p>
                            <a href="https://www.museumnext.com/article/what-can-ar-do-to-bring-heritage-sites-to-life/" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                        </div>
                        <div>
                            <h4>CHANGE IN EX EXERCISE HABITS DURING THE CORONAVIRUS</h4>
                            <p>
                            A survey of doing exercise after pandemic.
                            </p>
                            <a href="https://www.statista.com/statistics/1110985/covid-exercise-habits/" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                        </div>
                        <div>
                            <h4>EARLY EFFECTS OF THE COVID-19 PANDEMIC ON PHYSICAL ACTIVITY AND SEDENTARY BEHAVIOR IN CHILDREN LIVING IN THE U.S.</h4>
                            <p>
                            A survey result of physical activity of children in the US after COVID-19.
                            </p>
                            <a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-020-09429-3" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                        </div>
                        <div>
                            <h4>MORE CANADIANS WILL BE WORKING FROM HOME POST-PANDEMIC, STATCAN DATA SUGGESTS</h4>
                            <p>
                            COVID-19 and its effect on the exercise and activity.
                            </p>
                            <a href="https://www.ctvnews.ca/health/coronavirus/more-canadians-will-be-working-from-home-post-pandemic-statcan-data-suggests-1.5023822" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                        </div>
                        <div>
                            <h4>THE IMPACT OF COVID-19 ON SMALL BUSINESS OUTCOMES AND EXPECTATIONS</h4>
                            <p>
                            A survey of the impact of Covid-19 on small businesses
                            </p>
                            <a href="https://www.pnas.org/doi/10.1073/pnas.2006991117#abstract" target='_blank'><BiLinkExternal></BiLinkExternal></a>
                        </div>
                    </div>

                    <div>
                        <h3>current challenges</h3>
                        <div className={styles.argoChallenges}>
                            <div className={styles.argoChallengesContainer}>
                                <h4>since pandemic</h4>
                                <div>
                                    <div className={styles.challengeList}>
                                        <div className={styles.challengePernectage}>40%</div>
                                        <div>Canadians working from home</div>
                                    </div>
                                    <div className={styles.challengeList}>
                                        <div className={styles.challengePernectage}>20%</div>
                                        <div>Inactive Canadians</div>
                                    </div>
                                    <div className={styles.challengeList}>
                                        <div className={styles.challengePernectage}>95%</div>
                                        <div>Canadian Youths don't meet basic physical activity guidelines </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.argoChallengesContainer}>
                                <h4>post pandemic</h4>
                                <div className={styles.challengeList}>
                                    <div className={styles.challengePernectage}>25%</div>
                                    <div>Post-pandemic Employees giving the option to work from home</div>
                                </div>
                                <div className={styles.challengeList}>
                                    <div className={styles.challengePernectage}>14%</div>
                                    <div>Post-pandemic Employers require employees to work from home</div>
                                </div>
                                <p className={styles.note}>
                                    <a href="https://www.ctvnews.ca/health/coronavirus/more-canadians-will-be-working-from-home-post-pandemic-statcan-data-suggests-1.5023822" target='_blank'>NOTE: based on More Canadians will be working from home post-pandemic StatCan data suggests and Early effects of the COVID-19 pandemic on physical activity and sedentary behavior in children living in the U.S.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.argoHealthChallenges}>
                        <h3>Health Challenges - Lack of Physical Activity</h3>
                        <img src={healthChallenges} alt="argo health challenge" width='100%'/>
                    </div>
                </div>
            </div>

            <div className={styles.workSection}>
                <div className={styles.argoObjectives}>
                    <h2>objectivies</h2>
                    <ul className={styles.argoObjectivesList}>
                        <li>TO BUILD IDEAS ABOUT THE SMART CITY</li>
                        <li>TO INTEGRATE TECH AND CITY</li>
                        <li>TO ENCOURAGE PEOPLE MORE ACTIVE</li>
                        <li>TO CREATE A MOBILE APPLICATION</li>
                        <li>TO HAVE MINIMAL STEPS</li>
                    </ul>
                </div>
                <div className={styles.argoGoals}>
                    <h3>goals</h3>
                    <div>
                        <h4>User Goals</h4>
                        <div className={styles.argoGoalLists}>
                            <div>
                                <p>Having more <span>physical activities</span> &</p>
                            </div>
                            <div>
                                <p><span>Going out</span> while keeping social distancing &</p>
                            </div>
                            <div>
                                <p><span>Entertaining</span> aspects &</p>
                            </div>
                            <div>
                                <p><span>Educational</span> activities</p>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: '2rem'}}>
                        <h4>business Goals</h4>
                        <div className={styles.argoGoalLists}>
                            <div>
                                <p>Promoting <span>city experiences</span> &</p>
                            </div>
                            <div>
                                <p>Promoting <span>local historical attraction</span> &</p>
                            </div>
                            <div>
                                <p>Allowing peole to <span>commute in a healthier way</span> &</p>
                            </div>
                            <div>
                                <p>Implementing <span>AR into daily life</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.workSection}>
                <h2>personas</h2>
                <img src={persona1} alt="argo persona 1" width='100%'/>
                <img src={persona2} alt="argo persona 2" width='100%'/>
                <img src={persona3} alt="argo persona 3" width='100%'/>
            </div>

            <div className={styles.workSection}>
                <h2>brain stroming</h2>
                <ul className={styles.argoBrainStromingList}>
                    <li>
                        <h4>01</h4>
                        <div className={styles.argoBrainStromingTheme}>User Explores</div>
                        <div>
                            <p>How might we encourage users to go out.</p>
                        </div>
                    </li>
                    <li>
                        <h4>02</h4>
                        <div className={styles.argoBrainStromingTheme}>User Education</div>
                        <div><p>How might we give information about historical site of the users’ city.</p></div>
                    </li>
                    <li>
                        <h4>03</h4>
                        <div className={styles.argoBrainStromingTheme}>Business of tourism</div>
                        <div><p>How might we promote local tourism.</p></div>
                    </li>
                    <li>
                        <h4>04</h4>
                        <div className={styles.argoBrainStromingTheme}>Additional questions</div>
                        <div>
                            <p>How might we put more entertaining factor on the app?</p>
                            <p>How might we put pedometer on the app?</p>
                        </div>
                    </li>
                </ul>

                <div className={styles.argoNotes}>
                    <div>
                        <img src={argoNotes} alt="argo notes" width='100%'/>
                    </div>
                    <div>
                        <ul>
                            <li>Interface Space</li>
                            <li>It is supposed to be developed as an mobile application about history and city.</li>
                        </ul>
                        <ul>
                            <li>Core User Needs</li>
                            <li>Maps: Maps with searching location function about historical sites data.</li>
                            <li>AR layers: Information and images of the sites.</li>
                            <li>Camera: Take a picture with the AR image laye.</li>
                            <li>Sending messages: Sending the pictures with the messages to the users friends.</li>
                        </ul>
                        <ul>
                            <li>Requirements</li>
                            <li>Functional requirements: <br/>Landing Page, Map page, Search bar, AR of Historical Site, Camera page, Social media share</li>
                            <br/>
                            <li>Non-Functional requirements: <br/>The system should operate on mobile devices. <br/>The app home screen should appear within 3 seconds after launch. <br/>The system should track users location. <br/>The system should access to users camera. <br/>The app will generate native share function</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className={ styles.argoAI}>
                <h2>information architecture</h2>
                <img src={argoIA} alt="argo information architecture"/>
            </div>

            <div className={ styles.argoUserFlow}>
                <h2>user flow</h2>
                <img src={argoUserFlow} alt="argo user flow"/>
            </div>

            <div className={styles.workSection}>
                <h2>user journey map</h2>
                <img src={argoJourneyMap} alt="argo user journey map" width='100%'/>
            </div>

            <div className={styles.workSection}>
                <h2>wireframe</h2>
                <img src={argoWireframe} alt="argo wireframe" width='100%'/>
            </div>
            <div className={styles.workSection}>
                <h2>mockups</h2>
                <img src={argoMockup} alt="argo wireframe" width='100%'/>
            </div>

            <div className={styles.workSection}>
                <h2>Argo ideo demo</h2>
                <video autoPlay loop muted className={styles.argoVideo}>
                    <source src={ArgoVideo} type="video/mp4" />
                </video>
            </div>

       
            
            {/*
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
            </div> */}




        </div>
    </Layout>
 
  )
}
