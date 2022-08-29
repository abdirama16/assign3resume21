import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3Alt,faJs, faAngular,faReact,faNodeJs,faSass,faLess,faWordpress,faGulp,faGrunt,faNpm} from '@fortawesome/free-brands-svg-icons'

class Skills extends React.Component {
    render(){
        return (
            <div>
                <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><FontAwesomeIcon icon={faHtml5} size='lg' className="fab fa-html5" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faCss3Alt} size='lg' className="fab fa-css3-alt" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faJs} size='lg' className="fab fa-js-square" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faAngular} size='lg' className="fab fa-angular" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faReact} size='lg' className="fab fa-react" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faNodeJs} size='lg' className="fab fa-node-js" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faSass} size='lg' className="fab fa-sass" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faLess} size='lg' className="fab fa-less" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faWordpress} size='lg' className="fab fa-wordpress" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faGulp} size='lg' className="fab fa-gulp" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faGrunt} size='lg' className="fab fa-grunt" /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faNpm} size='lg' className="fab fa-npm" /></li>
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            </div>
          )
    }
}

export default Skills