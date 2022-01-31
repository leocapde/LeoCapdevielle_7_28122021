import axios from 'axios';

const baseUrl = 'http://localhost:3000/auth';

export default {
    login(email, password) {
        return axios.post(`${baseUrl}/login`, {
            email: email,
            password: password
        })
        .then(res => {
            localStorage.setItem('token', res.data.token);
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
        localStorage.removeItem('token');
        window.location = '../'
    },
    getUser() {
        return axios.get(`${baseUrl}/`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}