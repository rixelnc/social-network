import React from 'react';
import fox from "../assets/fox.png"
import s from './Header.module.css'


const Header = () => {
    return <header className={s.header}>
        <img
            src={fox}
            alt=''/>
    </header>
}
export default Header;