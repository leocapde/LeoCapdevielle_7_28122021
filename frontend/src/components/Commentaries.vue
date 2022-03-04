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

</style> 