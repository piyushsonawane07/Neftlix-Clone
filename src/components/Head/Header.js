import React from 'react'
import logo from '../../images/logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="row d-flex pt-4 ps-4 ">

                <div>
                    <img className="logo__landing" src={logo} alt="" />
                
                    <button className="btn btn-secondary btnddropdown" type="button" >
                        <i className="fas fa-globe me-1 fa-xs mt-2"></i>
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
