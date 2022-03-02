<template>
  <div id="login" class="home-component">
    <form id="login-form" class="home-form" @submit.prevent="getLogin()">
      <div class="form-item">
        <label for="email">Email :</label>
        <input type="email" name="email" id="email" v-model="email" required>
      </div>
      <div class="form-item">
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password" v-model="password" required minlength="4">
      </div>
      <span class="error">{{ this.error }}</span>
      <input type="submit" class="form-submit" value="Se connecter" />
    </form>
  </div>
</template>

<script>
import UserServices from '../services/UserServices'

export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
    }
  },
  methods: {
    getLogin () {
      UserServices.login(this.email, this.password)
      .catch(() => { 
        return this.error = 'Email ou mot de passe incorrect'
      })
    }
  }
}
</script>

<style>

</style>