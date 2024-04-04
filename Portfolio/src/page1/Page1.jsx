import React from 'react'
import "./pg1.css"
import Amal from '../assets/images/amal.jpg'
import Typewriter from 'typewriter-effect';
import VanillaTilt from 'vanilla-tilt'
import { useRef, useEffect } from 'react';

import HTMLi from '../assets/images/tools/html.png'
import CSSi from '../assets/images/tools/css.png'
import jvs from '../assets/images/tools/js.png'
import ReactImg from '../assets/images/tools/react.png'
import Nodeimg from '../assets/images/tools/nodejs.png'
import Tail from '../assets/images/tools/tailwind.png'
import Bootstrap from '../assets/images/tools/boots.png'
import Mysql from '../assets/images/tools/mysql.png'
import Mongo from '../assets/images/tools/mongodb.png'
import Git from '../assets/images/tools/git.png'
import Python from '../assets/images/tools/Python.png'
import Java from '../assets/images/tools/java.png'


export default function Page1() {

  const tiltRef = useRef(null);

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
        
        <div className="tool-box">
          <div className="html" id='tool'>
            <img src={HTMLi} alt="" id='tool-img'/>
          </div>
          <div className="css" id='tool'>
            <img src={CSSi} alt="" id='tool-img'/>
          </div>
          <div className="Js" id='tool'>
            <img src={jvs} alt="" id='tool-img'/>
          </div>
          <div className="React" id='tool'>
            <img src={ReactImg} alt="" id='tool-img'/>
          </div>
          <div className="node" id='tool'>
            <img src={Nodeimg} alt="" id='tool-img'/>
          </div>
          <div className="tailwind" id='tool'>
            <img src={Tail} alt="" id='tool-img'/>
          </div>
          <div className="bootstrap" id='tool'>
            <img src={Bootstrap} alt="" id='tool-img'/>
          </div>
          <div className="mysql" id='tool'>
            <img src={Mysql} alt="" id='tool-img'/>
          </div>
          <div className="mongodb" id='tool'>
            <img src={Mongo} alt="" id='tool-img'/>
          </div>
          <div className="git" id='tool'>
            <img src={Git} alt="" id='tool-img'/>
          </div>
          <div className="python" id='tool'>
            <img src={Python} alt="" id='tool-img'/>
          </div>
        </div>


      </section>
    </div>
  )
}
