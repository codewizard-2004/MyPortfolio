import React from 'react'
import './pg4.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from "@gsap/react"

export default function Page4() {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#desc1",{
    scrollTrigger: {
      trigger: "#desc1",
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
    gsap.from("#desc2",{
    scrollTrigger: {
      trigger: "#desc2",
      toggleActions:"play none none reverse" ,
      start: "70px 80%"
  },
  x: 600,
  duration: 1,
  ease: true
    })
  },[])

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#desc3",{
    scrollTrigger: {
      trigger: "#desc3",
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
        <div className="wtext">
          <h1>WORK EXPERIENCE</h1>
          <h2>What I've done so far..</h2>
        </div>
        <div className="work">
          <div className="work1" id='work-box'>
            <div className="desc" id='desc1'>Not Yet </div>
            <div className="triangle-right" id='tr1'></div>
            
            <div className="linet">
              
            </div>
            <div className="logo-circle"></div>
            <div className="timeline"></div>
          </div>

          <div className="work2" id='work-box'>
            <div className="timeline"></div>
            <div className="linet"></div>
            <div className="logo-circle"></div>
            <div className="triangle-left"></div>
            <div className="desc" id='desc2'> Soon</div>
          </div>

          <div className="work1" id='work-box'>
            <div className="desc" id='desc3'></div>
            <div className="triangle-right"></div>
            
            <div className="linet">
              
            </div>
            <div className="logo-circle"></div>
            <div className="timeline"></div>
          </div>
        </div>
      
    </div>
  )
}
