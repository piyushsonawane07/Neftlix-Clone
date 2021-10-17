import React, { useState } from 'react'
import SignupFooter from './SignupFooter'
import SignupHeader from './SignupHeader'
import './SlideTwo.css'
import { useHistory, useLocation } from 'react-router-dom'
import $ from 'jquery'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import InitializeAuthentication from '../../firebase.init';


export default function SlideTwo() {

    InitializeAuthentication();

    const location = useLocation();
    const history = useHistory();

    const [email, setEmail] = useState(location.state.email)
    const [password, setPassword] = useState('')

    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === "signupEmail") {
            setEmail(e.target.value)
        } else if (e.target.name === "signupPass") {
            setPassword(e.target.value);
        }
    }

    function handleClick() {
        if (email && password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    const userId = res.user.uid;
                    console.log(userId);
                    history.push({
                        pathname: '/slidethree',
                        state: { userId: userId }
                    })
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        console.log("Account Already exist .");
                        $("p").removeClass("supvalidate-email")
                    }
                    if (error.code === "auth/invalid-email") {
                        console.log("Invalid Email.");
                        $("p").removeClass("checkvalidate")
                    }
                    if (error.code === "auth/weak-password") {
                        console.log("Password Length.");
                        $("p").removeClass("passvalidate")
                    }

                });
        } else {
            $("p").removeClass("validate")
        }
    }

    return (
        <>
            <SignupHeader action="Sign in" />
            <div className="slideTwo">
                <div>
                    <p className="form-text ps-5 pe-5 mt-4 text-dark">STEP <span className="fw-bold"> 1 </span>OF <span className="fw-bold"> 3 </span></p>
                    <p className="fs-4 fw-bold text-dark ps-5 pe-5 text-start">Create a password to start your membership</p>
                    <p className="ms-5 me-5 pe-5 text-start">Just a few more steps and you're done! We hate paperwork, too.</p>
                </div>
                <div className="inputs">
                    <input type="email" value={email} onChange={handleChange} name="signupEmail" placeholder='Email or phone number' required={true} />
                </div>
                <div className="inputs">
                    <input type="password" value={password} onChange={handleChange} name="signupPass" placeholder='Password' required={true} />
                </div>
                <p className="password-validation validate"><span className="fs-6">Password is required.</span></p>
                <p className="supemail-validation supvalidate-email"><span className="fs-6">Account Already Exist. Pls Sign in !</span></p>
                <p className="checkemail-validation checkvalidate"><span className="fs-6">Pls check your email.</span></p>
                <p className="checkpass-validation passvalidate"><span className="fs-6">Password should be greater than 5 charecters.</span></p>
                <div className="text-center mt-5">
                    <button onClick={handleClick} className="btn w-50 btn-next text-light">Next</button>
                </div>
            </div>
            <SignupFooter />
        </>
    )
}
