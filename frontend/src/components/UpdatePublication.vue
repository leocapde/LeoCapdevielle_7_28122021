<template>
  <div id="update-publication">
      <div id="update-publication-bloc">
          <div id="update-publication-body">
              <h1 id="update-publication-header">Modification de la publication</h1>
              <form id="update-publication-form" @submit.prevent>
                  <textarea type="text" rows="5" maxlength="9999" v-model="publication.description"></textarea>
                  <img :src="publication.fileUrl" v-if="publication.fileUrl" >
              </form>
              <div id="update-publication-buttons">
                  <label class="update-publication-buttons-style" for="update-publication-add-file" v-if="!publication.fileUrl">
                      <font-awesome-icon icon="fa-solid fa-camera" class="update-publication-icon" />
                      Ajouter une photo
                  </label>
                  <label class="update-publication-buttons-style" for="update-publication-add-file" v-if="publication.fileUrl">
                      <font-awesome-icon icon="fa-solid fa-camera" class="update-publication-icon" />
                      Modifier la photo
                  </label>
                  <input type="file" id="update-publication-add-file" @change="getFile" accept="image/*" />
                  <div class="update-publication-buttons-style" @click="cancelUpdate()" >
                      <font-awesome-icon icon="fa-solid fa-ban" class="update-publication-icon" />
                      Annuler
                  </div>
                  <div class="update-publication-buttons-style" @click="updateThis()" >
                      <font-awesome-icon icon="fa-solid fa-circle-check" class="update-publication-icon" />
                      Valider
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PublicationServices from '../services/PublicationServices'

export default {
    data() {
        return {
            file: null
        }
    },
    props: {
        publication: {}
    },
    methods: {
        ...mapActions({
            setPublicationModification: 'setPublicationModification',
            incrementChangeKey: 'incrementChangeKey'
        }),
        getFile(event) {
            let image = event.target.files[0]
            if (image) {
                this.publication.fileUrl = URL.createObjectURL(image)
                this.file = image
            }
        },
        cancelUpdate() {
            this.setPublicationModification(false)
        },
        updateThis() {
            PublicationServices.updatePublication(
                this.publication.id, 
                this.publication.description,
                this.file
            )
            this.incrementChangeKey()
            this.setPublicationModification(false)
        }
    }
}
</script>

<style>
#update-publication {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(184, 206, 229, 0.75);
    z-index: 9999;
}

#update-publication-bloc {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 700px;
}

#update-publication-body {
    border: 1px solid black;
    border-radius: 20px;
    background: white;
    box-shadow: 2px 2px 10px;
    text-align: start;
    padding: 0 10px;
    margin: 10px;
}

#update-publication-header {
    text-align: center;
}

#update-publication-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
}

#update-publication-form textarea {
    margin: 0;
    border-radius: 10px;
    padding: 5px 10px;
    border: 2px solid gray;
    resize: none;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
}

#update-publication-form img {
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

#update-publication-form textarea::-webkit-scrollbar {
    display: none; /* Chrome - Opera - Safari */
}

#update-publication-buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin: 10px 0;
}

#update-publication-buttons input[type="file"] {
    display: none;
}

.update-publication-buttons-style {
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

.update-publication-buttons-style:hover {
    background: #BA4D55;
    color: white;
}

.update-publication-buttons-style:active {
    transform: translateY(4px);
}

.update-publication-icon {
    margin-right: 5px;
}
</style>