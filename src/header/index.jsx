import React from "react";
import './style.scss'

const Header = () => {

    window.addEventListener("scroll", () => {
        const bar = document.getElementById('bar')

        if (window.scrollY >= 0) {
            bar.style.height = '80px'
        }

        if (window.scrollY == 0) {
            bar.style.height = '0px'
        }

    })
    return (
        <>
            <div className="header">
                <div>Jobs</div>
            </div>
            <div className="bar" id="bar"></div>
        </>
    )
}

export default Header;