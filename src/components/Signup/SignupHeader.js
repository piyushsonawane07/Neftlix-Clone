import React from 'react'
import './SignupHeader.css'
import logo from '../../images/logo.svg';
import { getAuth, signOut } from "firebase/auth";
import InitializeAuthentication from '../../firebase.init';
import { useHistory } from 'react-router';

export default function SignupHeader(props) {

    InitializeAuthentication();

    const history = useHistory();

    function handleClick() {
        if (props.action === "Sign in") {
            history.push("/signin")
        } else if (props.action === "Sign out") {
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                history.push("/");
                console.log("Sign out Success !");
            }).catch((error) => {
                // An error happened.
            });
        }
    }

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
                            <button className="btn action" onClick={handleClick}><p className="text-dark fw-bold fs-5 btn-sin">{props.action}</p></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
