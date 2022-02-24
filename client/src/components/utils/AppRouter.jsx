import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage';
import TrackList from '../tracks/TrackList';

const AppRouter = () => {
	// const baseURL = 'http://localhost:3000/';

	return (
		<Routes>
			<Route
				element={<MainPage />}
				path='/'
			/>

			<Route
				element={<TrackList />}
				path='/tracks'
			/>
		</Routes>
	);
};

export default AppRouter;