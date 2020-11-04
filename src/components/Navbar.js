import React from "react"

function Navbar() {
    return (
        <div className="navbar">
        <nav>
            <ul>
                <li className="nav-li"><a style={{textDecoration: "none", color: "white"}} href="#projects">Projects</a></li>
                <li className="nav-li"><a style={{textDecoration: "none", color: "white"}} href="#start">Home</a></li>
                <li className="nav-li"><a style={{textDecoration: "none" , color: "white"}} href="./DANE_SANTOS_RESUME.pdf" target="_blank">Resume</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar