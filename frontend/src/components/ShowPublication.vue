<template>
    <div id="show_publications">
        <div class="publication" v-for="publication in publicationList" :key="publication.id">
            <div class="publication-header">
                <div class="publication-header_name" @click="setUserProfil(publication.UserId)">{{ publication.User.firstName }} {{ publication.User.lastName }}</div>
                <!-- <div class="publication-header_date">{{ formateDate(publication.createdAt) }}</div> -->
                <div class="publication-header_date" v-bind="formateDate(publication.createdAt)">{{ formatedDate }}</div>
            </div>
            <div class="publication-body">
                <div class="publication-body_description">{{ publication.description }}</div>
                <Commentaries :commentaries="publication.Commentaries" :publicationId="publication.id"/>
            </div>
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
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px 0;
    background: white;
    box-shadow: 2px 2px 10px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
}

.publication-header {
    width: 100%;
    padding: 10px;
    text-align: start;
}

.publication-header_name {
    font-weight: bold;
    font-size: 1.1rem;
    width: fit-content;
}

.publication-header_name:hover {
    color: #BA4D55;
}

.publication-header_date {
    font-size: 0.8rem;
}

.publication-body {
    border-radius: 20px;
    background: lightblue;
    width: 100%;
}

.publication-body_description {
    padding: 10px;
    margin: 20px 10px;
    border-radius: 20px;
    background: lightcyan;
    text-align: start;
    box-shadow: 2px 2px 10px;
}
</style> 