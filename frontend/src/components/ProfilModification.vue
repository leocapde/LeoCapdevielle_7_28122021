<template>
    <div id="profil-modification">
        <div id="profil-modification-body">
            <h1 id="profil-modification-header">Modification du profil</h1>
            <form id="profil-modification-form" @submit.prevent> 
                
                <label for="firstName">Prénom :</label>
                <input type="text" name="firstName" v-model="user.firstName">
                
                <label for="lastName">Nom :</label>
                <input type="text" name="lastName" v-model="user.lastName">
                
                <label for="imageUrl">Photo de profil :</label>
                <input type="file" name="imageUrl" id="imageUrl" @change="changeImage" accept="image/*">
                <img :src="user.imageUrl" v-if="user.imageUrl">
                <img src="../assets/icon.png" v-else >

                <label for="age">Age :</label>
                <input type="age" name="age" v-model="user.age">

                <label for="job">Poste :</label>
                <input type="job" name="job" v-model="user.job">

                <label for="email">Email :</label>
                <input type="email" name="email" v-model="user.email">

                <label for="description">Biographie :</label>
                <textarea type="text" name="description" rows="5" cols="100" v-model="user.description"></textarea>

                <div id="profil-update-button">
                    <button id="profil-update-button-validate" type="button" @click="updateUser()">Valider les modifications</button>
                    <button id="profil-update-button-cancel" type="button" @click="cancelModification()">Annuler les modifications</button>
                    <button id="profil-update-button-delete" type="button" @click="deleteUser()">Supprimer le profil</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import UserServices from '../services/UserServices'

import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            user: {},
            imageFile: null
        }
    },
    components: {
        // ImageProfil
    },
    props: {
        profilId: { required: true }

    },
    mounted() {
        this.setUserProfil(this.profilId)
        this.user = this.userProfil
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
            setProfilModification: 'setProfilModification',
            incrementChangeKey: 'incrementChangeKey'
        }),
        changeImage(event) {
            let image = event.target.files[0]
            this.user.imageUrl = URL.createObjectURL(image)
            this.imageFile = image
        },
        updateUser() {
            UserServices.modifyUser(
                this.user.id,
                this.user,
                this.imageFile,
            )
            this.incrementChangeKey()
            this.setProfilModification(false)
        },
        cancelModification() {
            this.setProfilModification(false)
        },
        deleteUser() {
            if (confirm('Etes-vous sur de vouloir supprimer votre profil ?')) {
                UserServices.deleteUser(this.user.id)
                UserServices.signout()
            }
        }
    }
}
</script>

<style>
#profil-modification {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.50);
    z-index: 9999;
}

#profil-modification-body {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 650px;
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px 0;
    background: white;
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

#profil-modification-form img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    padding: 1px;
    border-radius: 50px;
    margin-right: 10px;
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