import React from 'react'
import { useEffect, useState } from 'react';

import { app } from "../Firebase/Firebase"
import "./fetch.css"
import { collection, query, getFirestore, onSnapshot } from "firebase/firestore";
const db = getFirestore(app);

//const base_url = "https://image.tmdb.org/t/p/original"
function FetchRow({ title, isLargeRow = false }) {


    const [movieUrl, setUrls] = useState();

    useEffect(() => {

        async function getData() {
            const q = query(collection(db, "tredings"))

            await onSnapshot(q, (snapshot) => {
                setUrls(
                    snapshot.docs.map((doc) => ({
                        url: doc.data().url
                    }))
                )
            })

        }

        getData();




    }, [])


    //console.log(movieUrl)

    return (
        <div className="Row"> <h2>{title}</h2>
            <div className="Row_posters">
                {movieUrl?.map((movie, index) => {

                    console.log(movie)
                    return <img
                        key={index}

                        className={`Row_poster `}
                        src={`${movie.url}`}
                        alt={""} />
                })}
            </div></div>
    )
}

export default FetchRow;