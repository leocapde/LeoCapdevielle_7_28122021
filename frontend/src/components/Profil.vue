<template>
    <div id="profil">
        <h2>Bienvenu sur le profil de :</h2>
        <div v-bind="getCurrentUserProfil()" id="user_profil"></div>
        <div id="user_publications" v-bind="getUserPublications()"></div>
    </div>
</template>

<script>
import UserServices from '../services/UserServices'
import PublicationServices from '../services/PublicationServices'

export default {
    methods:  {
        async getCurrentUserProfil() {
            const res = await UserServices.getCurrentUser();
            document.getElementById('user_profil').innerHTML = 
                `
                <h3>${res.data.firstName} ${res.data.lastName}</h3>
                `
        },
        async getUserPublications() {
            const res = await PublicationServices.getAllPublications();
            const allPublications = document.getElementById('user_publications');
            res.data.forEach(publication => { 
                UserServices.getCurrentUser()
                .then(currentUser => {
                    if (publication.userId == currentUser.data.id) {
                        UserServices.getOneUser(publication.userId)
                        .then(user => {
                            let newDiv = document.createElement('div');
                            newDiv.id = publication.id;
                            newDiv.classList.add('publication');
                            allPublications.appendChild(newDiv);

                            let date = publication.createdAt.split('T')[0]
                            let time = publication.createdAt.split('T')[1].split('.')[0].split(':')[0]+'h'+publication.createdAt.split('T')[1].split('.')[0].split(':')[1]

                            document.getElementById(publication.id).innerHTML = 
                                `
                                <h4>User: ${user.data.firstName} ${user.data.lastName}</h4>
                                <p>${publication.description}</p>
                                <p>Le ${date} à ${time}</p>
                                `
                        })
                        .catch(error => console.log(error))
                    } 
                })
                .catch(error => console.log(error))
            });
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
    border: 1px solid red;
    max-width: 500px;
    margin: auto;
    text-align: start;
}
</style>