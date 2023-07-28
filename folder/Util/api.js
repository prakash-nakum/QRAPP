// api.js
import axios from 'axios';

const baseURL = process.env.baseURL
const apiInstance = axios.create({
    baseURL: baseURL, // Set your API base URL here
    // You can add other default configurations here, such as headers, authentication tokens, etc.
});

export default apiInstance;
