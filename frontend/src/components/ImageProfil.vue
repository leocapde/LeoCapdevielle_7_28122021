<template>
    <div id="image-profil">
        <img alt="photo de profil" :src="imageUrl" v-if="imageUrl">
        <img alt="photo de profil" src="../assets/images/icon-above-font.png" v-else>
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
    width: 60px;
    height: 60px;
    border: 2px solid black;
    border-radius: 50px;
    margin-right: 10px;
    background: gray; /* Gray pour dvp sinon white */ 
}
</style>