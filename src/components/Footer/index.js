import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <footer className='footer'>
         <div className='footer-content container'>
             <div >
                 <h2 className='logo'>NEWS</h2>
             </div>
             <div className='footer-descs'>
                 <div className='footer-icon'>
                     <i className='bx bx-copyright'></i>
                 </div>
                 <div className='footer-desc'>
                     <p>Болотова Айгерим</p>
                 </div>
             </div>
         </div>
        </footer>
    );
};

export default Footer;