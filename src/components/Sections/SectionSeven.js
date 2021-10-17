import React from 'react'
import './SectionSeven.css'

export default function SectionSeven() {
    return (
        <>
            <div className="container">
                <p className="fs-6 number">Questions? Call 000-800-32988-2198</p>
                <footer className="py-5">
                    <div className="row">
                        <div className="col-md-2">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQ</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Investor Relations</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Speed Test</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Privacy</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Help Center</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Jobs</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Cookie Preference</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">legal Notice</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Account</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Redeem Gift Cards</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Privacy</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Speed Test</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Media Center</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Buy Gift Cards</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Cookie Preferences</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Legal Notices</a></li>
                            </ul>
                        </div>

                    </div>

                    <button className="btn btn-secondary mt-4 btnlang" type="button" >
                        <i className="fas fa-globe me-1 fa-xs mt-2"></i>
                        <select>
                            <option value="English">English</option>
                            <option value="Hindi">हिंदी</option>
                        </select>
                    </button>

                    <div className="d-flex justify-content-between py-4 mt-2">
                        <p>Netflix India</p>
                        <ul className="list-unstyled d-flex">
                        </ul>
                    </div>
                    <div className="">
                        <h5 className="text-light">Made by <span className="text-danger fs-5"> Piyush Sonawane</span> 👋</h5>
                    </div>
                </footer>
            </div>
        </>
    )
}
