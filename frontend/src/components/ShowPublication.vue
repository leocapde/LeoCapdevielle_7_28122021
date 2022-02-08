<template>
    <div id="show_publications">
        <div class="publication" v-for="publication in publicationList" :key="publication.id">
            <p>{{ publication.UserId }}</p>
            <h4> <!-- Imposible de récupérer précisemment les infos dans l'objet publication.User -->
                {{ publication.User }}
            </h4>
            <p>{{ publication.description }}</p>
            <p>{{ publication.createdAt }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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