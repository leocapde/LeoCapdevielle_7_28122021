<template>
    <div id="profil">
        <h2>Bienvenu sur le profil de :</h2>
        <div v-bind="getUserProfil()" id="user_profil"></div>
        <div id="user_publications">Slt bro 😘</div>
    </div>
</template>

<script>
import UserServices from '../services/UserServices'

export default {
    methods:  {
        async getUserProfil() {
            const res = await UserServices.getUser();
            document.getElementById('user_profil').innerHTML = 
                `
                <h3>${res.data.firstName} ${res.data.lastName}</h3>
                `
        }
    }
}
</script>

<style>
#profil {
    border: 1px solid black;
    /* display: flex; */
}

#user_profil {
    border: 1px solid blue;
    max-width: 500px;
    margin: auto;
    text-align: start;
}

#user_publications {
    border: 1px solid red;
    max-width: 500px;
    margin: 10px auto;
}
</style>