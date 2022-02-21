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
            localStorage.setItem('userId', res.data.userId);
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
    getOneUser(userIdProfil) {
        return axios.get(`${baseUrl}/${userIdProfil}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    },
    modifyUser(userId, email, password, lastName, firstName, imageUrl, age, job, description) {
        return axios.put(`${baseUrl}/${userId}`, {
            email: email,
            password: password,
            lastName: lastName,
            firstName: firstName,
            imageUrl: imageUrl,
            age: age,
            job: job,
            description: description
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}