import React, { useState, useEffect } from 'react';

import axios from '../axios';
import "../Row.css";
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_URL_picture = "https://image.tmdb.org/t/p/original/";

function Row(props) {

    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");


    // A snippet of code which runs based on a specific condition
    useEffect(() => {

        // if the bracket [] is blank, run once when the row loads and dont run again.
        // however we are adding the fetchURL in the brackets [] becasue we want that whenever a row changes and subsequently its url changes the data has to be re-loaded.


        async function fetchData() {
            const request = await axios.get(props.fetchURL)
            setMovies(request.data.results)
            // console.log(request);

            return request;
        }

        fetchData();
    }, [props.fetchURL])


    console.log(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        }
        else {
            movieTrailer(null, { tmdbId: movie.id })
                .then((url) => {

                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);

                    setTrailerUrl(urlParams.get('v'));
                    console.log(urlParams.get('v'));
                })
                .catch(error => console.log(error))
        }
    }


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="row_posters">

                {/* key = movie id is for optimization only */}
                {movies.map((movie) => <img key={movies.id}
                    onClick={() => handleClick(movie)} className={`row_poster ${props.isLargeRow && "row_posterLarge"}`} src={`${base_URL_picture}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />)}


            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row
