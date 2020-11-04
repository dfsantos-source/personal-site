import React from "react"

function Bio() {
    return (
        <div className="bio element header">
            <p>
            <h1 className="greeting" id="start">Dane Santos</h1>
            </p>
            <hr/>
            <br/>
            <img className="profile-pic" width="200em" height="200em" src="profile_pic-min.jpg" alt="profile-pic"/>
            <p>
            I am currently a second-year student at the University of Massachusetts
            - Amherst, currently pursuing a B.S in Computer Science.
            </p>
            <p>    
            My plans for the future is to eventually become a full-stack web developer.
            I am interested in learning new technologies and skills, as well as challenging
            myself when it comes to problem-solving and critical thinking.
            </p>
            <p id="projects-anchor">
            Curiosity driven. Always on the lookout for new opportunites for  projects, programs, 
            and positions, to further pursue my passion for Computer Science.
            </p>
        </div>
    )
}

export default Bio