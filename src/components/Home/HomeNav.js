import React from 'react';
import logo from '../../images/logo.svg';
import './HomeNav.css';
import { useHistory } from 'react-router';

export default function HomeNav(props) {

    const history = useHistory();

    function handleProfileclick() {
        history.push({pathname:"/manage-profile",state:{userImg:props.userImg,userName:props.userName,userId:props.userId}});
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">

                <div className="container-fluid">

                    <div className="logocontainer__home">
                        <img className="logo__home" src={logo} alt="" />
                    </div>

                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0 ms-5">
                            <li className="nav-item ms-2">
                                <a className="nav-link active fs-6 text-light" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link  fs-6 text-light" aria-current="page" href="/home">TV Shows</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link  fs-6 text-light" aria-current="page" href="/home">Movies</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link fs-6 text-light" aria-current="page" href="/home">Netflix Originals</a>
                            </li>
                        </ul>
                        <form className="d-flex right-nav">
                            <i class="bi bi-search text-light mt-4 me-4"></i>
                            <p className="text-light mt-4 me-4">KIDS</p>
                            <i class="bi bi-bell text-light mt-4 me-4"></i>
                            <div className="mt-2 profile__img">
                                <button style={{"backgroundColor":"#141414","border":"1px transparent"}} onClick={handleProfileclick}><img src={props.userImg} alt="" width="40" height="40"/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
