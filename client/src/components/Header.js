import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Students from './NewStudent';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return null;
			case false:
				return (
					<li>
						<a href='/auth/google'>Login</a>
					</li>
				);
			default:
				return [
					<li key='1'>
						<a href='/api/logout'>Logout</a>
					</li>,
				];
		}
	}

	render() {
		return (
			<nav>
				<div className='col s10 nav-wrapper'>
					<Link
						to={this.props.auth ? '/students' : '/'}
						className='left brand-logo'>
						My School
					</Link>
					<ul id='nav-mobile' className='right'>
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
