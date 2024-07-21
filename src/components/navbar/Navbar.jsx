import React from 'react'
import './Navbar.css'
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='nav'>
            <div className="container">
                <div className="nav-bar">
                    <Link to={'/'} >
                        <div className="logo">
                            <img src="../public/imgs/logo.png" alt="" className="logo" />

                        </div>
                    </Link>
                    <ul>
                        <li><a href="">LIVING ROOM</a></li>
                        <li><a href="">BEDROOM</a></li>
                        <li><a href="">KITCHEN &  DINING</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                    <div className="icons">
                        <span><MdShoppingCart /></span>
                        <span><FaUserCircle /></span>
                        <span><ImSearch /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar