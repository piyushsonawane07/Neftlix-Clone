import React, { useState } from 'react'
import './Profile.css'
import logo from '../../images/logo.svg'
import { useHistory } from 'react-router'
import InitializeAuthentication from '../../firebase.init'
import $ from 'jquery'
import { getDatabase, ref, set } from "firebase/database";
import { useLocation } from 'react-router-dom'


export default function Profile() {

    InitializeAuthentication();

    const history = useHistory();
    const location = useLocation();

    const userId = location.state.userId;

    const array = ["seed", "plant", "user", "netflix", "c++", "java", "python", "nodejs", "react"];
    const diceBear = ["identicon", "jdenticon", "pixel-art-neutral", "pixel-art"];

    const randomIndex = Math.floor(Math.random() * array.length);
    const randomIndexImg = Math.floor(Math.random() * diceBear.length);

    const randomElement = array[randomIndex];
    const randomImg = diceBear[randomIndexImg];

    const urlProfileImage = "https://avatars.dicebear.com/api/" + randomImg + "/:" + randomElement + '.svg'

    const [userName, setUserName] = useState("user");

    function handleChange(e) {
        e.preventDefault();
        const newValue = e.target.value;
        setUserName(newValue);
    }


    async function handleClick(e) {
        e.preventDefault();
        if (userName) {
            const db = getDatabase();
            set(ref(db, "users/" + userId), {
                username: userName,
                profile_picture: urlProfileImage
            });
            history.push({
                pathname: "/home",
                state: { userId: userId }
            });
            history.block();
        }
        else {
            $("p").removeClass("usernamevalidate");
        }
    }

    return (
        <>
            <div className="profile">

                <div className="logocontainer">
                    <img className="logo" src={logo} alt="" />
                </div>

                <div className="profile-container text-center mt-5">
                    <h1 className=" fw-bold p-2 text-light">Who's Watching?</h1>
                    <div className="mt-5">
                        <img src={urlProfileImage} alt="" width="180" height="180" />
                    </div>
                    <input style={{ "backgroundColor": "#141414", border: "1px solid #333333", "borderRadius": "5px" }} value={userName} onChange={handleChange} autoFocus className="fw-bold p-2 fs-3 ms-4 mt-5 text-center text-light"></input>
                    <span className=""><i class="bi bi-pen text-light ms-4"></i></span>
                    <p className="username-validation usernamevalidate mt-2"><span className="fs-6">Please Enter Username</span></p>
                    <div className="text-center mt-5">
                        <button onClick={handleClick} className="btn w-50 btn-next text-light">Next</button>
                    </div>
                </div>

            </div>
        </>
    )
}
