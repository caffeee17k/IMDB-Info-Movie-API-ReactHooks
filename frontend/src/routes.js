import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';


export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:id" component={Movie} />
        </BrowserRouter>
    );
}