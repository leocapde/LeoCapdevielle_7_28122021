<template>
    <div id="about">
        <AboutHeader />

        <div id="about_body">
            <PostPublication v-if="!profilId" :key="changeKey +2" />
            <Profil v-else :profilId="profilId" :key="changeKey" />
            <ProfilModification v-if="profilModification" :profilId="profilId" />
            <ShowPublication :profilId="profilId" :key="changeKey +1" />
        </div>
    </div>
</template>

<script>
import AboutHeader from '../components/AboutHeader.vue'
import PostPublication from '../components/PostPublication.vue'
import ShowPublication from '../components/ShowPublication.vue'
import Profil from '../components/Profil.vue'
import ProfilModification from '../components/ProfilModification.vue'

import { mapState } from 'vuex'

export default {
    name: 'About',
    components: {
        AboutHeader,
        PostPublication,
        ShowPublication,
        Profil,
        ProfilModification
    },
    computed: {
        ...mapState({
            profilId: 'profilId',
            profilModification: 'profilModification',
            changeKey: 'changeKey'
        })
    },
    watch: {
        changeKey() {}
    }
}
</script>

<style>
#about_body {
    max-width: 750px;
    margin: auto;
}
</style>