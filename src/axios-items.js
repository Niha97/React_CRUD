import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://reacttodo-b142d.firebaseio.com/'

});

export default instance;