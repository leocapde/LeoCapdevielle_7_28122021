<template>
    <div id="home">
        <div id="home-header">
            <img id="logo" alt="Vue logo" src="../assets/icon.png">
            <h1>Bienvenu sur votre réseau social Groupomania !</h1>
        </div>
        
        <div id="home-body">
            <nav id="home-nav">
                <button id="login-nav" class="active" @click="homeModeLogin()">Se connecter</button>
                <button id="signup-nav" @click="homeModeSignup()">S'inscrire</button>
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
            document.getElementById('login-nav').classList.add('active')
            document.getElementById('signup-nav').classList.remove('active')
        },
        homeModeSignup() {
            this.$store.dispatch('setHomeMode', 'signup')
            document.getElementById('signup-nav').classList.add('active')
            document.getElementById('login-nav').classList.remove('active')
        }
    }
}
</script>

<style>
#home-header {
    margin-top: 25px;
    margin-bottom: 50px;
}

#logo {
  max-height: 225px;
}

#home-body {
    max-width: 500px;
    margin: auto;
}

#home-nav button {
    padding: 15px;
    width: 50%;
    font-size: 1.2rem;
}

#home-nav button.active {
    background: #FFD7D7;
}

#home-nav button:hover {
    font-weight: bold;
}

#login-nav {
    border-radius: 20px 0 0 0;
}

#signup-nav {
    border-radius: 0 20px 0 0;
}

#login-button {
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    background: #FFD7D7;
}

#login-button:hover {
    font-weight: bold;
}
</style>