import React from 'react'
import './page2.css'
import gvps from '../assets/images/gvps.jpg'
import Stps from '../assets/images/stps.png'
import Mec from '../assets/images/mec.jpg'
import VanillaTilt from 'vanilla-tilt'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from "@gsap/react"


export default function Page2() {
    const tiltRef = useRef(null);
    const tiltRef2 = useRef(null);
    const tiltRef3 = useRef(null);
    

    useEffect(() => {
        const tiltNode = tiltRef.current;
         VanillaTilt.init(tiltNode, {
           max: 25,
           speed: 400,
           glare: true,
           'max-glare': 0.5,
         })
         return () => tiltNode.vanillaTilt.destroy();
       }, []);

       useEffect(() => {
        const tiltNode = tiltRef2.current;
         VanillaTilt.init(tiltNode, {
           max: 25,
           speed: 400,
           glare: true,
           'max-glare': 0.5,
         })
         return () => tiltNode.vanillaTilt.destroy();
       }, []);

       useEffect(() => {
        const tiltNode = tiltRef3.current;
         VanillaTilt.init(tiltNode, {
           max: 25,
           speed: 400,
           glare: true,
           'max-glare': 0.5,
         })
         return () => tiltNode.vanillaTilt.destroy();
       }, []);

       useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".title",{
        scrollTrigger: {
          trigger: ".title" ,
          toggleActions:"play none none reverse" ,
          start: "70px 80%"
      },
      opacity: 0,
      y: -20,
      duration: 1,
      ease: true
        })
    },[])

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".educards",{
        scrollTrigger: {
          trigger: ".educards" ,
          toggleActions:"play none none reverse" ,
          start: "70px 80%"
      },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: true
        })
    },[])
            
        

  return (
    <div>
        <section className="page2">
            <div className="edubox">
                <div className="title">
                    <h1>MY EDUCATION</h1>
                    <h2>What I've learnt so far...</h2>
                </div>
                <div className="educards">
                    <div className="premetric" id='card' ref={tiltRef}>
                        <div className="logo" >
                            <img src={Stps} alt="" />
                        </div>
                        <div className="name" id='stps'>
                            St. Thomas Public School, Perumbavoor
                        </div>
                        <div className="uni">CBSE</div>
                        <div className="time">2020</div>
                        <div className="status">10th Grade</div>
                        <div className="course">AISSE</div>
                        
                        <div className="score">Score: 95%</div>
                        <div className="link">
                            <a href="https://drive.google.com/file/d/144SR-b07z1qmNrkDb2wy7ExjK0NZkXqd/view?usp=sharing" target='_blank'>Certificate</a>
                        </div>
                    </div>
                    <div className="postmetric" id='card' ref={tiltRef2}>
                    <div className="logo">
                        <img src={gvps} alt="" />
                    </div>
                        <div className="name">
                            Greenvalley Public School, Kothamangalam
                        </div>
                        <div className="uni">CBSE</div>
                        <div className="time">2022</div>
                        <div className="status">12th Grade</div>
                        <div className="course">Computer Maths</div>
                        
                        <div className="score">Score: 95%</div>
                        <div className="link">
                            <a href="https://drive.google.com/file/d/140TgVp1bBKGKvo0vJivciUS6Q92dD0nr/view?usp=sharing" target='_blank'>Certificate</a>
                        </div>
                    </div>
                    <div className="btech" id='card' ref={tiltRef3}>
                    <div className="logo">
                        <img src={Mec} alt="" />
                    </div>
                        <div className="name">
                            Model Engineering College, Trikkakara
                        </div>
                        <div className="uni">KTU</div>
                        <div className="time">2023-2027</div>
                        <div className="status">Bachelor of Technology</div>
                        <div className="course">Computer Science Engineering</div>
                        <div className="score">Score: NA</div>   
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}
