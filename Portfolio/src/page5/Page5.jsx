import React from 'react'
import './pg5.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from "@gsap/react"
import Insta from '../assets/images/insta.jpg'
import Twitt from '../assets/images/xicon.jpg'
import Git from '../assets/images/github.jpg'
import Linked from '../assets/images/LinkedIn.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page5() {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".contact-txt",{
        scrollTrigger: {
          trigger: ".contact-txt",
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
        gsap.from(".connect",{
        scrollTrigger: {
          trigger: ".connect",
          toggleActions:"play none none reverse" ,
          start: "70px 80%"
      },
      x: -750,
      duration: 1,
      ease: true
        })
    },[])

    const notify = () => toast('🦄Thanku for contacting me',{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });

//template_xp8vvan

//service_xzt017r

//d6RYe1ivHySp0Qa5P

  return (
  

    <div className='page5'>
        <div className="contact-txt">
            <h1>CONTACT ME</h1>
            <h2>Get in touch..</h2>
        </div>
        <div className="connect">
            <div className="mail">
                <div className="emailbox">
                    <div className="input">
                        <input className='namebox' id='textbox' type="text" placeholder='Enter Your Name'/>
                        <input className='namebox' id='textbox' type="text" placeholder='Enter Your Email Address'/>
                        <textarea name="messagebox" id="messagebox" rows="10"placeholder='Please Write your message'></textarea>
                        <div className="bttn-box" onClick={notify}>
                            <button id='sentbttn' onClick={notify}>Send</button>
                            
                        </div>
                    </div>
                    <div className="socials">
                        <a href="https://www.instagram.com/4mal_varghese/" target='_blank' id='social-img1'><img src={Insta} alt="" /></a>
                        <a href="https://twitter.com/amalv2004" id='social-img2' target='_blank'><img src={Twitt} alt="" /></a>
                        <a href="https://www.linkedin.com/in/amal-varghese-670225291/" target='_blank' id='social-img3'><img src={Linked} alt="" /></a>
                        <a href="https://github.com/codewizard-2004" target='_blank'  id='social-img4'><img src={Git} alt="" /></a>
                    </div>
                </div>
            <ToastContainer/>
            </div>
            
           
        </div>
    </div>

  )
}
