import React, {useEffect, useState} from 'react';

import axios from "axios";
import {Link,} from "react-router-dom";
import './style.css'

const News = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios('https://613b7037110e000017a45616.mockapi.io/api/news')
            .then(({data}) => {
                setNews(data)
                setIsLoading(false)

            })
    }, [])
    if (isLoading) {
        return <div className="spinner-border text-dark  " role="status">
            <span className="visually-hidden isloading ">Loading...</span>
        </div>
    }
    return (
        <div>
            <div className='row '>
                {
                    news.map(item =>
                        <div className='col-md-3 mb-5'>
                            <div className='news-box '>
                                <Link to={`/news/${item.id}`}>
                                    <img className='news-img' src={item.image} alt="#"/>
                                    <h6 className='news-title'>{item.title}</h6>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default News;