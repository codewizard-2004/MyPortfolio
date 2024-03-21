import React from 'react'
import "./pg1.css"
import Amal from '../assets/images/amal.jpg'
import background from './bg.png'
import Typewriter from 'typewriter-effect';
import VanillaTilt from 'vanilla-tilt'
import { useRef, useEffect } from 'react';

export default function Page1() {

  const tiltRef = useRef(null);
  const tiltRef2 = useRef(null);

  useEffect(() => {
    // Access the DOM element using the ref
    const tiltNode = tiltRef.current;

     // Initialize Vanilla Tilt on the DOM element
     VanillaTilt.init(tiltNode, {
       max: 25,
       speed: 400,
       glare: true,
       'max-glare': 0.5,
     })
     // Clean up function to remove event listeners
     return () => tiltNode.vanillaTilt.destroy();
   }, []);

  return (
    <div>
      <section className="page1">
        <img src={background} alt="" id='back'/>
        <img src={Amal} alt="" className='amal' />

        <div className="info-text" ref={tiltRef}>
          <div className="space1"></div>
          <div className="middle">

                <h1>&lt;Hello World&gt; , I'm</h1>
                <h1 id='name'>Amal Varghese</h1>
                <div className="animation-text" id='type-field'>
                <Typewriter
                    options={{
                      strings:["Web Development" , "App Development" , "Data Structures", "Algorithms" , "Machine Learning" , "Tech Entusiastic"] ,
                      autoStart:true ,
                      loop:true
                    }} />
                </div>
          </div>
          <div className="space2">
            <a href="#">Resume</a>
          </div>

                  </div>


      </section>
    </div>
  )
}
