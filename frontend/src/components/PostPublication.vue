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
    border: 1px solid green;
    padding: 10px;
    display: flex;
    border-radius: 20px;
    margin: 10px 0;
}

</style>