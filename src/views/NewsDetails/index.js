import React, {useEffect, useState} from 'react';

import {useParams,useHistory} from 'react-router-dom'
import axios from "axios";
import './style.css'
import NotFount from "../NotFount";

const NewsDetails = () => {
    const [newDetail,setNewDetails] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const params = useParams()
    const history = useHistory()
    const [notFount,setNotFount] = useState(false)
    useEffect(() => {
        axios(`https://613b7037110e000017a45616.mockapi.io/api/news/${params.id}`)
            .then(({data}) => setNewDetails(data))
            .catch(() => setNotFount(true))
            .finally(() =>  setIsLoading(false) )
    } , [params])
    const backBtn = () => {
        history.goBack()
    }
    if (isLoading ){
        return <div className="spinner-border text-dark isloading  " role="status">
                <span className="visually-hidden  ">Loading...</span>
            </div>


    }if(notFount){
        return  <NotFount/>
    }
    return (
        <div>
            <button className='back-btn' onClick={backBtn}><i className='bx bx-arrow-back'></i></button>
            <div className='newDetail-title'>
           <h2 >{newDetail.title}</h2>
            </div>
            <div className='row '>
               <div className='col-md-5'>
                   <div >
                       <img className='newDetail-img' src={newDetail.image} alt="#"/>
                   </div>
               </div>
                <div className='col-md-7'>
                    <div >
                        <p className='newDetail-desc'>{newDetail.description}</p>
                        <p><b>Источник:</b> {newDetail.author}</p>
                        <p><b>Дата:</b> {newDetail.data}</p>
                    </div>
                </div>
            </div>
            <h3 className='newDetail-desc'>Комментарии</h3>
            <p> <b>Айгерим</b> {newDetail.data}</p>
            <p>Ну хоть что-то доброе!</p>
            <input className='input-comment' type='textarea' placeholder='Комментарии...'/>
            <div className='newDetail-div-btn' >
                <button className='newDetail-btn'>Отправить</button>
            </div>
        </div>
    );
};

export default NewsDetails ;