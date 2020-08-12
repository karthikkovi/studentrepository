import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';

const StudentFormReview = ({ onCancel, formValues }) => {
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
			<button className='red darken-1 btn-flat' onClick={onCancel}>
				Back
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.studentForm.values };
}

export default connect(mapStateToProps)(StudentFormReview);
