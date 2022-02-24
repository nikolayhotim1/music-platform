import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../main_page/MainPage';
import CreateTrack from '../tracks/create_track/CreateTrack';
import TrackPage from '../tracks/TrackPage';

function AppRouter() {
    return (
        <Routes>
            <Route
                element={<MainPage />}
                path='/'
            />
            <Route
                element={<TrackPage />}
                path='/tracks'
            />
            <Route
                element={<CreateTrack />}
                path='/tracks/create'
            />
        </Routes>
    );
};

export default AppRouter;