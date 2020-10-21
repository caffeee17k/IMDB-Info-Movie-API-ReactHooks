import React, { useState } from 'react';

import './Home.css';

import api from '../services/api';
import Cards from '../components/Cards';

export default function Home() {
    const [searchMovie, setSearchMovie] = useState([]);
    const [movies, setMovies] = useState([]);

    // Função é disparada ao receber um submit do form
    async function handleSubmit(e) {
        e.preventDefault();

        // console.log(searchMovie);

        //request api via req.query 
        api.get(`/?searchMovie=${searchMovie}`)
            .then(res => {
                setMovies(res.data.Search)
                console.log(movies)
            })

        //request api via req.body
        // const response = await api.post('/', {
        //     searchMovie,
        // });


        //  movies = response.data.Search;
        // console.log(response.data);

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
            {/* chamada do Card */}
            <div className="row">
                {movies.map((movie, index) => (

                    <Cards movie={movie} index={index} />

                ))}
            </div>

            {/* <main className="row">
                Buscas com o map()
                <ul className="list-group">
                    {movies.map((movie, index) => (
                        <li key={index} className="list-group-item">
                            {movie.Title}
                        </li>
                    ))}
                </ul>
                <ul className="list-group">
                    {movies.map((movie, index) => (
                        <li key={index} className="list-group-item">
                            <Cards movie={movie} />
                        </li>
                    ))}
                </ul>
            </main> */}
        </div>
    );
}

