<template>
    <div id="show_commentaries">
        <div class="commentary" v-for="commentary in commentaries" :key="commentary.id">
            <div class="commentary-header">
                <div class="commentary-header_user">
                    <img alt="photo de profil" :src="commentary.User.imageUrl" v-if="commentary.User.imageUrl">
                    <img alt="photo de profil" src="../assets/icon.png" v-else >
                    <div class="commentary-header_user-infos">
                        <div class="commentary-header_user-name" @click="setProfilId(commentary.UserId)">{{ commentary.User.firstName }} {{ commentary.User.lastName }}</div>
                        <div class="commentary-header_user-date">{{ commentary.createdAt | formatDate }}</div>
                    </div>
                </div>
                <div class="commentary-header_option">
                    <OptionButtons :userId="commentary.UserId" :commentaryId="commentary.id" />
                </div>
            </div>
            <div class="commentary-body">{{ commentary.description }}</div>
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
    border-radius: 20px;
    margin: 10px;
    padding: 1px 0;
    background: white;
    box-shadow: 2px 2px 10px;
}

.commentary-header {
    padding: 5px 10px 0 10px;
    text-align: start;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.commentary-header_user {
    display: flex;
    align-items: center;
}

.commentary-header_user > img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    padding: 1px;
    border-radius: 45px;
    margin-right: 10px;
}

.commentary-header_user-name {
    font-weight: bold;
    font-size: 0.9rem;
    width: fit-content;
}

.commentary-header_user-name:hover {
    color: #BA4D55;
}

.commentary-header_user-date {
    font-size: 0.8rem;
}

.commentary-body {
    padding: 10px;
    margin: 5px;
    border-radius: 20px;
    background: lightgrey;
    text-align: start;
}
</style> 