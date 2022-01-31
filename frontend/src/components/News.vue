<template>
    <div id="news">
        <h2>Les news ici oui !</h2>
        <div id="all_news" v-bind="getPublications()"></div>
    </div>
</template>

<script>
import PublicationServices from '../services/PublicationServices'

export default {
    methods: {
        async getPublications() {
            const res = await PublicationServices.getAllPublications();
            // console.log(res.data[0]);
            const allPublications = document.getElementById('all_news');
            res.data.forEach(publication => {
                // console.log(publication.id)
                let newDiv = document.createElement('div');
                newDiv.id = publication.id;
                newDiv.classList.add('publication');
                allPublications.appendChild(newDiv);
                document.getElementById(publication.id).innerHTML = 
                    `
                    <h4>UserId: ${publication.userId}</h4>
                    <p>${publication.description}</p>
                    <p>${publication.createdAt}</p>
                    `
            });
        }
    },
}
</script>

<style>
#news {
    border: 1px solid black;
}

.publication {
    border: 1px solid blue;
    max-width: 500px;
    margin: 10px auto;
}
</style> 