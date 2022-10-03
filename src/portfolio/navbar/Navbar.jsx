import React from "react";
import './Navbar.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export default function Navbar() {
    function toggle() {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup_1 = document.getElementById('popup_1')
        popup_1.classList.toggle('active')
    }
    return (
        <div>
            <div className="conts" id="blur">
                <div className="cont">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facere doloribus consequuntur pariatur reprehenderit dolore voluptatibus temporibus tenetur velit necessitatibus!</h2>
                    <a onClick={toggle} href="#">Readmore...</a>
                </div>
            </div>
            <div id="popup_1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem laborum, exercitationem id dolor dolore accusamus, laboriosam alias voluptas aspernatur optio quaerat at dolorum eveniet? Exercitationem porro assumenda distinctio molestias.</p>
                <a onClick={toggle} href="#">Readmore...</a>
            </div>
        </div>

    )
}