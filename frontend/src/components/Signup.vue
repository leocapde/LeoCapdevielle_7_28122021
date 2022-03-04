<template>
  <div id="signup" class="home-component">
    <form id="signup-form" class="home-form" @submit.prevent="getSignup()">
      <div class="form-item">
        <label for="email">Email :</label>
        <input type="email" name="email" id="email" v-model="email" required>
      </div>
      <div class="form-item">
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password" v-model="password" required minlength="4">
      </div>
      <div class="form-item">
        <label for="password-confirm">Confirmez le mot de passe :</label>
        <input type="password" name="password-confirm" id="password-confirm" v-model="passwordConfirm" required minlength="4">
      </div>
      <div class="form-item">
        <label for="lastName">Nom :</label>
        <input type="text" name="lastName" id="lastName" v-model="lastName" required minlength="2" maxlength="20">
      </div>
      <div class="form-item">
        <label for="firstName">Prénom :</label>
        <input type="text" name="firstName" id="firstName" v-model="firstName" required minlength="2" maxlength="20">
      </div>
      <span class="error">{{ this.error }}</span>
      <input type="submit" class="form-submit" value="S'inscrire" />
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
      passwordConfirm: null,
      lastName: null,
      firstName: null,
      error: null
    }
  },
  methods: {
    getSignup() {
      if (this.password != this.passwordConfirm) {
        return this.error = 'Le mot de passe doit être identique'
      } else {
        UserServices.signup(this.email, this.password, this.lastName, this.firstName)
        .catch(() => {
          return this.error = 'Cette adresse email est déjà utilisée'
        })
      }
    }
  }
}
</script>

<style>

</style>