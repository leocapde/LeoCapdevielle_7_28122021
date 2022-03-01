<template>
    <form id="post_publication" @submit.prevent>
        <div id="post_infos">
            <textarea type="text" placeholder="Exprimez-vous !" rows="5" cols="100" v-model="description"></textarea>
            <div id="buttons">
                <button id="post-button" @click="postNewPublication()">Poster</button>
                <label id="label-img" for="add-img-button">Photo</label>
                <input type="file" id="add-img-button" @change="getFile" accept="image/*">
            </div>
        </div>
        <img id="post_image" :src="this.fileUrl" v-if="this.fileUrl" >
    </form>
</template>

<script>
import PublicationServices from '../services/PublicationServices'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            description: '',
            file: null,
            fileUrl: ''
        }
    },
    watch: {
        fileUrl() {}
    },
    methods: {
        ...mapActions({
            incrementChangeKey: 'incrementChangeKey'
        }),
        async postNewPublication() {
            await PublicationServices.postPublication(this.description, this.file)
            this.incrementChangeKey()
        },
        getFile(event) {
            let image = event.target.files[0]
            this.fileUrl = URL.createObjectURL(image)
            this.file = image
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
    margin: 10px 0;
    background: #FFD7D7;
    box-shadow: 2px 2px 10px;
}

#post_infos {
    display: flex;
    width: 100%;
}

#post_image {
    padding: 10px;
    max-height: 500px;
    max-width: 500px;
    object-fit: contain;
}

#post_infos textarea {
    border-radius: 20px 0 0 20px;
    padding: 10px;
}

#buttons {
    margin: 0;
}

#post_publication button:hover {
    background: #FFD7D7;
}

#post-button {
    border-radius: 0 20px 0 0;
    width: 100%;
    height: 50%;
}

#label-img {
    border-radius: 0 0 20px 0;
    border: 2px solid black;
    width: 100%;
    height: 50%;
    background: lightgray;
}

#label-img:hover {
    background: #FFD7D7;
}

#add-img-button{
    display: none;
}
</style>