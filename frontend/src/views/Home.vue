<template>
    <div id="home">
        <img id="logo" alt="Vue logo" src="../assets/icon.png">
        <h1>Bienvenu sur votre réseau social Groupomania !</h1>

        <nav id="nav">
            <button @click="homeModeLogin()">Se connecter</button> -- 
            <button @click="homeModeSignup()">S'inscrire</button>
        </nav>
        <Login v-if="getHomeMode == 'login'"/>
        <Signup v-else/>
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
        },
        homeModeSignup() {
            this.$store.dispatch('setHomeMode', 'signup')
        }
    }
}


</script>