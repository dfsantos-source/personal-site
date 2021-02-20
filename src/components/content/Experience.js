import React from "react"

// still need to:
// implement aos and css for "experience" "experienece-intro classes"

function Experience() {
    return(
        <div  className="element section experience">
            <h1  className="experience-intro" id="experience">Experience</h1>
            <hr></hr>
            <div className="speech-app"> 
            <div>
            <h3>Software Mentorship @ Interactiva Studios LLC</h3>
            <div className="tags">
                <p className="tag-element csharp-tag">C#</p>
                <p className="tag-element team-tag">Team-based</p>
                <p className="tag-element unity-tag">Unity</p>
            </div>
            <p style={{marginTop: "-1em"}}> 
            December 2020 - February 2021 (Remote)
            </p>
            </div>
            <div id="project-desc">
            <ul>
            <li >Developed a batch mode for a rendering tool project in C# to maximize productivity which will be used to get
            projects off the ground faster in Unity.</li>
            <li >Optimized a rendering tool to minimize the number of textures wasted to improve performance for project
            development.</li>
            <li >Learned how to work cooperatively in a team-based environment to communicate effectively, and presented new
            features and ideas at project deadlines and checkpoints.</li>
            </ul>
            </div>
            </div>
            
        </div>
    )
}

export default Experience