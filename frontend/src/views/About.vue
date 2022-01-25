<template>
    <div id="about">
        <h1>Voilà la page "About"</h1>
        <img id="logo" alt="Vue logo" src="../assets/icon-above-font.png">

        <div id="token">{{ token }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem('token')
        }
    },
}
</script>