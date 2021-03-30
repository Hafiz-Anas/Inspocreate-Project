import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api-dev.inspocreate.com/',
});

export default instance;
