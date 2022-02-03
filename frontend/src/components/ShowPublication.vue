<template>
    <div id="show_publications">
        
    </div>
</template>

<script>
// import UserServices from '../services/UserServices'
// import PublicationServices from '../services/PublicationServices' 

export default {
    /*data() {
        return {
            newsId: ''
        }
    },
    methods: {
        async getPublications() {
            const res = await PublicationServices.getAllPublications();
            const allPublications = document.getElementById('show_publications');
            res.data.forEach(publication => { 
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
            });
        }
    }*/
}
</script>

<style>
.publication {
    border: 1px solid blue;
    margin: 10px 0;
}
</style> 