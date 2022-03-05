<template>
  <div id="update-commentary">
      <div id="update-commentary-bloc">
          <div id="update-commentary-body">
              <h1 id="update-commentary-header">Modification du commentaire</h1>
              <form id="update-commentary-form" @submit.prevent>
                  <textarea type="text" rows="5" maxlength="9999" v-model="commentary.description"></textarea>
              </form>
              <div id="update-commentary-buttons">
                  <div class="update-commentary-buttons-style" @click="cancelUpdate()" >
                      <font-awesome-icon icon="fa-solid fa-ban" class="update-commentary-icon" />
                      Annuler
                  </div>
                  <div class="update-commentary-buttons-style" @click="updateThis()" >
                      <font-awesome-icon icon="fa-solid fa-circle-check" class="update-commentary-icon" />
                      Valider
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CommentaryServices from '../services/CommentaryServices'

export default {
    props: {
        commentary: {}
    },
    methods: {
        ...mapActions({
            setCommentaryModification: 'setCommentaryModification',
            incrementChangeKey: 'incrementChangeKey'
        }),
        cancelUpdate() {
            this.setCommentaryModification(false)
        },
        updateThis() {
            CommentaryServices.updateCommentary(
                this.commentary.id, 
                this.commentary.description,
            )
            this.incrementChangeKey()
            this.setCommentaryModification(false)
        }
    }
}
</script>

<style>
#update-commentary {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(184, 206, 229, 0.75);
    z-index: 9999;
}

#update-commentary-bloc {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 700px;
}

#update-commentary-body {
    border: 1px solid black;
    border-radius: 20px;
    background: white;
    box-shadow: 2px 2px 10px;
    text-align: start;
    padding: 0 10px;
    margin: 10px;
}

#update-commentary-header {
    text-align: center;
}

#update-commentary-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
}

#update-commentary-form textarea {
    margin: 0;
    border-radius: 10px;
    padding: 5px 10px;
    border: 2px solid gray;
    resize: none;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
}

#update-commentary-form img {
    padding: 10px;
    object-fit: contain;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px;
    margin: 10px auto;
}

#update-commentary-form textarea::-webkit-scrollbar {
    display: none; /* Chrome - Opera - Safari */
}

#update-commentary-buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin: 10px 0;
}

#update-commentary-buttons input[type="file"] {
    display: none;
}

.update-commentary-buttons-style {
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

.update-commentary-buttons-style:hover {
    background: #BA4D55;
    color: white;
}

.update-commentary-buttons-style:active {
    transform: translateY(4px);
}

.update-commentary-icon {
    margin-right: 5px;
}
</style>