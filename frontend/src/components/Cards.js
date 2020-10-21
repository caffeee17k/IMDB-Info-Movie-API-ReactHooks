import React from 'react';

import './Cards.css';

const Cards = ({ movie }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
                <div className="card-body">
                    <h3>{movie.Title}</h3>
                    <h4>Lançamento em: {movie.Year}</h4>
                </div>
            </div>
        </div>
    )
}

export default Cards;