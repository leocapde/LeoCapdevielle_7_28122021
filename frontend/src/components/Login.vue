<template>
  <div id="login">
    <h1>Connection</h1>
    <form id="login-form" @submit.prevent>
      <label for="email">Email :</label>
      <input type="email" name="email" v-model="email">
      <label for="password">Mot de passe :</label>
      <input type="password" name="password" v-model="password">
      <button @click="getLogin()">Se connecter</button>
      <br>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    getLogin () {
      axios.post('http://localhost:3000/auth/login', {
        email: this.email,
        password: this.password
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        window.location = '/#/about';
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style>
#login {
  border: 1px solid blue;
  border-radius: 20px;
  max-width: 550px;
  margin: auto;
}

#login-form {
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