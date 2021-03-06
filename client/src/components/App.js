import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import StudentNew from './students/StudentNew';
import Dashboard from './Dashboard';

import '../App.css';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<BrowserRouter>
				<div className='container'>
					<Header />
					<Route exact path='/' component={Landing} />
					<Route exact path='/students' component={Dashboard} />
					<Route path='/students/new' component={StudentNew} />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
