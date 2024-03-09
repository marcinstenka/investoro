import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import AdvertisementDetails from './pages/AdvertisementDetails.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/advertisement/:id' element={<AdvertisementDetails/>} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
