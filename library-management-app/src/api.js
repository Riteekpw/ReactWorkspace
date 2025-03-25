import axios from 'axios';
 
const api = axios.create({
baseURL: 'http://localhost:7247', 
});
 
export default api;