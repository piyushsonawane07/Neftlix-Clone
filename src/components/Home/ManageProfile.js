import React from 'react'
import './ManageProfile.css'
import { useLocation } from 'react-router'


export default function ManageProfile(props) {

    const location = useLocation();
    const profileImg = location.state.userImg;

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
                </div>
            </div>
        </>
    )
}
