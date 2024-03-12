import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar></Navbar>
        <div className="content">
            {children}
        </div>
        <footer>
          <div className='thick'></div>
          <div className='thin'></div>
          <p>&copy; 2024 Song Kim</p>
        </footer>
    </div>
  )
}
