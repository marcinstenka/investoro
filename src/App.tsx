import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import AdvertisementDetails from './pages/AdvertisementDetails.tsx';
import NotFound from './pages/NotFound.tsx';
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';

function App() {
	return (
		<>
			<HashRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/advertisement/:id' element={<AdvertisementDetails />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
