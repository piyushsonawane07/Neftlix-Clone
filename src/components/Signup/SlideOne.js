import React from 'react'
import SignupFooter from './SignupFooter'
import SignupHeader from './SignupHeader'
import './SlideOne.css'
import img from '../../images/devices.png'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function SlideOne() {

    const location = useLocation();

    return (
        <>
            <SignupHeader action="Sign in" />
            <div className="slideOne">
                <div className="text-center">
                    <img className="img" src={img} alt="" />
                </div>
                <div className="text-center">
                    <p className="form-text mt-4 text-dark">STEP <span className="fw-bold"> 1 </span>OF <span className="fw-bold"> 3 </span></p>
                    <p className="fs-4 fw-bold text-dark">Finish setting up your account</p>
                    <p className="ms-5 me-5 text-slide1">Netflix is personalised for you. Create a password to watch on any device at any time.</p>
                </div>
                <div className="text-center">
                    <Link to={{
                        pathname: '/slidetwo',
                        state: { email: location.state.email }
                    }} ><button className="btn w-50 btn-next text-light">Next</button></Link>
                </div>
            </div>
            <SignupFooter />
        </>
    )
}
