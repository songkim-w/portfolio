import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

import Profile from '../../static/song_profile.jpg'

export default function About() {
  return (
      <Layout>
        <div className={styles.about}>
          <div>
          <h1>Hi there, </h1>
          <br/>
            <p>
            I'm Eunsong Kim, a web designer based in Toronto. My journey in design began with a focus on art history during my undergraduate studies. While I enjoyed exploring how people interacted with art and design throughout history, I eventually sought more practical applications in the digital realm. This led me to the web industry, where I discovered the power of digital platforms as windows connecting people and facilitating global communication. The opportunity to design these windows for enhanced user experiences captivated me, prompting my pursuit of interaction design and development at GBC.<br></br><br></br>
            Currently, I am employed at Cheil Canada, where I serve as a graphic and web designer. Here, I continue to refine my skills and contribute to impactful projects that shape digital experiences for our clients.
            </p>
          </div>
          <div><img src={Profile} alt="song profile" width='100%'/></div>

        </div>
    </Layout>
  )
}
