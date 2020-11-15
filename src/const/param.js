let API_ROUTE

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    API_ROUTE = 'http://localhost:5000/'
} else {
    API_ROUTE = 'https://search-job-tool-api.herokuapp.com/'
}

export default API_ROUTE