<template>
    <div id="show_commentaries">
        <div class="commentary" v-for="commentary in commentaries" :key="commentary.id">
            <img class="commentary_profil-image" alt="photo de profil" :src="commentary.User.imageUrl" v-if="commentary.User.imageUrl">
            <img class="commentary_profil-image" alt="photo de profil" src="../assets/icon.png" v-else >
            <div class="commentary_infos">
                <div class="commentary_infos-header">
                    <div class="commentary_infos-header--name" @click="setProfilId(commentary.UserId)">
                        {{ commentary.User.firstName }} {{ commentary.User.lastName }}
                        <font-awesome-icon id="admin-icon" icon="fa-solid fa-shield" v-if="commentary.User.isAdmin" />
                    </div>
                    <div class="commentary_infos-header--date">{{ commentary.createdAt | formatDate }}</div>
                </div>
                <div class="commentary_infos-body">
                    {{ commentary.description }}
                </div>
            </div>
            <div class="commentary_option">
                <OptionButtons :userId="commentary.UserId" :commentaryId="commentary.id" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import OptionButtons from '../components/OptionButtons.vue'

export default {
    components: {
        OptionButtons
    },
    props: {
        commentaries: {
            type: Array,
            required: true
        }
    },
    methods: {
        ...mapActions({
            setProfilId: 'setProfilId'
        })
    }
}
</script>

<style>
.commentary {
    display: flex;
    align-items: center;
    margin: 10px;
}

.commentary_profil-image {
    width: 100%;
    max-width: 45px;
    max-height: 45px;
    object-fit: cover;
    border-radius: 45px;
    margin-right: 10px;
    box-shadow: 0 2px 5px black;
    align-self: baseline;
}

.commentary_infos {
    border-radius: 10px;
    background: rgba(211, 211, 211, 0.45);
    display: flex;
    flex-direction: column;
    width: 100%;
}

.commentary_infos-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
}

.commentary_infos-header--name {
    font-weight: bold;
    font-size: 0.9rem;
    width: fit-content;
    cursor: pointer;
    text-align: start;
}

.commentary_infos-header--name:hover {
    color: #BA4D55;
}

.commentary_infos-header--date {
    font-size: 0.7rem;
    text-align: end;
}

.commentary_infos-body {
    padding: 5px 10px;
    text-align: start;
}

.commentary_option {
    margin-left: 10px;
}
</style> 