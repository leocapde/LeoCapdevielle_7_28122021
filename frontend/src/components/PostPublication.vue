<template>
    <form id="post_publication" @submit.prevent>
        <textarea type="text" placeholder="Exprimez-vous !" rows="5" cols="100" v-model="description"></textarea>
        <button @click="postNewPublication()">Poster</button>
    </form>
</template>

<script>
import PublicationServices from '../services/PublicationServices'

export default {
    data() {
        return {
            description: ''
        }
    },
    methods: {
        async postNewPublication() {
            await PublicationServices.postPublication(this.description)
            location.reload()
        }
    }
}
</script>

<style>
#post_publication {
    padding: 10px;
    display: flex;
    border-radius: 20px;
    margin: 10px 0;
    background: #FFD7D7;
    box-shadow: 2px 2px 10px;
}

#post_publication textarea {
    border-radius: 20px 0 0 20px;
    padding: 10px;
}

#post_publication button {
    border-radius: 0 20px 20px 0;
}

#post_publication button:hover {
    background: #FFD7D7;
}
</style>