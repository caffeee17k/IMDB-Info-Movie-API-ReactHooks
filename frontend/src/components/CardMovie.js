import React from 'react';
import { Link } from 'react-router-dom';

import { FiHeart } from 'react-icons/fi'

import './CardMovie.css';
import imdb from '../assets/imdb.svg'

const CardMovie = ({ getMovie }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mt-4">
                    <h2 className="mb-4" class="alert alert-dark" role="alert">{getMovie.Title}</h2>
                    <ul className="list-group border-light">
                        <li className="list-group-item border-light">
                            <strong>Gênero:</strong> {getMovie.Genre}
                        </li>
                        <li className="list-group-item border-light">
                            <strong>Ano:</strong> {getMovie.Year}
                        </li>
                        <li className="list-group-item border-light">
                            <strong>Avaliado:</strong> {getMovie.Rated}
                        </li>
                        <li className="list-group-item border-light">
                            <strong>Linguagem:</strong> {getMovie.Language}
                        </li>
                        <li className="list-group-item border-light">
                            <strong>Direção:</strong> {getMovie.Director}
                        </li>
                        <li className="list-group-item border-light">
                            <strong>Escritores:</strong> {getMovie.Writer}
                        </li>
                        <li className="list-group-item border-light">
                            <strong>Atores:</strong> {getMovie.Actors}
                        </li>
                        <li className="list-group-item border-light">
                            <strong>Duração do Filme:</strong> {getMovie.Runtime}
                        </li>
                        <li className="list-group-item border-light">
                            <img className="imdb" src={imdb} alt="imdb"/>
                            <strong>Avaliação IMDB:</strong> {getMovie.imdbRating}
                        </li>
                    </ul>
                </div>
                <div className="img-card card card-body col-md-4 border-light">
                    <img src={getMovie.Poster} className="thumbnail" alt="Poster" />
                    <button type="button" class="btn btn-outline-danger border-light">
                        <FiHeart size={25} className="mr-3" />
                        Adicionar aos Favoritos
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="more-footer card card-body border-light bg-dark my-5 text-white">
                    <div className="col-md-12">
                        <h3>Sobre</h3>
                        {getMovie.Plot}
                        <hr />
                        <a
                            href={'https://www.imdb.com/title/' + getMovie.imdbID}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Veja no IMDB
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