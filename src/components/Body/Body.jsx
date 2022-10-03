import React, { useEffect, useRef, Component } from "react";
import './Body.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import Tilt from 'react-parallax-tilt';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from "swiper/react";


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
            <div className="container">
                <div className="intro" >
                    <div className="info" id="up" data-aos="slide-down" >
                        <h1>HI!!! I am Tharindu Mandusanka</h1>
                        <h1>// FullStack Webdevloper</h1>
                        <h1>Frontend Devaloper /Backend devloper</h1>
                        <h1 id="bioo">App DEvaloper</h1>
                    </div>
                    <div className="separate-1">
                        <div className="line"></div>
                        <h1 data-aos="zoom-in" >About Me</h1>
                        <div className="line"></div>
                    </div>
                    <div className="info-2">
                        <div className="intro-image" >
                            <img data-aos="zoom-in" src="./images/wal1.jpg" alt="image fo intro" />
                        </div>
                        <div className="bio" >
                            <h1 className="name">Tharindu Mandusanka</h1>
                            <img src="./images/profile.png" alt="" />
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nobis et illo nostrum, iste mollitia dolorem dignissimos error est, sequi quae eaque adipisci assumenda unde praesentium odit sed enim soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nobis et illo nostrum, iste mollitia dolorem dignissimos error est, sequi quae eaque adipisci assumenda unde praesentium odit sed enim soluta.</p>
                        </div>
                    </div>
                </div>

                <div id="projects"></div>
            </div >


            <a href="#up" id="roc">
                <button className="goup">
                    <img src="./images/rocket.png" alt="" />
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
                        <img src="./images/health.JPG" alt="" />
                        <h3>Health Care WebApp</h3>
                        <h4>The aim of this project is to apply what you have learnt in the lectures to develop a case for adopting cloud computing.  There are few main focuses in this project:</h4>
                        <button className='readmore' onClick={toggle}>Reed more..</button>
                        <button>
                            <img src="./images/github.png" alt="" />
                            <a href="https://github.com/tharindugithu/newone" target={'_blank'}>Goto Project</a>
                        </button>
                    </div>
                </Tilt>

                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up'  >
                        <img src="./images/C7.JPG" alt="" />
                        <h3>Electric Bill Calculator Software</h3>
                        <h4>The aim of this project improve the knowledge of C# programming language and learn microsoft visual studio windows app building</h4>
                        <button onClick={toggle2}>Reed more..</button>
                        <button>
                            <img src="./images/github.png" alt="" />
                            <a href="https://github.com/tharindugithu/CEBAPP" target={'_blank'}>Goto Project</a>
                        </button>
                    </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up' >
                        <img src="./images/D1.JPG" alt="" />
                        <h3>Django Backend App</h3>
                        <h4>The aim of this project prvide backend part of healthcare web application.System administrator have to add doctors to web application according to business logic.</h4>
                        <button onClick={toggle3}>Reed more..</button>
                        <button>
                            <img src="./images/github.png" alt="" />
                            <a href="https://github.com/tharindugithu/django_app" target={'_blank'}>Goto Project</a>
                        </button>
                    </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up' >
                        <img src="./images/F1.JPG" alt="" />
                        <h3>Food Order Website with PHP and MySQL</h3>
                        <h4>The aim of this project improve the php snd mysql knowledge.This web application has complete admin pannel and functionalaties and security</h4>
                        <button onClick={toggle4}>Reed more..</button>
                        <button>
                            <img src="./images/github.png" alt="" />
                            <a href="http://">Goto Project</a>
                        </button>
                    </div>

                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up' >
                        <img src="./images/health.JPG" alt="" />
                        <h3>Health Care WebApp</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At accusamus, accusantium quasi maxime omnis blanditiis laboriosam maiores tempora minima officia.</h4>
                        <button onClick={toggle5}>Reed more..</button>
                        <button>
                            <img src="./images/github.png" alt="" />
                            <a href="http://">Goto Project</a>
                        </button>
                    </div>

                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>      <div className="project rgb" data-aos='slide-up' >
                    <img src="./images/health.JPG" alt="" />
                    <h3>Health Care WebApp</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At accusamus, accusantium quasi maxime omnis blanditiis laboriosam maiores tempora minima officia.</h4>
                    <button onClick={toggle6}>Reed more..</button>
                    <button>
                        <img src="./images/github.png" alt="" />
                        <a href="http://">Goto Project</a>
                    </button>
                </div></Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                    <div className="project rgb" data-aos='slide-up' >
                        <img src="./images/health.JPG" alt="" />
                        <h3>Health Care WebApp</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At accusamus, accusantium quasi maxime omnis blanditiis laboriosam maiores tempora minima officia.</h4>
                        <button onClick={toggle7}>Reed more..</button>
                        <button>
                            <img src="./images/github.png" alt="" />
                            <a href="http://">Goto Project</a>
                        </button>
                    </div>
                </Tilt>

            </div>
            <div>
                <div className="popup" id="popup_1">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/h1.JPG" alt="" />
                        <img src="./images/h2.JPG" alt="" />
                        <img src="./images/h3.JPG" alt="" />
                        <img src="./images/h4.JPG" alt="" />
                        <img src="./images/h5.JPG" alt="" />
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
                        <img src="./images/github.png" alt="" />
                        <a href="https://github.com/tharindugithu/newone" target={'blank'}>Goto Project</a>
                    </button>
                    <button onClick={toggle}>Close</button>
                </div>

                <div className="popup" id="popup_2">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src="./images/C1.JPG" alt="" />
                        <img src="./images/C2.JPG" alt="" />
                        <img src="./images/C3.JPG" alt="" />
                        <img src="./images/C4.JPG" alt="" />
                        <img src="./images/C5.JPG" alt="" />
                        <img src="./images/C6.JPG" alt="" />
                        <img src="./images/C7.JPG" alt="" />
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
                        <img src="./images/github.png" alt="" />
                        <a href="https://github.com/tharindugithu/CEBAPP" target={'_blank'}>Goto Project</a>
                    </button>

                    <button onClick={toggle2}>Close</button>
                </div>

                <div className="popup" id="popup_3">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>

                        <img src="./images/D1.JPG" alt="" />
                        <img src="./images/D2.JPG" alt="" />
                        <img src="./images/D3.JPG" alt="" />
                        <img src="./images/D4.JPG" alt="" />
                        <img src="./images/D5.JPG" alt="" />
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
                    <p style={mystyle}>&#x2022;Project Started and Finshed year-2022</p>
                    <button className="goproject">
                        <img src="./images/github.png" alt="" />
                        <a href="https://github.com/tharindugithu/django_app" target={'_blank'}>Goto Project</a>
                    </button>
                    <button onClick={toggle3}>Close</button>
                </div>

                <div className="popup" id="popup_4">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src="./images/F1.JPG" alt="" />
                        <img src="./images/F2.JPG" alt="" />
                        <img src="./images/F3.JPG" alt="" />
                        <img src="./images/F4JPG.JPG" alt="" />
                        <img src="./images/F5.JPG" alt="" />
                        <img src="./images/F6.JPG" alt="" />
                        <img src="./images/F7.JPG" alt="" />
                        <img src="./images/F8.JPG" alt="" />
                    </Carousel>
                    <h1>Food Order Website with PHP and MySQL</h1>
                    <p>This is a Restaurant Theme Website Template, designed using html and css. for the backend part using php.Front end any one can order foods and visit the site for choose the foods. and admin pannel can access only admins.They can change own password and username. And they can change order status.</p>
                    <br /><h3>Used Technologies</h3>
                    <p style={mystyle}>&#x2022;Frontend app build-- CSS,HTML</p>
                    <p style={mystyle}>&#x2022;BAackend app build-- PHP,CSS,HTML</p>
                    <p style={mystyle}>&#x2022;Database-MySQL</p>
                    <p style={mystyle}>&#x2022;Project Started and Finshed year-2022</p>
                    <button className="goproject">
                        <img src="./images/github.png" alt="" />
                        <a href="http://">Goto Project</a>
                    </button>
                    <button onClick={toggle4}>Close</button>
                </div>

                <div className="popup" id="popup_5">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                    </Carousel>
                    <h1>Min ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptatibus. Similique tempora ex cumque inventore, autem nesciunt commodi fuga unde?</p>
                    <button className="goproject">
                        <img src="./images/github.png" alt="" />
                        <a href="http://">Goto Project</a>
                    </button>
                    <button onClick={toggle5}>Close</button>
                </div>

                <div className="popup" id="popup_6">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                    </Carousel>
                    <h1>Min ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptatibus. Similique tempora ex cumque inventore, autem nesciunt commodi fuga unde?</p>
                    <button className="goproject">
                        <img src="./images/github.png" alt="" />
                        <a href="http://">Goto Project</a>
                    </button>
                    <button onClick={toggle6}>Close</button>
                </div>

                <div className="popup" id="popup_7">
                    <Carousel showArrows={true} thumbWidth={100} autoPlay={true} interval={2000} transitionTime={500} swipeScrollTolerance={2} infiniteLoop={true}>
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                        <img src="./images/health.JPG" alt="" />
                    </Carousel>
                    <h1>Min ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptatibus. Similique tempora ex cumque inventore, autem nesciunt commodi fuga unde?</p>
                    <button className="goproject">
                        <img src="./images/github.png" alt="" />
                        <a href="http://">Goto Project</a>
                    </button>
                    <button onClick={toggle7}>Close</button>
                </div>
            </div>
            <div className="separate-3">
                <div className="line"></div>
                <h1 data-aos="zoom-in" >Services</h1>
                <div className="line"></div>
            </div>

        </div>

    )
}