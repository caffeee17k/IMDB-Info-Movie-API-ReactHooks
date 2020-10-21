import React, { useState } from 'react';

import './Home.css';

import api from '../services/api';

export default function Home() {
    const [searchMovie, setSearchMovie] = useState([]);
    const [movies, setMovies] = useState([]);

    // Função é disparada ao receber um submit do form
    async function handleSubmit(e) {
        e.preventDefault();

        // console.log(searchMovie);

        //request api via req.query 
        // const response = await api.get(`/?searchMovie=${searchMovie}`);

        const response = await api.post('/', {
            searchMovie,
        }).then(res => {
            setMovies(res.data)
            
        });

        //  movies = response.data.Search;
        console.log(response.data);
        console.log(movies);
        //history.push('/movie');
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <h1>InfoMovie</h1>
                <input
                    placeholder="Digite aqui o nome do filme..."
                    value={searchMovie}
                    //Recebe o evento do input
                    onChange={e => setSearchMovie(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </form>
            
            <main>
                <h1>
                {/* {movies.map()} */}
                </h1>
                
            </main>
        </div>
    );
}

