<template>
    <div id="profil-modification">
        <h1 id="profil-modification-header">Modification du profil</h1>
        <form id="profil-modification-form" @submit.prevent>
            
            <label for="firstName">Prénom :</label>
            <input type="text" name="firstName" v-model="userProfil.firstName">
            
            <label for="lastName">Nom :</label>
            <input type="text" name="lastName" v-model="userProfil.lastName">
            
            <label for="lastName">Photo de profil :</label>
            <input type="file" name="lastName" @change="changeFile"> <!-- v-model="userProfil.imageUrl"> -->
            <ImageProfil :imageUrl="userProfil.imageUrl" />

            <label for="age">Age :</label>
            <input type="age" name="age" v-model="userProfil.age">

            <label for="job">Poste :</label>
            <input type="job" name="job" v-model="userProfil.job">

            <label for="email">Email :</label>
            <input type="email" name="email" v-model="userProfil.email">

            <label for="description">Biographie :</label>
            <textarea type="text" name="description" rows="5" cols="100" v-model="userProfil.description"></textarea>

            <button id="profil-update-button" @click="updateUser()">Valider les modifications</button>
            <br>
        </form>
    </div>
</template>

<script>
import ImageProfil from '../components/ImageProfil.vue'
import UserServices from '../services/UserServices'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        ImageProfil
    },
    props: {
        profilId: { required: true }

    },
    mounted() {
        this.setUserProfil(this.profilId)
    },
    computed: {
        ...mapState({
            userProfil: 'userProfil',
            profilModification: 'profilModification'
        })
    },
    methods: {
        ...mapActions({
            setUserProfil: 'setUserProfil',
            setProfilModification: 'setProfilModification'
        }),
        changeFile(event) {
            this.userProfil.imageUrl = event.target.files
        },
        updateUser() {
            UserServices.modifyUser(
                this.userProfil.id,
                this.userProfil.email,
                this.userProfil.password,
                this.userProfil.lastName,
                this.userProfil.firstName,
                this.userProfil.imageUrl,
                this.userProfil.age,
                this.userProfil.job,
                this.userProfil.description
            )
            this.setProfilModification(false)
            console.log(this.userProfil.id)
        }
    }
}
</script>

<style>
#profil-modification {
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px 0;
    background: #FFD7D7;
    box-shadow: 2px 2px 10px;
    text-align: start;
    padding: 10px;
}

#profil-modification-header {
    text-align: center;
}

#profil-modification-form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    align-content: center;
    margin: auto;
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

#profil-update-button {
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    background: lightgray;
}

#profil-update-button:hover {
    font-style: italic;
}

#profil-modification-form label {
    font-weight: bold;
}

</style>