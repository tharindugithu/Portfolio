import React, { useEffect, useRef, Component } from "react";
import './Body.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import Tilt from 'react-parallax-tilt';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from "swiper/react";

import C1 from './C1.JPG'
import C2 from './C2.JPG'
import C3 from './C3.JPG'
import C4 from './C4.JPG'
import C5 from './C5.JPG'
import C6 from './C6.JPG'
import C7 from './C7.JPG'
import D1 from './D1.JPG'
import D2 from './D2.JPG'
import D3 from './D3.JPG'
import D4 from './D4.JPG'
import D5 from './D5.JPG'
import F1 from './F1.JPG'
import F2 from './F2.JPG'
import F3 from './F3.JPG'
import F4 from './F4.JPG'
import F5 from './F5.JPG'
import F6 from './F6.JPG'
import F7 from './F7.JPG'
import F8 from './F8.JPG'
import h1 from './h1.JPG'
import h2 from './h2.JPG'
import h3 from './h3.JPG'
import h4 from './h4.JPG'
import h5 from './h5.JPG'
import roc from './rocket.png'
import wal2 from './wal2.jpg'
import wal from './wal.jpg'
import profile from './profile.jpg'
import github from './github.png'
import h6 from './health.JPG'
import B1 from './B1.png'
import M1 from './M1.JPG'
import M2 from './M2.JPG'
import A1 from './A1.JPG'
import A2 from './A2.JPG'
import A3 from './A3.JPG'
import A4 from './A4.JPG'
import A5 from './A5.JPG'

