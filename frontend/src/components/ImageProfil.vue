<template>
    <div id="image-profil">
        <img alt="photo de profil" :src="imageUrl" v-if="imageUrl">
        <img alt="photo de profil" src="http://localhost:8080/img/logo.82b9c7a5.png" v-else>
    </div>
</template>

<script>
export default {
    props: {
        size: { default: '50px' },
        imageUrl: {}
    },
}
</script>

<style>
#image-profil > img {
    width: 50px;
    height: 50px;
    border: 2px solid black;
    border-radius: 50px;
    margin-right: 10px;
    background: gray; /* Gray pour dvp sinon white */ 
}
</style>