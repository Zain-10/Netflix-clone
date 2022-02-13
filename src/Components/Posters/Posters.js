import React, { useEffect,useState } from 'react'
import Youtube from 'react-youtube'
import './Posters.css'
import { imageUrl,API_KEY } from '../../Constants/Constants';
import axios from '../../axios';

function Posters(props) {
  const [movies, setmovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    })
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMOvie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Trailer not available')
      }
    })
    
  }
  
    return (
        
              <div className='row'>
                <h3>{props.title}</h3>
                <div className='row_posters'>
                  {movies.map((obj)=>
                  <img onClick={()=> handleMOvie(obj.id)} className= {props.isSmall ? 'posters' : 'largeposters'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                  )}
                </div>
                 { urlId &&  <Youtube opts={opts} videoId={urlId.key} />}
              </div>
             
    )
}

export default Posters
