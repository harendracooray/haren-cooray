
import React, { useState, useEffect } from 'react';
import '../assets/style/movieComponent.css'

export default function MovieComp(props) {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = ([]);

    useEffect(() => {
        getMovieRequest();
    }, []);


    const getMovieRequest = async () => {
        const url = 'http://www.omdbapi.com/?s=star wars&apikey=4d416406';
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovies(responseJson.Search);
    }

    return (
        <div className='movie-component'>
            <div >
                <h2>Movies</h2>
            </div>
            <div className='movie-component_container'>
                {
                    movies.map((movie, index) => (
                        <div className='movie-img'>
                            <img src={movie.Poster} alt="movie"></img>
                        </div>
                    ))}
            </div>
        </div>
    )
}
