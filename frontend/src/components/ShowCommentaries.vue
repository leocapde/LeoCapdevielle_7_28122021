<template>
    <div id="show_commentaries">
        <div class="commentary" v-for="commentary in commentaries" :key="commentary.id">
            <div class="commentary-header">
                <ImageProfil :imageUrl="commentary.User.imageUrl" />
                <div class="commentary-header_infos">
                    <div class="commentary-header_name" @click="setProfilId(commentary.UserId)">{{ commentary.User.firstName }} {{ commentary.User.lastName }}</div>
                    <div class="commentary-header_date">{{ commentary.createdAt | formatDate }}</div>
                </div>
            </div>
            <div class="commentary-body">{{ commentary.description }}</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import ImageProfil from '../components/ImageProfil.vue'

export default {
    components: {
        ImageProfil
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
    /* border: 1px solid red; */
    border-radius: 20px;
    margin: 10px;
    padding: 1px 0;
    background: white;
    box-shadow: 2px 2px 10px;
}

.commentary-header {
    width: 100%;
    padding: 10px;
    text-align: start;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.commentary-header_name {
    font-weight: bold;
    font-size: 0.9rem;
    width: fit-content;
}

.commentary-header_name:hover {
    color: #BA4D55;
}

.commentary-header_date {
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