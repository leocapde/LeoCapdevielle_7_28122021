import axios from 'axios';
import FormData from 'form-data';

const baseUrl = 'http://localhost:3000/auth';

export default {
    login(email, password) {
        return axios.post(`${baseUrl}/login`, {
            email: email,
            password: password
        })
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);
            localStorage.setItem('isAdmin', res.data.isAdmin)
            window.location = '/#/about';
          })
        .catch(error => console.log(error))
    },
    signup(email, password, lastName, firstName) {
        return axios.post(`${baseUrl}/signup`, {
            email: email,
            password: password,
            lastName: lastName,
            firstName: firstName
        })
        .then(() => this.login(email, password))
        .catch(error => console.log(error))
    },
    signout() {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('isAdmin')
        window.location = '../'
    },
    getOneUser(userIdProfil) {
        return axios.get(`${baseUrl}/${userIdProfil}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    modifyUser(userId, user, image) {
        const formData = new FormData()
        formData.append('user', JSON.stringify(user))
        formData.append('image', image)
        return axios.put(`${baseUrl}/${userId}`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data; boundary=MyBoundary'
            }
        })
    },
    deleteUser(userId) {
        return axios.delete(`${baseUrl}/${userId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}