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
    gsap.from(".work2",{
    scrollTrigger: {
      trigger: ".work2",
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
          <div className="work-card">
            <div className="work-card1" id='work-card123'>
              <div className="desc"></div>
              <div className="triangle-right"></div>
            </div>
            <div className="work-card1" id='work-card123'>
              <div className="desc"></div>
              <div className="triangle-right"></div>
            </div>
            <div className="work-card1" id='work-card123'>
              <div className="desc"></div>
              <div className="triangle-right"></div>
            </div>
          </div>
          <div className="main-line"></div>
  
        </div>
      
    </div>
  )
}
