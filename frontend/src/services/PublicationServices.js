import axios from 'axios';

const baseUrl = 'http://localhost:3000/publications';

export default {
    getAllPublications() {
        return axios.get(`${baseUrl}/`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    postPublication(description) {
        return axios.post(`${baseUrl}/`, { 
            description: description 
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        } )
    }
}