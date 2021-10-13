import React from 'react'
import SignupFooter from './SignupFooter'
import SignupHeader from './SignupHeader'
import './SlideThree.css'
import { Link } from 'react-router-dom'

export default function SlideThree() {
    return (
        <>
            <SignupHeader />
            <div className="slideThree">
                <div className="text-center">
                    <i class="bi bi-check-circle fa-3x text-danger"></i>
                    <p className="form-text ps-5 pe-5 mt-4 text-dark">STEP <span className="fw-bold"> 2 </span>OF <span className="fw-bold"> 3 </span></p>
                    <p className="fs-4 fw-bold text-dark ps-5 pe-5 text-center">Choose your Plan</p>
                    <div className="text-center ms-5">
                        <p className="ms-5 me-5 pe-5 text-start"><i class="bi bi-check2 text-danger fa-2x"></i><span className="ms-2">No commitments, cancel anytime.</span></p>
                        <p className="ms-5 me-5 pe-5 text-start"><i class="bi bi-check2 text-danger fa-2x"></i><span className="ms-2">Everything on Netflix for one low price.</span></p>
                        <p className="ms-5 me-5 pe-5 text-start"><i class="bi bi-check2 text-danger fa-2x"></i><span className="ms-2">No ads and no extra fees. Ever.</span></p>
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/slidefour"><button className="btn w-50 btn-next text-light">Next</button></Link>
                    </div>
                </div>
            </div>
            <SignupFooter />
        </>
    )
}
