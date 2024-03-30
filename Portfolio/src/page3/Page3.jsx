import React from 'react'
import './pg3.css'
import Protego from './projects/protego.png'
import Y2MP3 from './projects/youtube.ico'
import MyLogo from './projects/logo.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from "@gsap/react"


 
export default function Page3() {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".page3",{
        scrollTrigger: {
          trigger: ".page3" ,
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
    <div className='page3'>
        <section className="ptitle">
            <h1>MY PROJECTS</h1>
            <h2>What I've created so far..</h2>
        </section>
        <section className='card-list'>
            <article className='card'>
                <header className='card-header'>
                    <a href="https://github.com/krishnanx/MECLAB.git" target='_blanck'>
                    <img src={Protego} alt="" id='project-img'/></a>
                    <h2>ProteGo Home Security</h2>
                    <p>Collaborated with a team to develop cheap and affordable modern AI driven alternative to traditional CCTV cameras.
                        This project uses IR and motion sensors to alert any unwanted visitors to the home owner while consuming low power and sthus saving energy
                    </p>
                    <div className="tags">
                        <p className="tag1">#WebDev</p>
                        <p className="tag2">#ReactJS</p>
                        <p className="tag3">#Arduino</p>
                    </div>
                </header>

            </article>

            <article className='card'>
            <header className='card-header'>
                <a href="https://github.com/codewizard-2004/Youtube2MP3.git">
                    <img src={Y2MP3} alt="" id='project-img'/></a>
                    <h2>Youtube2MP3</h2>
                    <p> This is an application made with python that can convert youtube videos into MP3 or MP4 format and then the user can download it in their device storage for free.
                    </p>
                    <div className="tags">
                        <p className="tag1">#python</p>
                        <p className="tag2">#Django</p>
                    </div>
                </header>

            </article>

            <article className='card'>
                <header className='card-header'>
                    <img src={MyLogo} alt="" id='project-img'/>
                    <h2>Personal Portfolio Website</h2>
                    <p>Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface
                    </p>
                    <div className="tags">
                        <p className="tag1">#WebDev</p>
                        <p className="tag2">#ReactJS</p>
                        <p className="tag3">#ThreeJS</p>
                    </div>
                </header>

            </article>

            <article className='card'>
                <header className='card-header'>
                    <p>Project</p>
                    <h2>Soon</h2>
                </header>

            </article>
            <article className='card'>
                <header className='card-header'>
                    <p>Project</p>
                    <h2>Cards are fun</h2>
                </header>

            </article>

        </section>
      
    </div>
  )
}
