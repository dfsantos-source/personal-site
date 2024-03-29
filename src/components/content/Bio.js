import React from "react"

function Bio() {
    return (
        <div id="bio-id" className="bio element header">
            <div data-aos="fade-in" className="divider">
            <img className="profile-pic"  src="pfp.jpg" alt="profile-pic"/>
            <div className="bio-content">
            <p>
            Hi, I'm Dane. 👋 I am currently a student at the University of Massachusetts
            - Amherst, currently pursuing a B.S in Computer Science.
            </p>
            <p>    
            My plans for the future is to eventually become a software engineer.
            I am interested in learning new technologies and skills, as well as challenging
            myself when it comes to problem-solving and critical thinking.
            </p>
            <p id="projects-anchor">
            Curiosity driven. Always on the lookout for new opportunites for  projects, programs, 
            and positions, to further pursue my passion for Computer Science.
            </p>
            <br></br>
            Expected: Spring 2023
            <br></br>
            This website is outdated - updating soon =)
            </div>
            <a href="#contactme-id" id="contact-button-id"class="button"><p style={{textDecoration: "none"}}>Contact Me</p></a>
            </div>
        </div>
    )
}

export default Bio