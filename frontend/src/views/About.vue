<template>
    <div id="about">
        <AboutHeader />

        <div id="about_body">
            <PostPublication v-if="!profilId" />
            <Profil v-else :profilId="profilId"/>
            <ProfilModification v-if="profilModification" :profilId="profilId" />

            <ShowPublication :profilId="profilId" />
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
            profilModification: 'profilModification'
        })
    }
}
</script>

<style>
#about_body {
    max-width: 650px;
    margin: auto;
}
</style>