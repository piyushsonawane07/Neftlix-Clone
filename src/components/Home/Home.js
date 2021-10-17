import React, { useEffect, useState } from 'react'
import { getAuth, signOut } from "firebase/auth";
import InitializeAuthentication from '../../firebase.init';
import { useHistory } from 'react-router';
import { getDatabase, ref, onValue } from "firebase/database";
import { useLocation } from 'react-router';
import './Home.css'
import HomeNav from './HomeNav';


export default function Home() {

    InitializeAuthentication();

    const [profileImg, setProfileImg] = useState('');
    const [userName, setUserName] = useState('');

    const location = useLocation();
    const userId = location.state.userId;
    console.log(userId);
    console.log(profileImg);


    useEffect(() => {
        const db = getDatabase();
        const Ref = ref(db, 'users/' + userId);
        onValue(Ref, (snapshot) => {
            const data = snapshot.val();
            setProfileImg(data.profile_picture);
            setUserName(data.username);
        });
        // eslint-disable-next-line
    }, [])



    const history = useHistory();


    function handleClick(e) {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            history.push("/");
            console.log("Sign out Success !");
        }).catch((error) => {

        });

    }

    return (
        <div className="home">
            <div className="text-center">
                <HomeNav userImg={profileImg} userName={userName} />
                {/* <Movies/> */}
                <button onClick={handleClick} className="btn btn-danger m-5">Sign out</button>
            </div>
        </div>
    )
}
