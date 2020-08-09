import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Edit no way and save.</p>
				<a href='/auth/google'>Sign in</a>
			</header>
		</div>
	);
}

export default App;
