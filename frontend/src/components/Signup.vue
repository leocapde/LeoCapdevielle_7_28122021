<template>
  <div id="signup">
    <!-- <h1>Inscription</h1> -->
    <form id="signup-form" @submit.prevent="getSignup()">
      <label for="email">Email :</label>
      <input type="email" name="email" v-model="email">
      <label for="password">Mot de passe :</label>
      <input type="password" name="password" v-model="password">
      <label for="lastName">Nom :</label>
      <input type="text" name="lastName" v-model="lastName">
      <label for="firstName">Prénom :</label>
      <input type="text" name="firstName" v-model="firstName">
      <button id="login-button" type="submit">S'inscrire</button>
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
      password: '',
      lastName: '',
      firstName: ''
    }
  },
  methods: {
    getSignup() {
      UserServices.signup(this.email, this.password, this.lastName, this.firstName);
    }
  }
}
</script>

<style>
#signup {
  border: 2px solid black;
  border-radius: 0 0 20px 20px;
  background: #EFEFEF;
  max-width: 550px;
  margin: auto;
  padding: 30px 10px 0;
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