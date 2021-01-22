import React from "react"

function Projects() {
    return (
        <div data-aos="fade-left" data-aos-anchor="#bio" id="projects" className="projects element section">
            <h1 data-aos="fade" className="projects-intro" id="projects">Projects</h1>
            <hr data-aos="fade"/>
            <div className="speech-app"> 
            <div data-aos="fade-left">
            <h3>Speech Recognition App</h3>
            <p style={{marginTop: "-1em"}}> 
            Constructed a speech recognition application built in Python that converts speech to text and vice-versa for daily-use by building a response from user input.
            </p>
            </div>
            <div id="contact-anchor"></div>
            <div id="project-desc">
            <ul>
            <li data-aos="fade-right">Incorporated a phrase detection algorithm and geocoder library to display a specific output for the user.</li>
            <li data-aos="fade-right">Implemented Google Calendar API for date and event retrieval and OpenWeatherMap API for current weather
            updates.</li>
            <li data-aos="fade-right">Learned about user authentication and security from implementation of API keys as well as data retrieval from
            a JSON response.</li>
            </ul>
            </div>
            </div>
            <br></br>
            <div data-aos="fade-left">
            <h3 id="sharendar">Sharendar</h3>
            <p style={{marginTop: "-1em"}}> 
            Collaborating with three others on a calendar web application, currently in development using Django Framework.
            </p>
            </div>
            <div id="project-desc">
            <ul>
            <li data-aos="fade-right">Optimized login functionality by strengthening user authentication in the back-end.</li>
            <li data-aos="fade-right">Implemented user based calendar events in the back end and front end, improved front end visibility using
            Bootstrap framework.
            updates.</li>
            <li id="skills-anchor" data-aos="fade-right">Learned about back-end web development with topics including data security, login and logout functionality,
            permissions, user registration, and CRUD Data.</li>
            <div id="skills-anchor2"></div>
            </ul>
            </div>
        </div>
    )
}

export default Projects