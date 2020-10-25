import React, { useState, useEffect } from 'react';

import api from '../services/api';
import './Movie.css';

import CardMovie from '../components/CardMovie';

export default function Movie({ match }) {
    // console.log(match);
    const [getMovie, setGetMovie] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
            await api.get(`/movie/?getMovie=${match.params.id}`)
                .then(res => {
                    console.log(res.data);
                    setGetMovie(res.data);
                    //setLoading(false)
                })
            // console.log('movie', match.params.id);
        }
        fetchMovie();
    }, [match.params.id])

    return (
        <div>
            {/* Teste dos dados em tela */}
            {/* {JSON.stringify(getMovie)} */}
            
            <>            
                <CardMovie getMovie={getMovie}/>                
            </>
        </div>
    )

}