import React from 'react';
import logo from './logo.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import './Header.css'
function Header() {
    return (
        <nav className="header">
            <div className={"profile__info"}>
                <h5>ندا میرآقایی</h5>
                <AccountCircleIcon className={"profile__icon"}/>

            </div>

            <img className="header__logo" src={logo} alt={"NavBarLogo"}/>


        </nav>
    );
}

export default Header;
