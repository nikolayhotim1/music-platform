import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import TrackList from './components/tracks/TrackList';
import AppRouter from './components/utils/AppRouter';

function App() {
    // const baseURL = 'http://localhost:3000/';

    return (
        <BrowserRouter>
            <Navbar />
            {/* <Routes>
                <Route
                    element={<MainPage />}
                    path='/'
                />

                <Route
                    element={<TrackList />}
                    path='/tracks'
                />
            </Routes> */}
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;