import axios from 'axios';

const baseUrl = 'http://localhost:3000/commentaries';

export default {
    getOneCommentary(commentaryId) {
        return axios.get(`${baseUrl}/one/${commentaryId}`, {
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
        })
    },
    updateCommentary(commentaryId, description) {
        return axios.put(`${baseUrl}/${commentaryId}`, { 
            description: description
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
    },
    deleteCommentary(CommentaryId) {
        return axios.delete(`${baseUrl}/${CommentaryId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}