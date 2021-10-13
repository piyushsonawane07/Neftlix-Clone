import React, { useState } from 'react'
import './Signin.css'
import logo from '../../images/logo.svg';
import Input from '../Input/Input';
import Fbic from '../../images/facebook.png'

export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        if (email && password) {
            console.log("login Clicked !");
        } else {
            alert("Please check Feilds !")
        }
    }


    return (
        <>

            <div className="signin__background">
                <img className="logo mt-4 ms-5" src={logo} alt="" />

                <div className="signin__window">
                    <p className="fs-2 text-light fw-bold">Sign in</p>

                    <div>
                        <Input type="email" value={email} setValue={setEmail} name="loginEmail" placeholder='Email or phone number' required={true} />
                        <Input type="password" name="loginPass" value={password} setValue={setPassword} placeholder='Password' required={true} />
                    </div>

                    <div className="text-center">
                        <button onClick={handleLogin} className="btn w-100 btn-signin text-light fw-bold pt-2 pb-2">Sign In</button>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label form__text" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="text-end">
                                <p className="form__text cursorhelp">Need Help ?</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="mt-4"> <img className="fbic" src={Fbic} alt="" /> <span className="ms-1 form__text text-secondary cursor">Login with Facebook</span> </p>
                    </div>

                    <div>
                        <p>New to Netflix ?<span className="text-light"> <a href="/" className="a"> Sign up now</a></span></p>
                    </div>

                    <div className="form__text text-secondary">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="form__text text-primary cursor">Learn more.</span>
                    </div>

                </div>

                <div className="footer">

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
                                <i className="fas fa-globe me-1 fa-xs mt-2"></i>
                                <select>
                                    <option value="English">English</option>
                                    <option value="Hindi">हिंदी</option>
                                </select>
                            </button>
                        </footer>
                    </div>
                </div>

            </div>


        </>
    )
}
