<template>
    <figure :class="logoClass">
        <img :src="imageSrc">
    </figure>
</template>
<script>
    export default {
        name: 'logo',
        props: {
            imageSrc: String,
            imageClass: String,
        },
        data() {
            return {
                logoClass: `image ${this.imageClass}`,
            };
        },
    };
</script>
<style scoped>
    .image {
        margin: 0 10% 40px;
        height: auto;
    }
</style>
