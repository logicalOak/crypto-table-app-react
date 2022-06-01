import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cryptoAsyncThunk } from '../features/cryptoSlice';
import { DetailPage, HomePage } from './pages';
import { Footer, Header } from './layout';
import { Toaster } from 'react-hot-toast';

const Main = () => {
	// 🍀HOOKS & VARIABLES:
	const dispatch = useDispatch();

	// 🍀 EFFECTS:
	useEffect(() => {
		dispatch(cryptoAsyncThunk.fetchCoins());
	}, []);

	// 🍀 RENDER:
	return (
		<Router>
			<div className='flex flex-col min-h-screen bg-slate-100'>
				<Header />
				<main className='container mx-auto max-w-6xl px-2 py-4'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/coins/:id' element={<DetailPage />} />
					</Routes>
				</main>
				<Toaster position='bottom-right' />
				<Footer />
			</div>
		</Router>
	);
};

export default Main;
