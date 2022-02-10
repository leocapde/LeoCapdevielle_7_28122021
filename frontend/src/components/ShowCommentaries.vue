<template>
    <div id="show_commentaries">
        <div class="commentary" v-for="commentary in commentaries" :key="commentary.id"> 
            <h5>{{ commentary.User.firstName }} {{ commentary.User.lastName }}</h5>
            <p>{{ commentary.description }}</p>
            <p>{{ commentary.createdAt }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        commentaries: {
            type: Array,
            required: true
        }
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
</style> 