import ReactLogo from './assets/react.svg?react';
import './index.css';

// Всё это декларативный стиль
export const App = () => {
	let currentYear = new Date().getFullYear(); // И только это мперативный стиль
	return (
		<div className="App">
			<header className="App-header">
				<ReactLogo />
				<p>
					Edit <code>src/App.js</code> and save to reload. 22
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{currentYear}</p>
			</header>
		</div>
	);
};
