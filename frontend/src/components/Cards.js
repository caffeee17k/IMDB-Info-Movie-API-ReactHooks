import React from 'react';
import { useHistory } from 'react-router-dom';

import './Cards.css';

const Cards = ({ movie }) => {
    //Redireciona a rota 
    const history = useHistory();
    const handleClick = () => {
        history.push(`/movie/${movie.imdbID}`);
        // console.log(movie);
    }

    return (
        <div className="col-md-4" >
            <div className="card" >
                <ul>
                    <li>
                        <img src={movie.Poster}
                            alt={movie.Title}
                            className="card-img-top"
                            onClick={handleClick}
                        />
                        <div className="card-body" >
                            <h3> {movie.Title} </h3>
                            <h4> Lançamento em: {movie.Year} </h4>
                            <button onClick={handleClick}>Mais detalhes...</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Cards;