import React, { useRef, useState, useEffect } from "react";
import emailjs from 'emailjs-com'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarked, faPhone, faMailBulk, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Body.css";
import Aos from "aos";
import 'aos/dist/aos.css'
import Tilt from 'react-parallax-tilt';
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useForm } from "react-hook-form";
import angular from './angular.png'
import github from './github.png'
import css from './css.png'
import html from './html.png'
import node from './node.png'
import nextjs from './nextjs.png'
import tailwind from './tailwind.png'
import roc from './rocket.png'
import javascript from './javascript.png'
import mongo from './mongo.png'
import rreact from './react.png'




export default function App() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [form, setForm] = React.useState({
        from_name: '',
        to_name: '',
        message: '',
        from_nameError: '',
        to_nameError: '',
        messageError: ''
    })
    function validate() {
        let from_nameError = ''
        let to_nameError = ''
        let messageError = ''

        if (form.to_name.includes('@' && '.com' && 'mail') === false) {
            to_nameError = 'Invalid Email'
        }
        if (form.to_name.length === 0) {
            to_nameError = "Cannot be Empty"
        }
        if (form.from_name.length === 0) {
            from_nameError = "Cannot be Empty"
        }
        if (form.message.length === 0) {
            messageError = "Cannot be Empty"
        }
        if (to_nameError || from_nameError || messageError) {
            setForm({ to_nameError, from_nameError, messageError })
            return false;
        }
        return true
    }

    function sendEmail(e) {
        e.preventDefault();
        const isValid = validate();

        if (isValid) {
            emailjs.sendForm('service_gpft2oo', 'template_tbs4v1d', e.target, '0p1Em6OBb8nYMGI7R')
                .then((result) => {
                    console.log(result.text);
                    alert('Details Are Submitted')
                    window.location.reload();
                }, (error) => {
                    console.log(error.text);
                    alert('Something Went Wrong!!!')
                });
            e.target.reset()
        } else {
            alert('Please Input Valid Data!!!')
            setTimeout(delay, 2000)
            function delay() {
                window.location.reload()
            }
        }
    }
    function handleChange(e) {
        setForm(preVal => {
            return { ...preVal, [e.target.name]: e.target.value }
        })
    }
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <>

            <Swiper data-aos="slide-up"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <h1>MONGODB</h1>
                    <img src={mongo} />

                </SwiperSlide>
                <SwiperSlide >
                    <h1>CSS</h1>
                    <img src={css} />

                </SwiperSlide>
                <SwiperSlide>
                    <h1>GITHUB</h1>
                    <img src={github} />

                </SwiperSlide>
                <SwiperSlide>
                    <h1>HTML</h1>
                    <img src={html} />

                </SwiperSlide>
                <SwiperSlide>
                    <h1>NEXTJS</h1>
                    <img src={nextjs} />

                </SwiperSlide>
                <SwiperSlide>
                    <h1>NODE</h1>
                    <img src={node} />

                </SwiperSlide>
                <SwiperSlide>
                    <h1>JAVASCRIPT</h1>
                    <img src={javascript} />

                </SwiperSlide>
                <SwiperSlide>
                    <h1>TAILWIND</h1>
                    <img src={tailwind} />

                </SwiperSlide>
                <SwiperSlide>
                    <h1>REACT</h1>
                    <img src={rreact} />

                </SwiperSlide>
                <SwiperSlide>
                    <h1>ANGULAR</h1>
                    <img src={angular} />

                </SwiperSlide>
            </Swiper>
            <a href="#up" id="roc">
                <button className="goup">
                    <img src={roc} alt="" />
                </button>
            </a>
            <div>
                <div className="separate-4">
                    <div className="line"></div>
                    <h1 data-aos="zoom-in">Contact Me</h1>
                    <div className="line"></div>
                </div>

                <section className="contact">
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda similique, quae aspernatur dolor odit sequi illo nisi ab sed.</p>
                    </div>
                    <div className="container-2">
                        <div className="contactinfo" data-aos="slide-up">
                            <div className="box">
                                <div className="Icon">
                                    <FontAwesomeIcon icon={faMapMarked} size='2x' />
                                </div>
                                <div className="text">
                                    <h3>Address</h3>
                                    <p>Uggan Goda Hena Ullala , Kamburupitiya</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="Icon">
                                    <a style={{ color: 'black' }} href="tel:+9476-878-3078">
                                        <FontAwesomeIcon icon={faPhone} size='2x'></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <p> <a id="phone" style={{ color: '#fff' }} href="tel:+9476-878-3078">+94 76 8783078</a></p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="Icon">
                                    <FontAwesomeIcon icon={faMailBulk} size='2x'></FontAwesomeIcon>
                                </div>
                                <div className="text">
                                    <h3>Email</h3>
                                    <p>dltharindu@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contactForm" data-aos="slide-up">
                            <form onSubmit={sendEmail} >
                                <h2>Send Me a Message</h2>

                                <div className="inputbox">
                                    <input
                                        type="text"
                                        name="from_name"
                                        value={form.from_name}
                                        onChange={handleChange}
                                    />
                                    <span>Full Name</span>
                                    <h3 className="error-text">{form.from_nameError}</h3>
                                </div>
                                <div className="inputbox">
                                    <input
                                        type="text"
                                        name="to_name"
                                        value={form.to_name}
                                        onChange={handleChange}
                                    />
                                    <span>Email</span>
                                    <h3 className="error-text">{form.to_nameError}</h3>
                                </div>

                                <div className="inputbox">
                                    <textarea
                                        value={form.message}
                                        onChange={handleChange}
                                        name="message"
                                        cols="21"
                                        rows="2"
                                    ></textarea>
                                    <span>Type Your Message</span>
                                    <h3 className="error-text">{form.messageError}</h3>
                                </div>

                                <div className="inputbox subicon">
                                    <input type="submit" value="Send" />
                                    <FontAwesomeIcon className="IC" icon={faPaperPlane} size='2x'></FontAwesomeIcon>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="cvbtn">
                        <a href="https://drive.google.com/file/d/1zFVCMk0F3rrhgX11SU3epQVfVl8bAbvm/view?usp=sharing">Download CV</a>
                    </div>
                </section>
                <section className="social">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <ul>
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} size='2x' /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faLinkedin} size='2x' /></a></li>
                        <li>< a href=""><FontAwesomeIcon icon={faWhatsapp} size='2x' /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faInstagram} size='2x' /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faTelegram} size='2x' /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faTwitter} size='2x' /></a></li>
                    </ul>
                </section>
                <section className="fotter">
                    <h3>All Right Recived &reg;</h3>
                    <h4>D.L Tharindu Madusanka</h4>
                    <h4>2022 &copy;</h4>
                </section>
            </div>

        </>
    );
}
