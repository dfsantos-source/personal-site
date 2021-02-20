import React from "react"

function Projects() {
    return (
        <div id="projects projects-id" className="projects element section">
            <h1  className="projects-intro" id="projects">Projects</h1>
            <hr></hr>
            <div className="speech-app"> 
            <div >
            <h3>Speech Recognition App</h3>
            <div className="tags">
                <p className="tag-element python-tag">Python</p>
                <p className="tag-element restapi-tag">REST API</p>
            </div>
            <p style={{marginTop: "-1em"}}> 
            Constructed a speech recognition application built in Python that converts speech to text and vice-versa for daily-use by building a response from user input.
            </p>
            </div>
            <div id="project-desc">
            <ul>
            <li >Incorporated a phrase detection algorithm and geocoder library to display a specific output for the user.</li>
            <li >Implemented Google Calendar API for date and event retrieval and OpenWeatherMap API for current weather
            updates.</li>
            <li >Learned about user authentication and security from implementation of API keys as well as data retrieval from
            a JSON response.</li>
            </ul>
            </div>
            </div>
            <br></br>
            <br></br>
            <div >
            <h3 id="sharendar">Sharendar</h3>
            <div className="tags">
                <p className="tag-element python-tag">Python</p>
                <p className="tag-element django-tag">Django</p>
                <p className="tag-element bootstrap-tag">Bootstrap</p>
                <p className="tag-element html-tag">HTML</p>
                <p className="tag-element css-tag">CSS</p>
            </div>
            <p style={{marginTop: "-1em"}}> 
            Collaborating with three others on a calendar web application, currently in development using Django Framework.
            </p>
            </div>
            <div id="project-desc">
            <ul>
            <li >Optimized login functionality by strengthening user authentication in the back-end.</li>
            <li >Implemented user based calendar events in the back end and front end, improved front end visibility using
            Bootstrap framework.
            updates.</li>
            <li id="skills-anchor" >Learned about back-end web development with topics including data security, login and logout functionality,
            permissions, user registration, and CRUD Data.</li>
            </ul>
            </div>
        </div>
    )
}

export default Projects