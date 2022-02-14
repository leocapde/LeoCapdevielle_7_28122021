<template>
    <div id="show_publications">
        <div class="publication" v-for="publication in publicationList" :key="publication.id">
            <h4 @click="setUserProfil(publication.UserId)">{{ publication.User.firstName }} {{ publication.User.lastName }}</h4>
            <p>{{ publication.description }}</p>
            <!-- <p>{{ formateDate(publication.createdAt) }}</p> -->
            <p v-bind="formateDate(publication.createdAt)">{{ formatedDate }}</p>
            <Commentaries :commentaries="publication.Commentaries" :publicationId="publication.id"/>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Commentaries from '../components/Commentaries.vue'

// import moment from 'moment'

export default {
    components: {
        Commentaries
    },
    props: {
        profilId: {}
    },
    watch: {
        profilId() {
            if (this.profilId) {
                this.setUserPublicationList(this.profilId)
            } else {
                this.setPublicationList()
            }
        }
    },
    mounted() {
        this.setPublicationList()
    },
    computed: {
        ...mapState({
            publicationList: 'publicationList',
            formatedDate: 'formatedDate',
        })
    },
    methods: {
        // formateDate(date) {
        //     return moment(date).locale('fr').calendar()
        // },
        ...mapActions({
            setPublicationList: 'setPublicationList',
            setUserPublicationList: 'setUserPublicationList',
            formateDate: 'formateDate',
            setUserProfil: 'setUserProfil'
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

h4:hover {
    font-style: italic;
}
</style> 