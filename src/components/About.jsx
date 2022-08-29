import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'

class About extends React.Component {
    render(){
        return (
            <>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Ahmad
                        <span className="text-primary">&nbsp;Romadhon</span>
                    </h1>
                    <div className="subheading mb-5">
                        Permatabank tower III Bintaro sektor 7 lt 9 ·
                        <a href="mailto:abdirama86@gmail.com">abdirama86@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className="social-icons">
                        
                        <a className="social-icon" href="https://www.linkedin.com/in/ahmadromadhon" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} size='lg' className='fab fa-linkedin-in'/></a>
                        <a className="social-icon" href="https://github.com/abdirama16" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} size='lg' className="fab fa-github" /></a>
                        <a className="social-icon" href="https://twitter.com/abdirama16" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} size='lg' className="fab fa-twitter" /></a>
                        <a className="social-icon" href="https://www.facebook.com/abdirama16" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebook} size='lg' className="fab fa-facebook-f" /></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            </>
          )
    }
}

export default About