export default function Body() {
    const mystyle = {
        textAlign: 'start',
        width: 'fit-content'
    };
    var Carousel = require('react-responsive-carousel').Carousel;
    const [state, setState] = React.useState(true)
    function changeState() {
        setState(prevState => !prevState)
    }
    function toggle() {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup_1 = document.getElementById('popup_1')
        popup_1.classList.toggle('active')
        changeState()
        if (state === true) {
            document.body.style.overflow = "hidden";
            document.getElementById('roc').style.visibility = 'hidden'
            document.getElementById('nav').style.visibility = 'hidden'
        } else {
            document.body.style.overflow = "initial";
            document.getElementById('roc').style.visibility = 'visible'
            document.getElementById('nav').style.visibility = 'visible'
        }
    }
    function toggle2() {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup_2 = document.getElementById('popup_2')
        popup_2.classList.toggle('active')
        changeState()
        if (state === true) {
            document.body.style.overflow = "hidden";
            document.getElementById('roc').style.visibility = 'hidden'
            document.getElementById('nav').style.visibility = 'hidden'
        } else {
            document.body.style.overflow = "initial";
            document.getElementById('roc').style.visibility = 'visible'
            document.getElementById('nav').style.visibility = 'visible'
        }

    }
    function toggle3() {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup_3 = document.getElementById('popup_3')
        popup_3.classList.toggle('active')
        changeState()
        if (state === true) {
            document.body.style.overflow = "hidden";
            document.getElementById('roc').style.visibility = 'hidden'
            document.getElementById('nav').style.visibility = 'hidden'
        } else {
            document.body.style.overflow = "initial";
            document.getElementById('roc').style.visibility = 'visible'
            document.getElementById('nav').style.visibility = 'visible'
        }


    }
    function toggle4() {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup_4 = document.getElementById('popup_4')
        popup_4.classList.toggle('active')
        changeState()
        if (state === true) {
            document.body.style.overflow = "hidden";
            document.getElementById('roc').style.visibility = 'hidden'
            document.getElementById('nav').style.visibility = 'hidden'
        } else {
            document.body.style.overflow = "initial";
            document.getElementById('roc').style.visibility = 'visible'
            document.getElementById('nav').style.visibility = 'visible'
        }

    }
    function toggle5() {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup_5 = document.getElementById('popup_5')
        popup_5.classList.toggle('active')
        changeState()
        if (state === true) {
            document.body.style.overflow = "hidden";
            document.getElementById('roc').style.visibility = 'hidden'
            document.getElementById('nav').style.visibility = 'hidden'
        } else {
            document.body.style.overflow = "initial";
            document.getElementById('roc').style.visibility = 'visible'
            document.getElementById('nav').style.visibility = 'visible'
        }

    }

    function toggle6() {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup_6 = document.getElementById('popup_6')
        popup_6.classList.toggle('active')
        changeState()
        if (state === true) {
            document.body.style.overflow = "hidden";
            document.getElementById('roc').style.visibility = 'hidden'
            document.getElementById('nav').style.visibility = 'hidden'
        } else {
            document.body.style.overflow = "initial";
            document.getElementById('roc').style.visibility = 'visible'
            document.getElementById('nav').style.visibility = 'visible'
        }

    }

    function toggle7() {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup_6 = document.getElementById('popup_7')
        popup_6.classList.toggle('active')
        changeState()
        if (state === true) {
            document.body.style.overflow = "hidden";
            document.getElementById('roc').style.visibility = 'hidden'
            document.getElementById('nav').style.visibility = 'hidden'
        } else {
            document.body.style.overflow = "initial";
            document.getElementById('roc').style.visibility = 'visible'
            document.getElementById('nav').style.visibility = 'visible'
        }

    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="whole" >

            <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css" />
            <div className="insidebox">
                <div className="info" id="up" data-aos="slide-down" >
                    <h1>HI!!!&#128075; I am Tharindu Mandusanka</h1>
                    <h1>// FullStack Webdevaloper//</h1>
                    <h1>Frontend Devaloper /Backend devaloper</h1>
                    <h1 id="bioo">Mobile App Devaloper</h1>
                </div>
            </div>
            <div className="animline">
            </div>
            <div className="container">
                <div className="intro" >
                    {/* <div className="insidebox">
                        <div className="info" id="up" data-aos="slide-down" >
                            <h1>HI!!!&#128075; I am Tharindu Mandusanka</h1>
                            <h1>// FullStack Webdevaloper//</h1>
                            <h1>Frontend Devaloper /Backend devaloper</h1>
                            <h1 id="bioo">Mobile App Devaloper</h1>
                        </div>
                    </div> */}

                    <div className="separate-1">
                        <div className="line"></div>
                        <h1 data-aos="zoom-in" >About Me</h1>
                        <div className="line"></div>
                    </div>
                    <div className="info-2">
                        <div className="intro-image" >
                            <img data-aos="zoom-in" src={wal2} alt="image fo intro" />
                        </div>
                        <div className="bio" >
                            <h1 className="name">Tharindu Mandusanka</h1>
                            <img src={profile} alt="" />
                            <p >Hi, I'm Tharindu. I am MERN/MEAN Stack ,Java Developer AND C# devaloper and, 3rd year Undergraduate, who follows the BSc (Hons) in Software Engineering Degree Program at Sri Lanka Technological Campus.I am passionate about fullstack web devalopment ,windows application devalopment and mobile application devalopment.I want to sharpen my programming skills and adapt to the competition in a competitive environment.I would like to use the experience gained in such cases to create a more efficient and effective product.</p>
                        </div>
                        <div id="projects"></div>
                    </div>
                </div>


            </div >


            <a href="#up" id="roc">
                <button className="goup">
                    <img src={roc} alt="" />
                </button>
            </a>

            <div className="separate-2">
                <div className="line"></div>
                <h1 data-aos="zoom-in" >Projects</h1>
                <div className="line"></div>
            </div>

            <div className="projects" id="blur"  >

                <Tilt className="parallax-effect" perspective={500} >
                    <div className="project rgb" data-aos='slide-up'>
                        <img src={h6} alt="" />
                        <h3>Health Care WebApp</h3>
                        <h4>The aim of this project is to apply what you have learnt in the lectures to develop a case for adopting cloud computing.  There are few main focuses in this project:</h4>
                        <button className='readmore' onClick={toggle}>Reed more..</button>
                        <button>
                            <img src={github} alt="" />
                            <a href="https://github.com/tharindugithu/newone" target={'_blank'}>Goto Project</a>
                        </button>
                    </div>
                </Tilt>

                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up'  >
                        <img src={C7} alt="" />
                        <h3>Electric Bill Calculator Software</h3>
                        <h4>The aim of this project improve the knowledge of C# programming language and learn microsoft visual studio windows app building</h4>
                        <button onClick={toggle2}>Reed more..</button>
                        <button>
                            <img src={github} alt="" />
                            <a href="https://github.com/tharindugithu/CEBAPP" target={'_blank'}>Goto Project</a>
                        </button>
                    </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up' >
                        <img src={D1} alt="" />
                        <h3>Django Backend App</h3>
                        <h4>The aim of this project prvide backend part of healthcare web application.System administrator have to add doctors to web application according to business logic.</h4>
                        <button onClick={toggle3}>Reed more..</button>
                        <button>
                            <img src={github} alt="" />
                            <a href="https://github.com/tharindugithu/django_app" target={'_blank'}>Goto Project</a>
                        </button>
                    </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up' >
                        <img src={F1} alt="" />
                        <h3>Food Order Website with PHP and MySQL</h3>
                        <h4>The aim of this project improve the php snd mysql knowledge.This web application has complete admin pannel and functionalaties and security</h4>
                        <button onClick={toggle4}>Reed more..</button>
                        <button>
                            <img src={github} alt="" />
                            <a href="http://">Goto Project</a>
                        </button>
                    </div>

                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up' >
                        <img src={B1} alt="" />
                        <h3>Java Bidding System</h3>
                        <h4>This is a Java Bidding System with Client Server and Publisher Subscriber architectures developing by using Java Network Programming</h4>
                        <button onClick={toggle5}>Reed more..</button>
                        <button>
                            <img src={github} alt="" />
                            <a href="https://github.com/tharindugithu/Bidding-using-java/tree/master" target={'_blank'}>Goto Project</a>
                        </button>
                    </div>

                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>      <div className="project rgb" data-aos='slide-up' >
                    <img src={M1} alt="" />
                    <h3>Mobile Application for IT faculty</h3>
                    <h4>The purpose of this project is to develop mobile application to provide main features to conduct studies online for students and lecturers.</h4>
                    <button onClick={toggle6}>Reed more..</button>
                    <button>
                        <img src={github} alt="" />
                        <a href="https://github.com/tharindugithu/Mobile-app-for-help-to-LMS" target={'_blank'}>Goto Project</a>
                    </button>
                </div></Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up' >
                        <img src={A5} alt="" />
                        <h3>Car Doc Mobile App</h3>
                        <h4>Purpose of this project improve android app dev skill and java related knowledge.User can register car for selling and other purposes AND EASY TO use this kind of app.</h4>
                        <button onClick={toggle7}>Reed more..</button>
                        <button>
                            <img src={github} alt="" />
                            <a href="http://">Goto Project</a>
                        </button>
                    </div>
                </Tilt>

            </div>
            <div id="services"></div>
            <div>
                <div className="popup" id="popup_1">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src={h6} alt="" />
                        <img src={h1} alt="" />
                        <img src={h2} alt="" />
                        <img src={h3} alt="" />
                        <img src={h4} alt="" />
                        <img src={h5} alt="" />
                    </Carousel>

                    <h1>HealthCare Web Application</h1>
                    <p>The aim of this assignment is to apply what you have learnt in the lectures to develop a case for adopting cloud computing.  Your main focus is: (a) develop a business case for a SaaS service in an area of interest, and (b) design, implement and compare the cost of hosting the SaaS service on-premise and on the cloud. The implementation must include a web interface with the SaaS services accessible from an URL.</p>
                    <br />
                    <h3>Scope</h3>
                    <p style={mystyle}>&#x2022; Doctors and nurses can now coordinate better with the patient about the diagnosis</p>
                    <p style={mystyle}>&#x2022; The Internet Supports a shift toward more patient-centered care enabling consumers to gather health-related information themsek</p>
                    <br /><h3>Used Technologies</h3>
                    <p style={mystyle}>&#x2022;Frontend-Angular Frameork/Bootstrap</p>
                    <p style={mystyle}>&#x2022;Backend-Django/python</p>
                    <p style={mystyle}>&#x2022;Hosting-heroku</p>
                    <br /><h3>Links</h3>
                    <p style={mystyle}>&#x2022;Frontend Github -- <a href="https://github.com/tharindugithu/newone" target={'blank'}>Click to visit</a> </p>
                    <p style={mystyle}>&#x2022;Backend Github -- <a href="https://github.com/tharindugithu/django_app" target={'blank'}>Click to visit</a> </p>
                    <p style={mystyle}>&#x2022;Project Started and Finshed year-2021</p>
                    <button className="goproject">
                        <img src={github} alt="" />
                        <a href="https://github.com/tharindugithu/newone" target={'blank'}>Goto Project</a>
                    </button>
                    <button onClick={toggle}>Close</button>
                </div>

                <div className="popup" id="popup_2">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src={C1} alt="" />
                        <img src={C2} alt="" />
                        <img src={C3} alt="" />
                        <img src={C4} alt="" />
                        <img src={C5} alt="" />
                        <img src={C6} alt="" />
                        <img src={C7} alt="" />
                    </Carousel>
                    <br /><h1>Electric Bill Calculate Windows Application</h1>
                    <p>Electric Bill Calculator Software The aim of this project improve the knowledge of C# programming language and learn microsoft visual studio windows app building</p>
                    <br /><h3>Scope</h3>
                    <p style={mystyle}>&#x2022; Easily anyone can calculate own electric bill</p>
                    <p style={mystyle}>&#x2022; This application can use any industry for calculate electric bill</p>
                    <br /><h3>Used Technologies</h3>
                    <p style={mystyle}>&#x2022;Webapp build--C#</p>
                    <br /><h3>Links</h3>
                    <p style={mystyle}>&#x2022;Application Github -- <a href="https://github.com/tharindugithu/CEBAPP" target={'blank'}>Click to visit</a> </p>
                    <p style={mystyle}>&#x2022;Project Started and Finshed year-2022</p>
                    <button className="goproject">
                        <img src={github} alt="" />
                        <a href="https://github.com/tharindugithu/CEBAPP" target={'_blank'}>Goto Project</a>
                    </button>

                    <button onClick={toggle2}>Close</button>
                </div>

                <div className="popup" id="popup_3">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>

                        <img src={D1} alt="" />
                        <img src={D2} alt="" />
                        <img src={D3} alt="" />
                        <img src={D4} alt="" />
                        <img src={D5} alt="" />
                    </Carousel>
                    <h1>Djanogo Backend Application</h1>
                    <p>The aim of this project prvide backend part of healthcare web application.System administrator have to add doctors to web application according to business logic.Those doctors who added to system can use the platform to give their service to underline
                        local consumers. Patients or visitor of the web application are able to check available doctors list. List
                        contains information about doctor’s specification, availability and cost of channeling, users of the web
                        application can channel a doctor by considering that information.
                    </p>
                    <br /><h3>Used Technologies</h3>
                    <p style={mystyle}>&#x2022;Backend app build--Django fullstack framework</p>
                    <p style={mystyle}>&#x2022;Hosting-heroku</p>
                    <br /><h3>API endi points</h3>
                    <p style={mystyle}>&#x2022; https://healthcarewebapp.herokuapp.com/WebApp/DoctorsList/</p>
                    <p style={mystyle}>&#x2022;https://healthcarewebapp.herokuapp.com/WebApp/Patient/Register/</p>
                    <p style={mystyle}>&#x2022;https://healthcarewebapp.herokuapp.com/WebApp/Patient/Login/</p>
                    <br /><h3>Link</h3>
                    <p style={mystyle}>&#x2022;Application Github -- <a href="https://github.com/tharindugithu/django_app" target={'blank'}>Click to visit</a> </p>
                    <p style={mystyle}>&#x2022;Project Started and Finshed year-2022</p>
                    <button className="goproject">
                        <img src={github} alt="" />
                        <a href="https://github.com/tharindugithu/django_app" target={'_blank'}>Goto Project</a>
                    </button>
                    <button onClick={toggle3}>Close</button>
                </div>

                <div className="popup" id="popup_4">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src={F1} alt="" />
                        <img src={F2} alt="" />
                        <img src={F3} alt="" />
                        <img src={F4} alt="" />
                        <img src={F5} alt="" />
                        <img src={F6} alt="" />
                        <img src={F7} alt="" />
                        <img src={F8} alt="" />
                    </Carousel>
                    <h1>Food Order Website with PHP and MySQL</h1>
                    <p>This is a Restaurant Theme Website Template, designed using html and css. for the backend part using php.Front end any one can order foods and visit the site for choose the foods. and admin pannel can access only admins.They can change own password and username. And they can change order status.</p>
                    <br /><h3>Used Technologies</h3>
                    <p style={mystyle}>&#x2022;Frontend app build-- CSS,HTML</p>
                    <p style={mystyle}>&#x2022;BAackend app build-- PHP,CSS,HTML</p>
                    <p style={mystyle}>&#x2022;Database-MySQL</p>
                    <p style={mystyle}>&#x2022;Project Started and Finshed year-2022</p>
                    <br /><h3>Link</h3>
                    <p style={mystyle}>&#x2022;Application Github -- <a href="https://github.com/tharindugithu/Food-Order-Website-with-PHP-and-MySQL" target={'blank'}>Click to visit</a> </p>
                    <button className="goproject">
                        <img src={github} alt="" />
                        <a href="https://github.com/tharindugithu/Food-Order-Website-with-PHP-and-MySQL" target={'_blank'}>Goto Project</a>
                    </button>
                    <button onClick={toggle4}>Close</button>
                </div>

                <div className="popup" id="popup_5">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src={B1} alt="" />
                        <img src={B1} alt="" />
                    </Carousel>
                    <h1> Java Bidding System with Client Server and Publisher Subscriber architectures</h1>
                    <p style={mystyle}>&#x2022;Login and Registration</p>
                    <p style={mystyle}>&#x2022;The server can handle multiple users</p>
                    <p style={mystyle}>&#x2022;Bidding time can be set when starting the bidding</p>
                    <p style={mystyle}>&#x2022;Client-Server Architecture</p>
                    <p style={mystyle}>&emsp;&#9900;Companies can publish items and edit items' details</p>
                    <p style={mystyle}>&emsp;&#9900;Clients can bid on items</p>
                    <p style={mystyle}>&emsp;&#9900;Both users can view the list of the current items</p>
                    <p style={mystyle}>&emsp;&#9900;Both users can subscribe to items</p>
                    <p style={mystyle}>&emsp;&#9900;Both users can view the details of subscribed items</p>
                    <p style={mystyle}>&#x2022;Publisher-Subscriber Architecture</p>
                    <p style={mystyle}>&emsp;&#9900;Reserve subscribed items bid update notifications</p>
                    <p style={mystyle}>&emsp;&#9900;Notifications about added new items</p>
                    <br /><h3>Link</h3>
                    <p style={mystyle}>&#x2022;Application Github -- <a href="https://github.com/tharindugithu/Bidding-using-java" target={'blank'}>Click to visit</a> </p>
                    <p style={mystyle}>&#x2022;Project Started and Finshed year-2021</p>
                    <button className="goproject">
                        <img src={github} alt="" />
                        <a href="https://github.com/tharindugithu/Bidding-using-java" target={'_blank'}>Goto Project</a>
                    </button>
                    <button onClick={toggle5}>Close</button>
                </div>

                <div className="popup" id="popup_6">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src={M1} alt="" />
                        <img src={M2} alt="" />
                    </Carousel>
                    <h1>Mobile Application for SLTC IT faculty</h1>
                    <p>The purpose of this project is to develop mobile application to provide main features to
                        conduct studies online for students and lecturers. We will consider only batch 7 in this
                        project. This application will be a kind of redundant system for currently operating LMS
                        and it is a web application Developing a mobile application for this purpose will be
                        useful for end users when navigating and accessing. As main features it contains page for
                        announcements, public chat, calendar, and page to provide academic resources.</p>
                    <p>Our goal is to build a native mobile application to migrate LMS, Zoom. The student should be
                        informed about assignments, lectures, academic timetables, and should be able to connect to
                        related parties to solve their academic problems using the same platform.
                        This mobile application development will cover a quick introduction to setting up Flutter SDK
                        with Dart, Android Studio IDE, and Android Emulator locally on our own machine.
                        However, setting up own local environment is not required to follow exercises in this mobile
                        application development. You should be able to run Flutter and Dart Apps right here on the
                        Educative platform.
                        We’ll can start from building a fundamental with Flutter and Dart while learning the fundamentals
                        of Flutter widgets.
                        We’ll learn about layouts by building a contact profile page for Android device’s address book.
                        We’ll understand styling apps using Flutter themes.
                    </p>
                    <br /><h3>Link</h3>
                    <p style={mystyle}>&#x2022;Application Github -- <a href="https://github.com/tharindugithu/Mobile-app-for-help-to-LMS" target={'blank'}>Click to visit</a> </p>
                    <p style={mystyle}>&#x2022;Project Started and Finshed year-2021</p>
                    <button className="goproject">
                        <img src={github} alt="" />
                        <a href="https://github.com/tharindugithu/Mobile-app-for-help-to-LMS" target={'_blank'}>Goto Project</a>
                    </button>
                    <button onClick={toggle6}>Close</button>
                </div>

                <div className="popup" id="popup_7">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src={A1} alt="" />
                        <img src={A2} alt="" />
                        <img src={A3} alt="" />
                        <img src={A4} alt="" />
                    </Carousel>
                    <h1>Car Registration Mobile App.</h1>
                    <p>Purpose of this project improve android app dev skill and java related knowledge</p>
                    <br /><h3>Link</h3>
                    <p style={mystyle}>&#x2022;Application Github -- <a href="https://github.com/tharindugithu/Car_Doc_App" target={'blank'}>Click to visit</a> </p>
                    <button className="goproject">
                        <img src={github} alt="" />
                        <a href="https://github.com/tharindugithu/Car_Doc_App">Goto Project</a>
                    </button>
                    <button onClick={toggle7}>Close</button>
                </div>
            </div>

            <div className="separate-3">
                <div className="line"></div>
                <h1 data-aos="zoom-in" >SKILLS</h1>
                <div className="line"></div>
            </div>

        </div>

    )
}