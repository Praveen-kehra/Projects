import React from 'react'
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import requests from '../Requests';

const HomeScreens = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />

      <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movie' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movie' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horrer Movie' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreens;
