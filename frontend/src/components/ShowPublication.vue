<template>
    <div id="show_publications">
        <div class="publication" v-for="publication in publicationList" :key="publication.id">
            <div class="publication_header">
                <div class="publication_header-infos">
                    <img class="publication_header-infos--image" alt="photo de profil" :src="publication.User.imageUrl" v-if="publication.User.imageUrl">
                    <img class="publication_header-infos--image" alt="photo de profil" src="../assets/icon.png" v-else >
                    <div class="publication_header-infos--user">
                        <div class="publication_header-infos--user-name" @click="setProfilId(publication.UserId)">
                            {{ publication.User.firstName }} {{ publication.User.lastName }}
                            <font-awesome-icon id="admin-icon" icon="fa-solid fa-shield" v-if="publication.User.isAdmin" />
                        </div>
                        <div class="publication_header-infos--date">{{ publication.createdAt | formatDate }}</div>
                    </div>
                </div>
                <div class="publication_header-option">
                    <OptionButtons :userId="publication.UserId" :publicationId="publication.id" />
                </div>
            </div>
            <div class="publication_body">
                <div class="publication_body-description">{{ publication.description }}</div>
                <img class="publication_body-image" :src="publication.fileUrl" v-if="publication.fileUrl" >
            </div>
            <Commentaries class="publication_commentaries" :commentaries="publication.Commentaries" :publicationId="publication.id"/>
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

.publication_header {
    padding: 10px;
    text-align: start;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 20px 20px 0 0;
}

.publication_header-infos {
    display: flex;
    align-items: center;
}

.publication_header-infos--image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 60px;
    margin-right: 10px;
    box-shadow: 0 2px 5px black;
}

.publication_header-infos--user-name {
    font-weight: bold;
    font-size: 1.1rem;
    width: fit-content;
    cursor: pointer;
}

.publication_header-infos--user-name:hover {
    color: #BA4D55;
}

.publication_header-infos--date {
    font-size: 0.8rem;
}

.publication_body {
    width: 100%;
    margin-bottom: 5px;
}

.publication_body-description {
    padding: 10px;
    text-align: start;
}

.publication_body-image {
    padding: 10px;
    object-fit: contain;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px;
    margin-top: 5px;
}
</style> 