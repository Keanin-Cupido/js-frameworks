import { render } from 'preact';
import { useState } from 'preact/hooks';

import preactLogo from './assets/preact.svg';
import './style.css';

export function App() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	const timer = setInterval(() => {
		setTime(new Date().toLocaleTimeString());
	}, 1000);

	return (
		<span>{time}</span>
	);
}

render(<App />, document.getElementById('app'));
