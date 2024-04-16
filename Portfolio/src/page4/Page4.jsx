import React from 'react'
import './pg4.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from "@gsap/react"

export default function Page4() {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".work-card1",{
    scrollTrigger: {
      trigger: ".work-card1",
      toggleActions:"play none none reverse" ,
      start: "70px 80%"
  },
  x: -600,
  duration: 1,
  ease: true
    })
},[])


useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".work-card2",{
  scrollTrigger: {
    trigger: ".work-card2",
    toggleActions:"play none none reverse" ,
    start: "70px 80%"
},
x: -600,
duration: 1,
ease: true
  })
},[])

useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".work-card3",{
  scrollTrigger: {
    trigger: ".work-card3",
    toggleActions:"play none none reverse" ,
    start: "70px 80%"
},
x: -600,
duration: 1,
ease: true
  })
},[])

useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#mycard1",{
  scrollTrigger: {
    trigger: "#mycard1",
    toggleActions:"play none none reverse" ,
    start: "70px 80%"
},
x: -600,
duration: 1,
ease: true
  })
},[])

useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#mycard2",{
  scrollTrigger: {
    trigger: "#mycard2",
    toggleActions:"play none none reverse" ,
    start: "70px 80%"
},
x: +600,
duration: 1,
ease: true
  })
},[])

useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#mycard3",{
  scrollTrigger: {
    trigger: "#mycard3",
    toggleActions:"play none none reverse" ,
    start: "70px 80%"
},
x: -600,
duration: 1,
ease: true
  })
},[])




  return (
    <div className='page4'>
      <div className="lg">
        <div className="wtext">
          <h1>WORK EXPERIENCE</h1>
          <h2>What I've done so far..</h2>
        </div>
        <div className="work">
          <div className="partl">
            <div className="work-card" id='mycard1'>
              <div className="desc"></div>
              <div className="triangle-right"></div>
            </div>
            <div className="timeline"></div>
            <div className="work-card" id='mycard3'>
              <div className="desc"></div>
              <div className="triangle-right"></div>
            </div>
          </div>
          <div className="linepart">
            <div className="main-line"></div>
            <div className="circle-container">
              <div className="main-circle"></div>
              <div className="main-circle"></div>
              <div className="main-circle"></div>
              </div>
          </div>
          <div className="partr">
            <div className="timeline"></div>
            <div className="work-card" id='mycard2'>
              <div className="triangle-left"></div>
              <div className="desc"></div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="sm">
        <div className="wtext">
          <h1>WORK EXPERIENCE</h1>
          <h2>What I've done so far..</h2>
        </div>
        <div className="work">
          <div className="work-card">
            <div className="work-card1" id='work-card123'>
              <div className="desc"></div>
              <div className="triangle-right"></div>
            </div>
            <div className="work-card2" id='work-card123'>
              <div className="desc"></div>
              <div className="triangle-right"></div>
            </div>
            <div className="work-card3" id='work-card123'>
              <div className="desc"></div>
              <div className="triangle-right"></div>
            </div>
          </div>
          <div className="main-line-circle">
            <div className="main-line"></div>
            <div className="circle-container">
              <div className="main-circle"></div>
              <div className="main-circle"></div>
              <div className="main-circle"></div>
            

            </div>
            
          </div>
  
        </div>
      </div>

    </div>
  )
}
