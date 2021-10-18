import React, { useState } from 'react';
import './EmailInput.css';
import { useHistory } from 'react-router-dom';
import $ from 'jquery'


export default function EmailInput() {

    let history = useHistory();

    const [email, setEmail] = useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setEmail(newValue);
    }

    function handleFocus() {
        $("#email__check").addClass("validate")
    }

    function handleClick(e) {
        if (email) {
            history.push(
                {
                    pathname: '/signup',
                    state: { email: email }
                });
        } else {
            e.preventDefault();
            $("p").removeClass("validate")
        }
    }

    return (
        <>
            <div className="email text-center">
                <input onFocus={handleFocus} autoComplete="off" type="email" name="email" placeholder="Email Address" value={email} onChange={handleChange} required />
                <button onClick={handleClick} className="btn btn-getStarted text-light">Get Started <i className="bi bi-chevron-right fa-sm"> </i> </button>
            </div>
            <p id="email__check" className="email-validation validate"><span className="alert__email">Email is required.</span></p>
        </>
    )
}
