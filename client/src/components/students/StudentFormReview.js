import React from 'react';
import _ from 'lodash';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';

const StudentFormReview = ({
	onCancel,
	formValues,
	submitStudent,
	history,
}) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label> {label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5> Please confirm your entries </h5>
			{reviewFields}
			<button
				className='red darken-1 white-text btn-flat'
				onClick={onCancel}>
				Back
			</button>
			<button
				onClick={() => submitStudent(formValues, history)}
				className='green right white-text darken-1 btn-flat'>
				Create Student Profile
				<i className='material-icons right'>done</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.studentForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(StudentFormReview));
