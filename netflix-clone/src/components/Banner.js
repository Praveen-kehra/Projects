import axios from '../axios.js';
import React, { useEffect, useState } from 'react'
import requests from '../Requests.js';
import YouTube from 'react-youtube';

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request
    }
    fetchData();
  }, [])

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }
  
  const [playMovie, setPlayMovie] = useState(false);
  const [movieUrl, setMovieUrl] = useState('');
  
  const play = () => {
    // console.log('play');
    if (playMovie) {
      setPlayMovie(false);
      // console.log(playMovie)
      setMovieUrl('')
    } else {
      setPlayMovie(true);
      // console.log(playMovie)
      const urlParams = new URLSearchParams(new URL(process.env.REACT_APP_ALT_VID).search);
      setMovieUrl(urlParams.get("v"))
      window.scrollTo(0, 400);
    }
  }
  // console.log(movie);
  const truncate = (string, l) => {//  l=max_length
    return string?.length > l ? string.substr(0, l - 1) + '....' : string
  }
  return (
    <>
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path }")`,
        backgroundPosition: "40% 30%",
        zIndex: '0',
        backgroundRepeat: 'no-repeat',
        maxWidth: "100%",
      }}

    >
      <div className="banner-conatiner">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button
            onClick={() => { play() }}
            className="banner-button">{playMovie ? `PAUSE` : 'PLAY'}</button>
          <button className="banner-button">MY LIST</button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
      {playMovie && <YouTube videoId={movieUrl} opts={opts} />}
    </>
  )
}

export default Banner
