<template>
    <div id="option" @mouseleave="leaveOption()">
        <div id="option-button" @click="getOption()">
            <font-awesome-icon icon="fa-solid fa-ellipsis" />
        </div>
        <div id="option-select" v-if="option">
            <div @click="deleteThis()" v-if="userId == currentUser">Supprimer</div>
            <div v-if="userId == currentUser">Modifier</div>
            <div @click="signalThis()" v-else>Signaler</div>
        </div>
    </div>
</template>

<script>
import PublicationServices from '../services/PublicationServices'
import CommentaryServices from '../services/CommentaryServices'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            option: false,
            currentUser: localStorage.getItem('userId'),
        }
    },
    props: {
        userId: { required: true }, 
        publicationId: { type: Number },
        commentaryId: { type: Number }
    },
    methods: {
        ...mapActions({
            incrementChangeKey: 'incrementChangeKey'
        }),
        getOption() {
            if (!this.option) {
                return this.option = true
            } else {
                return this.option = false
            }
        },
        leaveOption() {
            return this.option = false
        },
        deleteThis() {
            if (this.commentaryId) {
                if (confirm('Voulez vous vraiment supprimer ce commentaire ?')) {
                    CommentaryServices.deleteCommentary(this.commentaryId)
                    this.incrementChangeKey()
                }
            } else if (this.publicationId) {
                if (confirm('Voulez vous vraiment supprimer cette publication ?')) {
                    PublicationServices.deletePublication(this.publicationId)
                    this.incrementChangeKey()
                }
            }
        },
        signalThis() {
            alert('Msg signalé 😘')
        }
    }
}
</script>

<style>
#option {
    position: relative;
    right: 0px;
}

#option-button {
    color: gray;
    font-size: 1.5rem;
    border-radius: 20px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#option-button:focus {
    color: black;
}

#option-button:hover {
    background: lightgray;
}

#option-select {
    position: absolute;
    right: 0;
    border: 1px solid black;
    border-radius: 10px;
    background: white;
    box-shadow: 2px 2px 10px;
    padding: 5px;
}

#option-select > div {
    padding: 5px;
}

#option-select > div:hover {
    color: #BA4D55;
}
</style>