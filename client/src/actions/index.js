import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitStudent = (values, history) => async (dispatch) => {
	const res = await axios.post('/api/students', values);

	history.push('/students');
	dispatch({ type: FETCH_USER, payload: res.data });
};
