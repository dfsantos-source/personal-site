import React from "react"

function Hero() {
    return (
        <div id="hero-id" className="hero element header">
            <div data-aos="fade-up" className="divider">
            <p>
            <h1 className="greeting name-big" id="start">Dane Santos</h1>
            </p>
            <p id="line-1-id" className="anim-typewriter line-1">
                UMass Amherst Sophomore Computer Science Student. 
            </p>
            <p style={{fontFamily: "Consolas"}}>
                Curiosity Driven • Aspiring Software Engineer
            </p>
            </div>
        </div>
    )
}

export default Hero