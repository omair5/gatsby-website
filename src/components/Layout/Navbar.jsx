import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'gatsby';
import { NavbarData } from '../NavbarData';
import Travel from './travel.png'

import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={Travel} alt="LOGO" height={300} width={300} />
                </Link>

                {/* RESPONSIVE ICONS */}
                <div className='menu-icon' onClick={handleClick} >
                    {click ? <FaTimes /> : <GiHamburgerMenu />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {
                        NavbarData.map((value, index) => (
                            <li className='nav-item' key={index}>
                                <Link to={value.link} className='nav-links' onClick={closeMobileMenu}>{value.title}</Link>
                            </li>
                        ))
                    }

                    {/* ADD PROPERTY BUTTON
                    <li className='forMobileAddButton' >
                        button
                    </li> */}
                </ul>
            </nav>
        </>
    );
}
export default Navbar;