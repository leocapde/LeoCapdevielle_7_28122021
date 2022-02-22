<template>
    <div id="commentaries">
        <ShowCommentaries :commentaries="commentaries"/>
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
    border-radius: 20px;
    margin: 10px;
    padding: 1px 0;
    background: gray;
}
</style> 