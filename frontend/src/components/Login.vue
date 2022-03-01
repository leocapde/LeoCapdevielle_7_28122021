<template>
  <div id="login">
    <!-- <h1>Connection</h1> -->
    <form id="login-form" @submit.prevent="getLogin()">
      <label for="email">Email :</label>
      <input type="email" name="email" v-model="email">
      <label for="password">Mot de passe :</label>
      <input type="password" name="password" v-model="password">
      <button type="submit" id="login-button">Se connecter</button>
      <br>
    </form>
  </div>
</template>

<script>
import UserServices from '../services/UserServices'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    getLogin () {
      UserServices.login(this.email, this.password)
    }
  }
}
</script>

<style>
#login {
  border: 2px solid black;
  border-radius: 0 0 20px 20px;
  background: #EFEFEF;
  max-width: 550px;
  margin: auto;
  padding: 30px 10px 0;
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