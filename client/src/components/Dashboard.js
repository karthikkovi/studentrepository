import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			Dashboard
			<div className='row'>
				<div className='col s8 fixed-action-btn'>
					<h1>School Name</h1>
					<h4> About </h4>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<Link
						to='/students/new'
						className='btn-floating btn-large red'>
						<i className='material-icons'>add</i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
