import React from "react"
import pdf from "../static/DANE_SANTOS_RESUME.pdf"

function Navbar() {
    return (
        <div className="navbar fade-in">
        <nav>
            <ul>
                <li className="nav-li"><a style={{textDecoration: "none", color: "white"}} href="#projects-anchor">Projects</a></li>
                <li className="nav-li"><a style={{textDecoration: "none", color: "white"}} href="#start">Home</a></li>
                <li className="nav-li"><a style={{textDecoration: "none" , color: "white"}} href="./DANE_SANTOS_RESUME.pdf" target="_blank">Resume</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar