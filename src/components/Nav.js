import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<>
			<ul className="Nav-bar Nav-left">
				<Link className="Nav-link" to="/">
					<li>Home</li>
				</Link>
				<Link className="Nav-link" to="/releases">
					<li>Releases</li>
				</Link>
			</ul>
			<ul className="Nav-bar Nav-right">
				<Link className="Nav-link" to="/shows">
					<li>Shows</li>
				</Link>
				<Link className="Nav-link" to="/contact">
					<li>Contact</li>
				</Link>
			</ul>
			<h1 className="App-logo">SYRA</h1>
		</>
	)
}

export default Nav