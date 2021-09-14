import React, {useEffect, useState} from 'react';
import Layout from "../../Layout";
import axios from "axios";
import {Link,} from "react-router-dom";
import './style.css'

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios('https://613b7037110e000017a45616.mockapi.io/api/news')
            .then(({data}) => setNews(data))
    }, [])
    return (
        <Layout>
         <div className='row '>
             {
                 news.map(item =>
                   <div className='col-md-3 mb-5'>
                       <div className='news-box '>
                           <Link to={`/new/${item.id}`}>
                               <img className='news-img' src={item.image} alt="#"/>
                               <h6 className='news-title'>{item.title}</h6>
                           </Link>
                       </div>
                   </div>
                 )
             }
         </div>
        </Layout>
    );
};

export default News;