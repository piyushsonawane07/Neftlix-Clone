import React from 'react'
import './SectionSeven.css'

export default function SectionSeven() {
    return (
        <>
            <div class="container">
                <h4 className="fs-6 mt-5">Questions? Call 000-800-32988-2198</h4>
                <footer class="py-5">
                    <div class="row">
                        <div class="col-2">
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">FAQ</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Investor Relations</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Speed Test</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Privacy</a></li>
                            </ul>
                        </div>

                        <div class="col-2">
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Help Center</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Jobs</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Cookie Preference</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">legal Notice</a></li>
                            </ul>
                        </div>

                        <div class="col-2">
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Account</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Redeem Gift Cards</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Privacy</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Speed Test</a></li>
                            </ul>
                        </div>

                        <div class="col-2">
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Media Center</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Buy Gift Cards</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Cookie Preferences</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Legal Notices</a></li>
                            </ul>
                        </div>

                    </div>

                    <button class="btn btn-secondary mt-4 btnlang" type="button" >
                        <i class="fas fa-globe me-1 fa-xs mt-2"></i>
                        <select>
                            <option value="English">English</option>
                            <option value="Hindi">हिंदी</option>
                        </select>
                    </button>

                    <div class="d-flex justify-content-between py-4 mt-2">
                        <p>Netflix India</p>
                        <ul class="list-unstyled d-flex">
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
