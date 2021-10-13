import React from 'react'
import logo from '../../images/logo.svg';
import '../Landing/Landing.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="row d-flex pt-4 ps-5 ">

                <div className="col-md-6 col-sm-12">
                    <img className="logo" src={logo} alt="" />
                </div>

                <div className="col-md-6 col-sm-12">
                    <button class="btn btn-secondary btnddropdown" type="button" >
                    <i class="fas fa-globe me-1 fa-xs mt-2"></i>
                    <select>
                        <option value="English">English</option>
                        <option value="Hindi">हिंदी</option>
                    </select>
                    </button>
                    <Link to="/signin"><button className="btn btn-danger btn-signin">Sign in</button></Link>
                </div>
                
            </div>
        </>
    )
}
