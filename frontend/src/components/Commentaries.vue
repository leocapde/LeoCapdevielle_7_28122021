<template>
    <div id="commentaries">
        <ShowCommentaries :commentaries="commentaries" v-if="commentaries.length != 0"/>
        <PostCommentary :publicationId="publicationId"/>
    </div>
</template>

<script>
import PostCommentary from './PostCommentary.vue'
import ShowCommentaries from './ShowCommentaries.vue'

export default {
    components: {
        PostCommentary,
        ShowCommentaries
    },
    props: {
        commentaries: {
            type: Array,
            required: true
        },
        publicationId: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
#commentaries {
    border: 1px solid purple;
    border-radius: 20px;
    margin: 10px;
    background: gray;
}

#postId {
    color: white;
    font-weight: bold;
}
</style> 