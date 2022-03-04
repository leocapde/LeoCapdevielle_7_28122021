<template>
    <form id="post_publication" @submit.prevent>
        <div id="post_infos">
            <img alt="photo de profil" :src="userProfil.imageUrl" v-if="userProfil.imageUrl">
            <img alt="photo de profil" src="../assets/icon.png" v-else >
            <textarea type="text" placeholder="Exprimez-vous !" maxlength="9999" v-model="description"></textarea>
        </div>
        <img id="post_image" :src="this.fileUrl" v-if="this.fileUrl" >
        <div id="post_options">
            <label id="post_options-label-image" for="post_options-add-image" v-if="!this.fileUrl">
                <font-awesome-icon icon="fa-solid fa-camera" class="post_options-icon" />Ajouter une photo
            </label>
            <input type="file" id="post_options-add-image" @change="getFile" accept="image/*">
            <div id="post_options-delete-image" v-if="this.fileUrl" @click="deleteFile()">
                <font-awesome-icon icon="fa-solid fa-trash-can" class="post_options-icon" />Supprimer l'image
            </div>
            <div id="post_options-send" @click="postNewPublication()">
                <font-awesome-icon icon="fa-solid fa-paper-plane" class="post_options-icon" />Poster la publication
            </div>
        </div>
    </form>
</template>

<script>
import PublicationServices from '../services/PublicationServices'
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            description: null,
            file: null,
            fileUrl: null,
            currentUser: localStorage.getItem('userId')
        }
    },
    watch: {
        fileUrl() {}
    },
    mounted() {
        this.setUserProfil(this.currentUser)
    },
    computed: {
        ...mapState({
            userProfil: 'userProfil',
        })
    },
    methods: {
        ...mapActions({
            incrementChangeKey: 'incrementChangeKey',
            setUserProfil: 'setUserProfil'
        }),
        async postNewPublication() {
            await PublicationServices.postPublication(this.description, this.file)
            this.incrementChangeKey()
        },
        getFile(event) {
            let image = event.target.files[0]
            if (image) {
                this.fileUrl = URL.createObjectURL(image)
                this.file = image
            }
        },
        deleteFile() {
            this.file = null
            this.fileUrl = null
        }
    }
}
</script>

<style>
#post_publication {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    margin: 25px 0 35px 0;
    background: white;
    box-shadow: 2px 2px 10px;
}

#post_infos {
    display: flex;
    width: 100%;
}

#post_infos > img {
    width: 100%;
    max-width: 60px;
    max-height: 60px;
    object-fit: cover;
    border-radius: 60px;
    margin-right: 10px;
    box-shadow: 0 2px 5px black;
}

#post_infos textarea {
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    resize: none;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
}

#post_infos textarea::-webkit-scrollbar {
    display: none; /* Chrome - Opera - Safari */
}

#post_options {
    margin: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#post_options-label-image, 
#post_options-delete-image, 
#post_options-send {
    border-radius: 20px;
    box-shadow: 2px 2px 5px black;
    margin: 0 10px;
    width: 100%;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
}

.post_options-icon {
    margin-right: 5px;
}

#post_options-label-image:hover, 
#post_options-delete-image:hover, 
#post_options-send:hover {
    background: #BA4D55;
    color: white;
}

#post_options-label-image:active, 
#post_options-delete-image:active, 
#post_options-send:active {
    transform: translateY(4px);
}

#post_options-add-image{
    display: none;
}

#post_image {
    padding: 10px 0;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
}
</style>