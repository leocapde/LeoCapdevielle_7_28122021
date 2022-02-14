<template>
    <div id="show_commentaries">
        <div class="commentary" v-for="commentary in commentaries" :key="commentary.id"> 
            <h5 @click="setUserProfil(commentary.UserId)">{{ commentary.User.firstName }} {{ commentary.User.lastName }}</h5>
            <p>{{ commentary.description }}</p>
            <!-- <p>{{ commentary.createdAt }}</p> -->
            <p v-bind="formateDate(commentary.createdAt)">{{ formatedDate }}</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    props: {
        commentaries: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapState({
            formatedDate: 'formatedDate'
        })
    },
    methods: {
        ...mapActions({
            formateDate: 'formateDate',
            setUserProfil: 'setUserProfil'
        })
    }
}
</script>

<style>
.commentary {
    border: 1px solid red;
    border-radius: 20px;
    margin: 10px;
    background: lightgrey;
}

h5:hover {
    font-style: italic;
}
</style> 