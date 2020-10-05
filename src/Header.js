import React from 'react';
import logo from './assets/images/logo.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

import './assets/Header.css'
function Header() {
    const [{basket , user}]=useStateValue();
    const login=()=>{
        if(user){
            auth.signOut();
        }

    };
    return (
        <nav className="header">
            <div onClick={login} className={"profile__info"}>
                <h5>{user?.email}</h5>
                <AccountCircleIcon className={"profile__icon"}/>

            </div>

            <img className="header__logo" src={logo} alt={"NavBarLogo"}/>


        </nav>
    );
}

export default Header;
