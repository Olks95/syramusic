import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<>
			<ul className="Nav-bar">
				<Link className="Nav-link" to="/">
					<li>Home</li>
				</Link>
				<Link className="Nav-link" to="/releases">
					<li>Releases</li>
				</Link>
				<Link className="Nav-link" to="/shows">
					<li>Shows</li>
				</Link>
				<Link className="Nav-link" to="/contact">
					<li>Contact</li>
				</Link>
			</ul>
		</>
	)
}

export default Nav