import React, { useEffect, useState } from "react";
import './style.scss'

const Header = () => {

    const [scrollDir, setScrollDir] = useState("scrolling down");

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDir);

            const bar = document.getElementById('bar')
            const job = document.getElementById('job')

            if (window.scrollY >= 200) {
                bar.style.height = '80px'
                job.style.transform = 'translateY(0px)'
            }

            if (window.scrollY >= 500) {
                bar.style.height = '0px'
                job.style.transform = 'translateY(-100px)'
            }

            if (scrollDir == 'scrolling up') {
                bar.style.height = '80px'
                job.style.transform = 'translateY(0px)'
            }

            if (window.scrollY == 0) {
                bar.style.height = '0px'
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);


    return (
        <>
            <div className="header">
                <div id="job">Jobs</div>
            </div>
            <div className="bar" id="bar"></div>
        </>
    )
}

export default Header;