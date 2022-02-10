<template>
    <form id="post_commentary" @submit.prevent>
        <textarea type="text" placeholder="Votre commentaire !" cols="100" v-model="description"></textarea>
        <button @click="postNewCommentary()">Poster</button>
    </form>
</template>

<script>
import CommentaryServices from '../services/CommentaryServices'

export default {
    data() {
        return {
            description: ''
        }
    },
    props: {
        publicationId: {
            type: Number,
            required: true
        }
    },
    methods: {
        async postNewCommentary() {
            await CommentaryServices.postCommentary(this.description, this.publicationId)
            // Modifier la route et le controller postCommentary.js
            // Enlever le req.params.id
            // Rajouter le publicationId dans le body via la method dans CommentaryServices
            location.reload()
        }
    }
}
</script>

<style>
#post_commentary {
    border: 1px solid green;
    padding: 10px;
    display: flex;
    border-radius: 20px;
    margin: 10px;
    background: lightgrey;
}

</style>