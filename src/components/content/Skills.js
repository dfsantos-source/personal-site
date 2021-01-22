import React from "react"

function Skills() {
    return (
        <div className="skills element section">
            <h1 data-aos="fade" data-aos-anchor="#skills-anchor" id="skills" className="skills-intro">Skills</h1>
            <hr data-aos="fade" data-aos-anchor="#skills-anchor"></hr>
            <div data-aos-anchor="#skills-anchor2" data-aos="fade-right">
            
            <h3>Languages</h3>
            <p style={{marginTop: "-1em"}}>Java, C, Python, Javascript, HTML, CSS</p>
            </div>
            <div data-aos-anchor="#skills-anchor2" data-aos="fade-right">
            <h3>Technologies</h3>
            <p style={{marginTop: "-1em"}}>Git, Unix, Linux, Django, React, JSX, Bootstrap</p>
            </div>            
        </div>
    )
}

export default Skills