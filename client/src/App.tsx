import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Player from './components/player/Player';
import AppRouter from './components/utils/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
            <Player />
        </BrowserRouter>
    );
}

export default App;