import React, { useState } from 'react';

import './Home.css';

import api from '../services/api';

export default function Home() {
    const [searchMovie, setSearchMovie] = useState('');

    // Função é disparada ao receber um submit do form
    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await api.get
        console.log(searchMovie)
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
        </div>
    );
}
 
