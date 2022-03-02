<template>
    <div id="home">
        <div id="home_header">
            <img id="home_header-logo" alt="Groupomania logo" src="../assets/icon.png">
            <h1>Bienvenu sur votre réseau social Groupomania !</h1>
        </div>
        
        <div id="home_body">
            <nav id="home_body-nav">
                <div id="home_body-nav--login" class="switch active" @click="homeModeLogin()">Se connecter</div>
                <div id="home_body-nav--signup" class="switch" @click="homeModeSignup()">S'inscrire</div>
            </nav>
            
            <Login v-if="getHomeMode == 'login'"/>
            <Signup v-else/>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import { mapState } from 'vuex';

export default {
    name: 'Home',
    components: {
        Login,
        Signup
    },
    computed: {
        ...mapState({
            getHomeMode: 'homeMode',
        }),
    },
    methods: {
        homeModeLogin() {
            this.$store.dispatch('setHomeMode', 'login')
            document.getElementById('home_body-nav--login').classList.add('active')
            document.getElementById('home_body-nav--signup').classList.remove('active')
        },
        homeModeSignup() {
            this.$store.dispatch('setHomeMode', 'signup')
            document.getElementById('home_body-nav--signup').classList.add('active')
            document.getElementById('home_body-nav--login').classList.remove('active')
        }
    }
}
</script>

<style>
#home_header {
    margin-top: 25px;
    margin-bottom: 50px;
}

#home_header-logo {
  max-height: 225px;
}

#home_body {
    max-width: 500px;
    background: white;
    border-radius: 20px;
    box-shadow: 2px 2px 10px;
    margin: auto;
}

#home_body-nav {
    display: flex;
    border-radius: 20px;
    box-shadow: 0px 2px 2px;
    background: #FFD7D7;
}

#home_body-nav .switch {
    padding: 15px;
    width: 50%;
    font-size: 1.1rem;
    cursor: pointer;
}

#home_body-nav .switch.active {
    background: #BA4D55;
    font-weight: bold;
    color: white;
    font-size: 1.3rem;
}

#home_body-nav .switch:hover {
    font-weight: bold;
    box-shadow: 0 2px 2px black;
}

#home_body-nav--login {
    border-radius: 20px 0 0 20px;
}

#home_body-nav--signup {
    border-radius: 0 20px 20px 0;
}

.home-component {
  border-radius: 0 0 20px 20px;
  max-width: 550px;
  margin: auto;
  padding: 10px;
}

.home-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-content: center;
  margin: auto;
}

.form-item {
    display: flex;
    flex-direction: column;
    margin: 5px 0;
}

.form-item label {
    text-align: start;
    margin: 0 10px;
}

.form-item input {
    margin: 0;
    border-radius: 20px;
    padding: 5px 10px;
}

/* .form-item input:optional {
    background: lightgreen;
} */

.home-form label {
    font-weight: bold;
}

.error {
    color: red;
    font-weight: bold;
}

.form-submit {
    border: none;
    margin: 10px auto;
    padding: 15px;
    border-radius: 20px;
    background: #BA4D55;
    color: white;
    font-size: 0.9rem;
    box-shadow: 0 2px 2px black;
    cursor: pointer;
}

.form-submit:hover {
    font-weight: bold;
    background: #FFD7D7;
    color: #091F43;
    box-shadow: 0 4px 4px black;
}

.form-submit:active {
    transform: translateY(4px);
    box-shadow: 0 2px 2px black;
}
</style>