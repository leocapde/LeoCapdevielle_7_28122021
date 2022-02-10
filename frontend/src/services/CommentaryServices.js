import axios from 'axios';

const baseUrl = 'http://localhost:3000/commentaries';

export default {
    getAllCommentaries() {
        return axios.get(`${baseUrl}/`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    postCommentary(description, publicationId) {
        return axios.post(`${baseUrl}/`, { 
            description: description,
            publicationId: publicationId 
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        } )
    }
}