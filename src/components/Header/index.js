import React from 'react';
import './style.css'
import {Link} from "react-router-dom";

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
            <Link to={'/'} className='nav-bar-item'>< li>Главная</li></Link>
            <Link to={'/news'} className='nav-bar-item'><li>Новости</li></Link>
            <Link to={'/login'} className='nav-bar-item'><li>Войти</li></Link>
            <Link to={'/registration'} className='nav-bar-item'><li>Зарегистироваться</li></Link>
        </ul>
    </div>
</div>
</div>
        </header>
    );
};

export default Header;