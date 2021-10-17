import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'gatsby';
import { NavbarData } from '../../Data/NavbarData';
import './Navbar.css';
import Button from '../Button';
import styled from 'styled-components';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                    <Logo>EXPLORIX</Logo>
                </Link>

                {/* RESPONSIVE ICONS */}
                <div className='menu-icon' onClick={handleClick} >
                    {click ? <FaTimes className={'fa-bars'} /> : <GiHamburgerMenu className={'fa-bars'} />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {
                        NavbarData.map((value, index) => (
                            <li className='nav-item' key={index}>
                                <Link to={value.link} className='nav-links' onClick={closeMobileMenu}>{value.title}</Link>
                            </li>
                        ))
                    }

                    {/* IF I HAVE TO COMMENT THIS OUT THEN I HAVE TO REMOVE justify-content:end PROPERTY  */}
                    {/* AND TO STYLE THIS BUTTON I HAVE TO REMOVE li */}
                    <li className='forMobileAddButton' >
                        <Button title='Book A Flight' linkto='/trips' />
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;

const Logo = styled.h1`
position: relative;
left: 30px;
color:#F26A2E;

`