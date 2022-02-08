<template>
    <div id="show_publications">
        <div class="publication" v-for="publication in publicationList" :key="publication.id">
            <!-- <div v-for="user in userList" :key="user.id">
                <h4  v-if="publication.userId == user.id">
                    {{ user.firstName }} {{ user.lastName }}
                </h4>
            </div> -->
            <h4>{{ publication.userId }}</h4>
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