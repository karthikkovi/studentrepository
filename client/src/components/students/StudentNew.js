import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import StudentForm from './StudentForm';
import StudentFormReview from './StudentFormReview';

class StudentNew extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<StudentFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<StudentForm
				onStudentSubmit={() =>
					this.setState({
						showFormReview: true,
					})
				}
			/>
		);
	}

	render() {
		return <div className='col s8'>{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'studentForm',
})(StudentNew);
