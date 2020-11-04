import React from "react"
import Bio from "./content/Bio"
import ContactMe from "./content/ContactMe"
import Projects from "./content/Projects"
import Skills from "./content/Skills"

function Content() {
    return (
        <div className="content">
            <Bio />
            <Projects />
            <Skills />
            <ContactMe />
        </div>
    )
}

export default Content