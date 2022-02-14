<template>
    <div id="about">
        <AboutHeader />

        <div id="about_body">
            <PostPublication v-if="!userProfil" />
            <Profil v-else :profilId="userProfil"/>

            <ShowPublication :profilId="userProfil" />
        </div>
    </div>
</template>

<script>
import AboutHeader from '../components/AboutHeader.vue'
import PostPublication from '../components/PostPublication.vue'
import ShowPublication from '../components/ShowPublication.vue'
import Profil from '../components/Profil.vue'

import { mapState } from 'vuex'

export default {
    name: 'About',
    components: {
        AboutHeader,
        PostPublication,
        ShowPublication,
        Profil,
    },
    computed: {
        ...mapState({
            userProfil: 'userProfil'
        })
    }
}
</script>

<style>
#about_body {
    max-width: 500px;
    margin: auto;
}
</style>