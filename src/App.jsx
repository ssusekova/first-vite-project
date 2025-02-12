import { createElement } from 'react';
import ReactLogo from './assets/react.svg?react';
import './index.css';

export const App = () => {
	const currentYear = new Date().getFullYear();
	const $appRootElement = createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement(ReactLogo),
			createElement(
				'p',
				{},
				'Edit ',
				createElement('code', {}, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', {}, currentYear),
		),
	);
	return $appRootElement;
};
