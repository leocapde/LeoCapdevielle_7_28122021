import axios from 'axios';
import FormData from 'form-data';

const baseUrl = 'http://localhost:3000/publications';

export default {
    getAllPublications() {
        return axios.get(`${baseUrl}/`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    getAllUserPublications(userId) {
        return axios.get(`${baseUrl}/${userId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    getOnePublication(publicationId) {
        return axios.get(`${baseUrl}/update/${publicationId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    postPublication(description, image) {
        const formData  = new FormData()
        formData.append('description', JSON.stringify(description))
        formData.append('image', image)
        return axios.post(`${baseUrl}/`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data; boundary=MyBoundary'
            },
        })
    },
    updatePublication(publicationId, description, image) {
        const formData  = new FormData()
        formData.append('description', JSON.stringify(description))
        formData.append('image', image)
        return axios.put(`${baseUrl}/${publicationId}`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data; boundary=MyBoundary'
            },
        })
    },
    deletePublication(publicationId) {
        return axios.delete(`${baseUrl}/${publicationId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}