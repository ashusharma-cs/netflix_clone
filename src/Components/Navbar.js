import React, { useEffect, useState } from 'react'
import '../Navbar.css'

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
           
                if (window.scrollY > 100) {
                    handleShow(true);
                }
                else {
                    handleShow(false);
                }

        }

        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className={`navbar ${show && "nav_black"}`}>

            <img className="nav_logo" src="https://cdn.cdnlogo.com/logos/n/82/netflix.png" alt="" />

            <img className="nav_avatar" src="https://avatars.githubusercontent.com/u/6759280?v=4" alt="" />

        </div>
    )
}

export default Navbar


