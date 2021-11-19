import axios from '../axios'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl])

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  const playTrailer = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(url)
        setTrailerUrl(urlParams.get("v"))
      }).catch(error => {
        console.log(error);
        const urlParams = new URLSearchParams(new URL(process.env.REACT_APP_ALT_VID).search);
        setTrailerUrl(urlParams.get("v"))
        // console.log(process.env.REACT_APP_ALT_VID)
      })
    }
  }
  // console.log(movies);
  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          ((isLargeRow && movie.poster_path) || 
          (!isLargeRow && movie.backdrop_path)) && (
            <>
              <img
                key={movie.id}
                onClick={() => playTrailer(movie)}
                className={`row-poster ${isLargeRow && 'row-poster_large'}`}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                alt={movie.name}
              />
              {/* <p className="movie-name-row">{movie.name || movie.title || movie.original_title}</p> */}
            </>
          )
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
