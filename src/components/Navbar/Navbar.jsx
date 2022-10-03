import React from "react";
import './Navbar.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import close from './close.png'
export default function Navbar() {

    const [state, seState] = React.useState(true)
    function menuItemClick() {
        document.body.style.overflow = "initial";
        document.getElementById('check').checked = false
        seState(true)
    }
    function click() {
        seState(prevState => !prevState)
        if (state == true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    useEffect(() => {
        Aos.init({ duration: 20 })
    }, [])
    return (
        <div className="nav-container" data-aos='slide-up' id="nav">
            <nav >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <input type="checkbox" id="check" />
                <label onClick={click} for="check" className="checkbtn" >
                    {state && <i className="fas fa-bars icon"></i>}
                    {!state && <span className="close" ><img src={close} alt="" /></span>}

                </label>
                <div className="lightbar"></div>d
                <label className="logo">TharinduDEV</label>
                <ul>
                    <li onClick={menuItemClick}><a href="#">Home</a></li>
                    <li onClick={menuItemClick}><a href="#bioo">About</a></li>
                    <li onClick={menuItemClick}><a href="#projects">Services</a></li>
                    <li onClick={menuItemClick}><a href="#">Contact</a></li>
                    <li onClick={menuItemClick}><a href="#">Feedback</a></li>
                </ul>
            </nav>

        </div>
    )
}