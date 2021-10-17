import React from 'react'
import './SignupFooter.css'

export default function SignupFooter() {
    return (
        <>
            <div className="footer-signup">
                <div className="container">
                    <h4 className="fs-6 mt-5">Questions? Call 000-800-32988-2198</h4>
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-2">
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQ</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Cookie Preference</a></li>
                                </ul>
                            </div>

                            <div className="col-2">
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Help Center</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Corporate Information</a></li>
                                </ul>
                            </div>

                            <div className="col-2">
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Terms of Use</a></li>
                                </ul>
                            </div>

                            <div className="col-2">
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Privacy</a></li>
                                </ul>
                            </div>

                        </div>

                        <button className="btn btn-secondary mt-4 btnlang" type="button" >
                            <i className="fas fa-globe me-1 fa-xs mt-2 text-dark"></i>
                            <select className="text-dark">
                                <option value="English">English</option>
                                <option value="Hindi">हिंदी</option>
                            </select>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}
