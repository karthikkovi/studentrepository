import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import StudentField from './StudentField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import formFields from './formFields';

class StudentForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={StudentField}
					type='text'
					label={label}
					name={name}
				/>
			);
		});
	}
	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(
						this.props.onStudentSubmit
					)}>
					{this.renderFields()}
					<Link
						to='/students'
						className='red darken-1 btn-flat white'>
						Cancel
					</Link>
					<button
						className='teal btn-flat right white-text'
						type='submit'>
						Next <i className='material-icons right'>done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate({ studentid, name }) {
	const errors = {};

	if (!studentid) {
		errors.studentid = 'Provide Student ID';
	}
	if (!name) {
		errors.name = 'Provide Name';
	}
	return errors;
}

export default reduxForm({
	validate,
	form: 'studentForm',
	destroyOnUnmount: false,
})(StudentForm);
