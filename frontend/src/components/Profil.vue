<template>
    <div id="profil">
        <div id="profil-header">
            <ImageProfil :imageUrl="user.imageUrl" />
            <div id="profil-name">{{ user.firstName }} {{ user.lastName}}</div>
        </div>
        <div id="profil-email" v-if="user.email">
            <span class="profil-span">Email: </span>{{ user.email }}
        </div>
        <div id="profil-job" v-if="user.job">
            <span class="profil-span">Poste occupé: </span>{{ user.job }}
        </div>
        <div id="profil-description" v-if="user.description">
            <span class="profil-span">Biographie: </span>{{ user.description }}
        </div>
    </div>
</template>

<script>
import UserServices from '../services/UserServices'
import ImageProfil from '../components/ImageProfil.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ImageProfil
    },
    data() {
        return {
            user: []
        }
    },
    props: {
        profilId: { required: true }
    },
    watch: {
        profilId() {
            this.getUserProfil()
        }
    },
    mounted() {
        this.getUserProfil()
    },
    computed: {
        ...mapState({
            userProfil: 'userProfil'
        })
    },
    methods: {
        async getUserProfil() {
            const profilId = this.profilId
            const user = await UserServices.getOneUser(profilId)
            return this.user = user.data
        }
    }
}
</script>

<style>
#profil {
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px 0;
    background: #FFD7D7;
    box-shadow: 2px 2px 10px;
    text-align: start;
    padding: 10px;
}

#profil > div {
    margin: 10px 0;
}

#profil-header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#profil-img {
    width: 60px;
    height: 60px;
    border: 2px solid black;
    border-radius: 100px;
    background: white;
    margin-right: 10px;
}

#profil-name {
    font-size: 1.5rem;
    font-weight: bold;
}

.profil-span {
    font-weight: bold;
}
</style>