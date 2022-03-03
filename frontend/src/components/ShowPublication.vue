<template>
    <div id="show_publications">
        <div class="publication" v-for="publication in publicationList" :key="publication.id">
            <div class="publication-header">
                <div class="publication-header_user">
                    <img alt="photo de profil" :src="publication.User.imageUrl" v-if="publication.User.imageUrl">
                    <img alt="photo de profil" src="../assets/icon.png" v-else >
                    <div class="publication-header_user-infos">
                        <div class="publication-header_user-name" @click="setProfilId(publication.UserId)">
                            {{ publication.User.firstName }} {{ publication.User.lastName }}
                            <font-awesome-icon id="admin-icon" icon="fa-solid fa-shield" v-if="publication.User.isAdmin" />
                        </div>
                        <div class="publication-header_user-date">{{ publication.createdAt | formatDate }}</div>
                    </div>
                </div>
                <div class="publication-header_option">
                    <OptionButtons :userId="publication.UserId" :publicationId="publication.id" />
                </div>
            </div>
            <div class="publication-body">
                <div class="publication-body_description">{{ publication.description }}</div>
                <img id="show_image" :src="publication.fileUrl" v-if="publication.fileUrl" >
                <Commentaries :commentaries="publication.Commentaries" :publicationId="publication.id"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Commentaries from '../components/Commentaries.vue'
import OptionButtons from '../components/OptionButtons.vue'

export default {
    components: {
        Commentaries,
        OptionButtons
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
        if (this.profilId) {
            this.setUserPublicationList(this.profilId)
        } else {
            this.setPublicationList()
        }
    },
    computed: {
        ...mapState({
            publicationList: 'publicationList',
        })
    },
    methods: {
        ...mapActions({
            setPublicationList: 'setPublicationList',
            setUserPublicationList: 'setUserPublicationList',
            setProfilId: 'setProfilId'
        })
    }
}
</script>

<style>
.publication {
    border-radius: 20px;
    margin: 10px 0;
    background: white;
    box-shadow: 2px 2px 10px;
    display: flex;
    flex-flow: column;
}

.publication-header {
    padding: 10px;
    text-align: start;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.publication-header_user {
    display: flex;
    align-items: center;
}

.publication-header_user > img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    padding: 1px;
    border-radius: 60px;
    margin-right: 10px;
}

.publication-header_user-name {
    font-weight: bold;
    font-size: 1.1rem;
    width: fit-content;
}

.publication-header_user-name:hover {
    color: #BA4D55;
}

.publication-header_user-date {
    font-size: 0.8rem;
}

#show_image {
    padding: 10px;
    object-fit: contain;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
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