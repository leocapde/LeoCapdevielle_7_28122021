<template>
    <div id="show_publications">
        <div class="publication" v-for="publication in publicationList" :key="publication.id">
            <h4>{{ publication.User.firstName }} {{ publication.User.lastName }}</h4>
            <p>{{ publication.description }}</p>
            <p>{{ publication.createdAt }}</p>
            <Commentaries :commentaries="publication.Commentaries" :publicationId="publication.id"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Commentaries from '../components/Commentaries.vue'


export default {
    components: {
        Commentaries
    },
    mounted() {
        this.$store.dispatch('setPublicationList')
    },
    computed: {
        ...mapState({
            publicationList: 'publicationList',
        })
    }
}
</script>

<style>
.publication {
    border: 1px solid blue;
    border-radius: 20px;
    margin: 10px 0;
}
</style> 