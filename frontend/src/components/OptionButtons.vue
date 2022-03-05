<template>
    <div id="option" @mouseleave="leaveOption()">
        <div id="option_button" @click="getOption()">
            <font-awesome-icon icon="fa-solid fa-ellipsis" />
        </div>
        <div id="option_select" v-if="option">
            <div id="option_select-delete" @click="deleteThis()" v-if="userId == currentUser || isAdmin == 'true'">
                <font-awesome-icon icon="fa-solid fa-trash-can" class="option_select--icon" />Supprimer
            </div>
            <div id="option_select-update" @click="updateThis()" v-if="userId == currentUser || isAdmin == 'true'">
                <font-awesome-icon icon="fa-solid fa-pen-to-square" class="option_select--icon" />Modifier
            </div>
            <div id="option_select-report" @click="signalThis()" v-else>
                <font-awesome-icon icon="fa-solid fa-flag" class="option_select--icon" />Signaler
            </div>
        </div>
    </div>
</template>

<script>
import PublicationServices from '../services/PublicationServices'
import CommentaryServices from '../services/CommentaryServices'
import { mapActions } from 'vuex'

export default {
    components: {
    },
    data() {
        return {
            option: false,
            currentUser: localStorage.getItem('userId'),
            isAdmin: localStorage.getItem('isAdmin')
        }
    },
    props: {
        userId: { required: true }, 
        publicationId: { type: Number },
        commentaryId: { type: Number }
    },
    methods: {
        ...mapActions({
            incrementChangeKey: 'incrementChangeKey',
            setPublicationModification: 'setPublicationModification',
            setOnePublication: 'setOnePublication',
            setCommentaryModification: 'setCommentaryModification',
            setOneCommentary: 'setOneCommentary'
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
        updateThis() {
            if (this.commentaryId) {
                this.setCommentaryModification(true)
                this.setOneCommentary(this.commentaryId)
            } else if (this.publicationId) {
                this.setPublicationModification(true)
                this.setOnePublication(this.publicationId)
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
    cursor: pointer;
}

#option_button {
    color: gray;
    font-size: 1.5rem;
    border-radius: 20px;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#option_button:focus {
    color: black;
}

#option_button:hover {
    box-shadow: 0 2px 5px black;
}

#option_button:active {
    transform: translateY(3px);
}

#option_select {
    position: absolute;
    right: 0;
    border-radius: 10px;
    background: white;
    box-shadow: 2px 2px 10px;
    padding: 5px;
    z-index: 999;
}

#option_select-delete,
#option_select-update,
#option_select-report {
    padding: 5px;
    display: flex;
}

#option_select-delete:hover,
#option_select-update:hover,
#option_select-report:hover {
    background: #BA4D55;
    color: white;
    border-radius: 5px;
}

#option_select-delete:active,
#option_select-update:active,
#option_select-report:active {
    transform: translateY(2px);
}

.option_select--icon{
    margin-right: 5px;
}
</style>