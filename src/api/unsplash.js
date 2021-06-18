import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xSP0mV0aqSgWLDVEZNZz0BRUzYxCXOBpwFhepgG7G24'
}
});