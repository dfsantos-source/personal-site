import React from "react"

function Hero() {
    return (
        <div id="hero-id" className="hero element header">
            <div data-aos="fade-up" className="divider">
            <p>
            <h1 className="greeting name-big" id="start">Dane Santos</h1>
            </p>
            <div className="hero-desc">
            <p id="line-1-id" className="anim-typewriter line-1">
                UMass Amherst CS Student.
            </p>
            <p style={{fontFamily: "monospace"}}>
                Curiosity Driven • Aspiring Software Engineer
            </p>
            </div>
            </div>
        </div>
    )
}

export default Hero