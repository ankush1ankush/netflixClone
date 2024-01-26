import React from 'react'
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import requests from '../Request/Request'
import Row from '../Row/Row'


import FetchRow from '../Row/fetchRow'

function HomeScreen() {


    //console.log(movieUrl);
    return (
        <div className="homeScreen">

            <NavBar />
            <Banner />
            <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />{
                // fireStore row
            }

            <FetchRow title="Trending" isLargeRow />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}

export default HomeScreen