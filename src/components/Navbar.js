import React from "react"

function Navbar() {
    return (
        <div className="navbar fade-in">
        <nav>
            <ul>
                <li className="nav-li"><a style={{textDecoration: "none", color: "white"}} href="#projects-anchor">Projects</a></li>
                <li className="nav-li"><a style={{textDecoration: "none", color: "white"}} href="#start">Home</a></li>
                <li className="nav-li"><a style={{textDecoration: "none" , color: "white"}} href="/Dane_Santos_Resume.png" target="_blank">Resume</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar