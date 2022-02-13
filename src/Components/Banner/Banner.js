import React, { useEffect, useState } from 'react'
import {imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
  const [movie,setMovie]=useState([])
    useEffect(()=> {
    axios.get('trending/all/week?api_key=35a42c202bd793e78d3cf318e6236552&language=en-US').then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[0])

     } )
    },[])
    return (
    <div
     style={{ backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})` }}
    class="moneyheist">
            <div class="title">
             <h1>{movie ? movie.title : ""}</h1>
           </div>
           <div class="genre">
              <h3>{movie ? movie.media_type : ""}</h3>
           </div>
           <div class="buttons">
                <button class="button"> Play</button>
                <button class="button">My list</button>
           </div>
           <div className='disc'>
           {movie ? movie.overview : ""}
           </div>
           <div className="fade">
           </div>
    </div>
    )
}

export default Banner
