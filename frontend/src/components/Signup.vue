<template>
  <div id="signup">
    <h1>Inscription</h1>
    <form id="signup-form" @submit.prevent>
      <label for="email">Email :</label>
      <input type="email" name="email" v-model="email">
      <label for="password">Mot de passe :</label>
      <input type="password" name="password" v-model="password">
      <label for="lastName">Nom :</label>
      <input type="text" name="lastName" v-model="lastName">
      <label for="firstName">Prénom :</label>
      <input type="text" name="firstName" v-model="firstName">
      <button @click="getSignup()">S'inscrire</button>
      <br>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// import UserServices from '../services/UserServices'

export default {
  data() {
    return {
      email: '',
      password: '',
      lastName: '',
      firstName: ''
    }
  },
  methods: {
    getSignup() {
      axios.post('http://localhost:3000/auth/signup', {
        email: this.email,
        password: this.password,
        lastName: this.lastName,
        firstName: this.firstName
      })
      .then(() => {
        axios.post('http://localhost:3000/auth/login', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem('token', res.data.token);
          window.location = '/#/about';
        })
        .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style>
#signup {
  border: 1px solid red;
  border-radius: 20px;
  max-width: 550px;
  margin: auto;
}

#signup-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-content: center;
  margin: auto;
}

button {
  margin: auto;
}
</style>