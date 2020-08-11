import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<a href='/' className='brand-logo'>
						School
					</a>
					<ul id='nav-mobile' className='right'>
						<li>
							<a href='sass.html'>Login</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
