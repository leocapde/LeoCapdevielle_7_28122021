<template>
    <div id="about">
        <AboutHeader />

        <div id="about_body">
            <PostPublication v-show="getAboutMode == 'publication'" />
            <ShowPublication v-show="getAboutMode == 'publication'" v-for="news in getPublications()" :key="news.id" :newsId="news.id"/>

            <Profil v-show="getAboutMode == 'profil'" />
        </div>
    </div>
</template>

<script>
import AboutHeader from '../components/AboutHeader.vue'
import PostPublication from '../components/PostPublication.vue'
import ShowPublication from '../components/ShowPublication.vue'
import Profil from '../components/Profil.vue'

import PublicationServices from '../services/PublicationServices'

import { mapState } from 'vuex'

export default {
    name: 'About',
    components: {
        AboutHeader,
        PostPublication,
        ShowPublication,
        Profil
    },
    computed: {
        ...mapState({
            getAboutMode: 'aboutMode',
        })
    },
    methods: {
        async getPublications() {
            await PublicationServices.getAllPublications()
        }
    }
}
</script>

<style>
#about_body {
    max-width: 500px;
    margin: auto;
}
</style>