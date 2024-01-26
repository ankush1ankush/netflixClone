import React, { useEffect, useState } from 'react'
import axios from "../Axios/Axios"
import requests from "../Request/Request"
import "./Banner.css"

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
            // Math.floor(Math.random() * request.data.results.length -1)
            return request;
        }
        fetchData();
    }, [])

    //console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (

        <div className="banner" style={{
            marginTop: "61px",
            backgroundSize: "cover", backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`  , backgroundPosition: "center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />


        </div>

    )
}

export default Banner