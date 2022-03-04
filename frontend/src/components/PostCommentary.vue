<template>
    <form id="post_commentary" @submit.prevent>
        <img class="post_commentary-image" alt="photo de profil" :src="userProfil.imageUrl" v-if="userProfil.imageUrl">
        <img class="post_commentary-image" alt="photo de profil" src="../assets/icon.png" v-else >
        <textarea id="post_commentary-description" type="text" placeholder="Un commentaire ?" maxlength="9999" v-model="description"></textarea>
        <div id="post_commentary-send" type="submit" @click="postNewCommentary()">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
        </div>
    </form>
</template>

<script>
import CommentaryServices from '../services/CommentaryServices'

import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            description: null
        }
    },
    props: {
        publicationId: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState({
            userProfil: 'userProfil',
        })
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
    padding: 0 10px 10px 10px;
    display: flex;
    align-items: center;
}

.post_commentary-image {
    width: 100%;
    max-width: 45px;
    max-height: 45px;
    object-fit: cover;
    border-radius: 45px;
    box-shadow: 0 2px 5px black;
}

#post_commentary-description {
    border-radius: 10px;
    padding: 10px;
    margin: 0 10px;
    width: 100%;
    resize: none;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
}

#post_commentary-description::-webkit-scrollbar {
    display: none; /* Chrome - Opera - Safari */
}

#post_commentary-send {
    border-radius: 20px;
    box-shadow: 0 2px 5px black;
    padding: 10px;
}

#post_commentary-send:hover {
    background: #BA4D55;
    color: white;
    box-shadow: 0 2px 5px black;
}

#post_commentary-send:active {
    transform: translateY(3px);
}
</style>