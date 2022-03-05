<template>
    <div id="profil_modification">
        <div id="profil_modification-bloc">
            <div id="profil_modification-body">
                <h1 id="profil_modification-header">Modification du profil</h1>
                <form id="profil_modification-form" @submit.prevent>
                    <div class="form-item" id="photo-profil">
                        <label for="imageUrl">Photo de profil :</label>
                        <label for="imageUrl">
                            <img :src="user.imageUrl" v-if="user.imageUrl">
                            <img src="../assets/icon.png" v-else >
                        </label>
                        <input type="file" name="imageUrl" id="imageUrl" @change="changeImage" accept="image/*">
                    </div>
                    <div class="form-item">
                        <label for="lastName">Nom :</label>
                        <input type="text" name="lastName" id="lastName" v-model="user.lastName" required minlength="2" maxlength="20">
                    </div>
                    <div class="form-item">
                        <label for="firstName">Prénom :</label>
                        <input type="text" name="firstName" id="firstName" v-model="user.firstName" required minlength="2" maxlength="20">
                    </div>
                    <div class="form-item">
                        <label for="age">Age :</label>
                        <input type="text" name="age" id="age" v-model="user.age" minlength="2" maxlength="3">
                    </div>
                    <div class="form-item">
                        <label for="email">Email :</label>
                        <input type="email" name="email" id="email" v-model="user.email">
                    </div>
                    <div class="form-item">
                        <label for="job">Poste occupé dans l'entreprise :</label>
                        <input type="text" name="job" id="job" v-model="user.job" minlength="2">
                    </div>
                    <div class="form-item">
                        <label for="description">Biographie :</label>
                        <textarea type="text" name="description" id="description" rows="5" v-model="user.description" minlength="2"></textarea>
                    </div>
                    <div id="form-button">
                        <div id="form-button--validate" class="form-button--style" type="submit" @click="updateUser()">
                            <font-awesome-icon icon="fa-solid fa-circle-check" class="form-button--icon" />
                            Valider
                        </div>
                        <div id="form-button--cancel" class="form-button--style" type="submit" @click="cancelModification()">
                            <font-awesome-icon icon="fa-solid fa-ban" class="form-button--icon" />Annuler
                        </div>
                        <div id="form-button--delete" class="form-button--style" type="submit" @click="deleteUser()">
                            <font-awesome-icon icon="fa-solid fa-trash-can" class="form-button--icon" />Supprimer
                        </div>
                    </div>
                </form>
            </div>
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
#profil_modification {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(184, 206, 229, 0.75);
    z-index: 9999;
}

#profil_modification-bloc {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 700px;
}

#profil_modification-body {
    border: 1px solid black;
    border-radius: 20px;
    background: white;
    box-shadow: 2px 2px 10px;
    text-align: start;
    padding: 0 10px;
    margin: 10px;
}

#profil_modification-header {
    text-align: center;
}

#profil_modification-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    align-content: center;
    margin: auto;
}

.form-item {
    display: flex;
    flex-direction: column;
    margin: 5px 0;
}

.form-item label {
    text-align: start;
    margin: 0 10px;
    font-weight: bold;
}

#photo-profil {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#photo-profil label {
    cursor: pointer;
}

#photo-profil label img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    padding: 1px;
    border-radius: 50px;
}

.form-item input {
    margin: 0;
    border-radius: 20px;
    padding: 5px 10px;
    border: 2px solid gray;
}

.form-item input[type="file"] {
    display: none;
}

.form-item textarea {
    margin: 0;
    border-radius: 20px;
    padding: 5px 10px;
    border: 2px solid gray;
    resize: none;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
}

.form-item textarea::-webkit-scrollbar {
    display: none; /* Chrome - Opera - Safari */
}

#form-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin: 10px 0;
}

.form-button--style {
    border-radius: 20px;
    box-shadow: 2px 2px 5px black;
    margin: 0 10px;
    width: 100%;
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    background: white;
}

.form-button--style:hover {
    background: #BA4D55;
    color: white;
}

.form-button--style:active {
    transform: translateY(4px);
}

.form-button--icon {
    margin-right: 5px;
}

</style>