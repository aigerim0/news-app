import React, {useState} from 'react';
import './style.css'
import { NavLink} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [user,setUser] = useState({name: "", phone:"", email:""})
    const [sentSuccess,setSentSuccess] = useState(false)

    const handleSubmit = (e) => {
e.preventDefault()
        axios.post('https://613b7037110e000017a45616.mockapi.io/api/callback',user)
            .then(() => {
                setSentSuccess(true)
                setTimeout(() =>
                    {
                        setIsOpen(false)
                        setSentSuccess(false)
                    }
                    ,2000)
            } )
    }

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    return (
        <header className='header'>
<div className='container'>
<div className='nav-logo'>
    <div >
        <h2 className='logo'>NEWS</h2>
    </div>

    <div>
        <div className='nav-bar'>
            <NavLink exact to={'/'} className='nav-bar-item'>Главная</NavLink>
            <NavLink to={'/news'} className='nav-bar-item'>Новости</NavLink>
            <NavLink to={'/login'} className='nav-bar-item'>Войти</NavLink>
            <NavLink to={'/claim'} className='nav-bar-item'>Заявки</NavLink>
            <NavLink to={'/students'} className='nav-bar-item'>Студенты</NavLink>
            <NavLink to={'/registration'} className='nav-bar-item'>Зарегистироваться</NavLink>
            <button onClick={() => setIsOpen(true)} className='callback'>Связаться со мной</button>
        </div>

    </div>
</div>
</div>
            {
                isOpen &&
                <div className="modal-window">
                    <div className='modal-content'>
                        {
                            sentSuccess ? 'Успешно отправлено!':
                           <>
                               <h3>Оставь заявку и получи консультацию от нас.</h3>
                               <form onSubmit={handleSubmit}>
                                   <div className='form-group'>
                                       <label htmlFor='name' >Ваша имя:</label>
                                       <input onChange={handleChange} className='form-input' type="text" id='name' name='name' required/>
                                   </div>
                                   <div className='form-group'>
                                       <label htmlFor='phone' >Номер телефона:</label>
                                       <input onChange={handleChange} className='form-input' type="text" id='phone' name='phone' required/>
                                   </div>
                                   <div className='form-group'>
                                       <label htmlFor='email' >Почта:</label>
                                       <input onChange={handleChange} className='form-input' type="text" id='email' name='email' required/>
                                   </div>
                                   <button className='callback sent-btn' type='submit'>Отправить</button>
                               </form></>
                        }
                        <button onClick={() => setIsOpen(false)} className='close-modal'>×</button>
                    </div>
                </div>
            }
        </header>
    );
};

export default Header;