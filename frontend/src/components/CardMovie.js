import React from 'react';
import { Link } from 'react-router-dom';

import like from '../assets/like.svg';

const CardMovie = ({ getMovie }) => {

    return (
        <div className="container">
            <div className="row border-light">
                <div className="col-md-4 border-light card card-body">
                    <img src={getMovie.Poster} className="thumbnail" alt="Poster" />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-4">{getMovie.Title}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Genre:</strong> {getMovie.Genre}
                        </li>
                        <li className="list-group-item">
                            <strong>Released:</strong> {getMovie.Released}
                        </li>
                        <li className="list-group-item">
                            <strong>Rated:</strong> {getMovie.Rated}
                        </li>
                        <li className="list-group-item">
                            <strong>IMDB Rating:</strong> {getMovie.imdbRating}
                        </li>
                        <li className="list-group-item">
                            <strong>Director:</strong> {getMovie.Director}
                        </li>
                        <li className="list-group-item">
                            <strong>Writer:</strong> {getMovie.Writer}
                        </li>
                        <li className="list-group-item">
                            <strong>Actors:</strong> {getMovie.Actors}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="card card-body border-light bg-dark my-5 text-white">
                    <div className="col-md-12">
                        <h3>About </h3>
                        {getMovie.Plot}
                        <hr />
                        <a
                            href={'https://www.imdb.com/title/' + getMovie.imdbID}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View on IMDB
                        </a>
                        <Link to="/" className="btn btn-warning text-white">
                            Pesquisar Novamente
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMovie;