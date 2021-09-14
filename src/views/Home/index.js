import './style.css'
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from "react-router-dom";

const Home = () => {
    const [hero, setHero] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [notFount,setNotFount] = useState(false)

    useEffect(() => {
        axios('https://613b7037110e000017a45616.mockapi.io/api/news')
            .then(({data}) => setHero(data))
            .catch(() => setNotFount(true))
            .finally(() =>  setIsLoading(false) )
    }, [])
    if (isLoading){
      return  <div className="spinner-border text-dark " role="status">
            <span className="visually-hidden isloading">Loading...</span>
        </div>

    }
    return (

<div>
  <div className='home'>
      <OwlCarousel  loop margin={10} autoplay={true} >
      {
          hero.map(item =>
        <div>
            <Link to={'/news'}>
                <img className='home-img' src={item.image} alt="#"/>
                <h5 className='home-title'>{item.title}</h5>
            </Link>
        </div>

          )
      }
      </OwlCarousel>
  </div>
</div>

    )
}

export default Home