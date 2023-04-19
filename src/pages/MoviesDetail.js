import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Container, Row} from "react-bootstrap";

const MoviesDetail = () => {

    const { moviesid } = useParams();

    const [movies, setMovies] = useState({});

    const getMoviesInfo = async () => {
        const address = `https://api.themoviedb.org/3/movie/${moviesid}api_key=082f2526d129a66e53e595b94fce8985&language=en-US`;
        try {
            const result = await axios.get(address)
            setMovies(result.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMoviesInfo()
    }, [])

    return (
        <Container>
                <h1>{moviesid}</h1>
                <h2>
                    {movies.original_title}
                </h2>
        </Container>
    );
};

export default MoviesDetail;