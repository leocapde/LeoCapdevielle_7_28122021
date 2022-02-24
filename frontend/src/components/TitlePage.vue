<template>
    <title>{{ title }}</title>
</template>

<script>
export default {
    name: 'title-page',
    props: {
        title: { 
            type: String,
            required: true
        }
    },
    watch: {
        title: {
            immediate: true,
            handler() {
                document.title = this.title
            }
        }
    }
}
</script>