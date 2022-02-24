<template>
    <form id="post_commentary" @submit.prevent>
        <textarea type="text" placeholder="Votre commentaire !" cols="100" v-model="description"></textarea>
        <button @click="postNewCommentary()">Poster</button>
    </form>
</template>

<script>
import CommentaryServices from '../services/CommentaryServices'

import { mapActions } from 'vuex'

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
        ...mapActions({
            incrementChangeKey: 'incrementChangeKey'
        }),
        postNewCommentary() {
            CommentaryServices.postCommentary(this.description, this.publicationId)
            this.incrementChangeKey()
        }
    }
}
</script>

<style>
#post_commentary {
    padding: 10px;
    display: flex;
    border-radius: 20px;
    margin: 10px;
    background: lightgrey;
    box-shadow: 2px 2px 10px;
}

#post_commentary textarea {
    border-radius: 20px 0 0 20px;
    padding: 10px;
}

#post_commentary button {
    border-radius: 0 20px 20px 0;
}

#post_commentary button:hover {
    background: #FFD7D7;
}
</style>