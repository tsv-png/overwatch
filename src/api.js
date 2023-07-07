import axios from 'axios';

const api = axios.create({
    baseURL: 'https://overfast-api.tekrop.fr'});
    

export default api;