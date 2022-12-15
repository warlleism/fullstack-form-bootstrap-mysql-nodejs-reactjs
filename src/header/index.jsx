import React, { useEffect, useState } from "react";
import './style.scss'

const Header = () => {

    const [scrollDir, setScrollDir] = useState("scrolling down");

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }

        };

        window.addEventListener("scroll", onScroll);

        const bar = document.getElementById('bar')
        const job = document.getElementById('job')

        if (scrollDir == 'scrolling up') {
            bar.style.height = '80px'
            job.style.transform = 'translateY(0px)'
        }

        if (scrollDir == 'scrolling down') {
            bar.style.height = '0px'
            job.style.transform = 'translateY(-100px)'
        }


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