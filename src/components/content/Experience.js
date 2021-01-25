import React from "react"

// still need to:
// implement aos and css for "experience" "experienece-intro classes"

function Experience() {
    return(
        <div data-aos="fade-right" className="element section experience">
            <h1 data-aos="fade" className="experience-intro">Experience</h1>
            <div data-aos="fade-right" className="software-mentorship">
            <div className="bulleted-list"> 
            <ul>
            <li data-aos="fade-right">Detail 1</li>
            <li data-aos="fade-right">Detail 2</li>
            <li data-aos="fade-right">Detail 3</li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Experience