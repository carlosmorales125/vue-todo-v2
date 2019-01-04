<template>
    <figure :class="logoClass">
        <img :src="logoSrc">
    </figure>
</template>
<script>
    export default {
        name: 'logo',
        props: {
            logoSrc: String,
            logoSizeClass: String,
        },
        data() {
            return {
                logoClass: `image ${this.logoSizeClass}`,
            };
        },
    };
</script>
<style>

</style>
