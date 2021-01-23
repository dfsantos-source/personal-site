import React from "react"

function ContactMe() {
    return (
        <div className="contact-me element section">
                <h1 data-aos="fade" data-aos-anchor="#contact-anchor"  className="skills-intro">Contact Me</h1>
                <hr data-aos="fade"></hr>
                <br></br>
                <div class="profile-logos" data-aos="fade-down" data-aos-anchor="#contact-anchor">
                <ul class="logos-ul">
                <li className="logo-li"><a target="_blank" href="https://www.linkedin.com/in/dfsantos-dev/"><img width="60px" alt="linkedin-logo" src="https://camo.githubusercontent.com/45e6bebceba49c2cf76b1b3770b1adbe24e6c454/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667"></img></a></li>
                <li className="logo-li"><a target="_blank" href="https://github.com/dfsantos-source"><img width="60px" alt="github-logo" src="https://camo.githubusercontent.com/d0518022b7a02d405ad5112a0c8aa455cbfe952e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667"></img></a></li>
                <li className="logo-li"><a target="_blank" href="mailto:dfsantos.dev@gmail.com"><img width="60px" alt="email-logo" src="https://camo.githubusercontent.com/be2da4b6935fde94c4062114d0e57b2456f700f8/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f656d61696c2e737667"></img></a></li>
                </ul>
                <a style={{color: "white", textDecoration: "none"}}target="_blank" href="mailto: dfsantos.dev@gmail.com"><p>dfsantos.dev@gmail.com</p></a>
                </div>
        </div>
    )
}

export default ContactMe