import React from 'react'
import profile from '../assets/img/profile.jpg'
import {Link} from 'react-router-dom'

class SideNav extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Ahmad Romadhon</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/experience">Experience</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/education">Education</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/interests">Interests</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/awards">Awards</Link></li>
                </ul>
            </div>
        </nav>
          )
    }
}

export default SideNav