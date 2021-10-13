import React from 'react'
import './SignupHeader.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function SignupHeader() {
    return (
        <>
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <img className="navbar-brand logo mt-2" src={logo} alt=""></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                        </ul>
                        <div className="text-end me-5">
                            <Link style={{textDecoration:"none"}} to="/signin"> <p className="text-dark fw-bold fs-5 btn-sin">Sign in</p></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
