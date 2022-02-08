<template>
    <div id="about">
        <AboutHeader />

        <div id="about_body">
            <PostPublication v-show="getAboutMode == 'publication'" />
            <ShowPublication v-show="getAboutMode == 'publication'" />

            <Profil v-show="getAboutMode == 'profil'" />
            <ProfilPublication v-show="getAboutMode == 'profil'" />
        </div>
    </div>
</template>

<script>
import AboutHeader from '../components/AboutHeader.vue'
import PostPublication from '../components/PostPublication.vue'
import ShowPublication from '../components/ShowPublication.vue'
import Profil from '../components/Profil.vue'
import ProfilPublication from '../components/ProfilPublication.vue'

import { mapState } from 'vuex'

export default {
    name: 'About',
    components: {
        AboutHeader,
        PostPublication,
        ShowPublication,
        Profil,
        ProfilPublication
    },
    computed: {
        ...mapState({
            getAboutMode: 'aboutMode',
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