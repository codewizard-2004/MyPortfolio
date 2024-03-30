import { useState } from 'react'
import './App.css'
import Page1 from './page1/Page1.jsx'
import Navbar from './Navbar.jsx'
import Page2 from './page2/Page2.jsx'
import ParticleComponent from './particles/Particles.jsx'
import Page3 from './page3/Page3.jsx'
import Page4 from './page4/Page4.jsx'
import Page5 from './page5/Page5.jsx'


function App() {

  return (
    <>
      <ParticleComponent/>
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      {/* <Navbar/>
      <Page1/>
      <Page2/> */}

    </>
  )
}

export default App