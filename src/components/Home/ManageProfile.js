import React,{useState} from 'react'
import './ManageProfile.css'
import { useLocation } from 'react-router'
import InitializeAuthentication from '../../firebase.init'
import { getDatabase, ref, set } from "firebase/database"
import $ from 'jquery'
import { useHistory } from 'react-router';

export default function ManageProfile() {

    InitializeAuthentication();

    const history = useHistory();
    const location = useLocation();

    const profileImg = location.state.userImg;
    const profileName = location.state.userName;
    const userId = location.state.userId;

    console.log(userId);

    const [user, setUser] = useState(profileName)


    function handleChange(e){
        setUser(e.target.value);
    }

    function handleSaveClick(e) {
        e.preventDefault();
        if (user) {
            const db = getDatabase();
            set(ref(db, "users/" + userId), {
                username: user,
                profile_picture:profileImg
            });
            history.push({
                pathname: "/home",
                state: { userId: userId }
            });
         
        }
        else {
            $("p").removeClass("usernamevalidate");
        }
    }

    return (
        <>
            <div className="manage__profile">
                <div className="profile__data">
                    <h4 className="text-center text-light fs-3 fw-bold p-2">
                        Manage Profile
                    </h4>
                    <div className="mt-4 profile__img text-center">
                        <img src={profileImg} alt="" width="140" height="140" />
                    </div>
                    <div className="text-center">
                        <input style={{ "backgroundColor": "#141414", border: "1px solid #333333", "borderRadius": "5px" }} name="username" value={user} onChange={handleChange} autoFocus className="fw-bold p-2 fs-3  mt-5 text-center text-light username__input"/>
                        <p className="username-validation usernamevalidate mt-4 text-center"><span className="fs-6">Please Enter Username</span></p>
                    </div>
                    <div className="text-center">
                        <button onClick={handleSaveClick} className="btn btn-danger m-5">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
