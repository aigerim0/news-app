import React from 'react';
import './style.css'
import { NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
<div className='container'>
<div className='nav-logo'>
    <div >
        <h2 className='logo'>NEWS</h2>
    </div>

    <div>
        <ul className='nav-bar'>
            <NavLink exact to={'/'} className='nav-bar-item'>< li>Главная</li></NavLink>
            <NavLink to={'/news'} className='nav-bar-item'><li>Новости</li></NavLink>
            <NavLink to={'/login'} className='nav-bar-item'><li>Войти</li></NavLink>
            <NavLink to={'/registration'} className='nav-bar-item'><li>Зарегистироваться</li></NavLink>
        </ul>
    </div>
</div>
</div>
        </header>
    );
};

export default Header;