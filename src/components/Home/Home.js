import React, { useEffect, useState } from 'react'
import { getAuth, signOut } from "firebase/auth";
import InitializeAuthentication from '../../firebase.init';
import { useHistory } from 'react-router';
import { getDatabase, ref, onValue } from "firebase/database";
import { useLocation } from 'react-router';
import './Home.css'
import trailer from '../../images/trailer.jpg'
import HomeNav from './HomeNav';
import { Link } from 'react-router-dom';


export default function Home() {

    InitializeAuthentication();

    const [profileImg, setProfileImg] = useState('');
    const [profileName, setProfileName] = useState('');

    const location = useLocation();
    const userId = location.state.userId;


    useEffect(() => {
        const db = getDatabase();
        const Ref = ref(db, 'users/' + userId);
        onValue(Ref, (snapshot) => {
            const data = snapshot.val();
            setProfileImg(data.profile_picture);
            setProfileName(data.username);
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
                <HomeNav userImg={profileImg} userName={profileName} userId={userId} />
                {/* <Movies/> */}
                <div style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)),url(${trailer}) top left / cover no-repeat`, }} class="top__rated">
                    <h2 className="text-start text-light title">A View From Moon</h2>
                    <p className="text-start text-light desc">
                        The first surf film shot in 4K, View From A Blue Moon follows the world's most dynamic
                        surfer John Florence and his closest friends from his home on the North Shore of Oahu to
                        his favorite surfing destinations around the globe.
                    </p>
                    <div className="text-start info__btn">
                        <button className="btn btn-danger"><i class="bi bi-info-circle text-light me-2"></i>info</button>
                        <Link to="/play-video"><button className="btn btn-danger"><i class="bi bi-play-circle-fill me-2"></i>Play</button></Link>
                    </div>
                </div>
                <h2 className="text-start text-light title_category">Top Rated Movies</h2>
                <button onClick={handleClick} className="btn btn-danger m-5">Sign out</button>
            </div>
        </div>
    )
}
