<template>
    <div class="profile-image">
        <figure class="image is-128x128">
            <img class="is-rounded" :src="imageSrc">
        </figure>
    </div>
</template>
<script>
    export default {
        name: 'profileimage',
        props: {
            imageSrc: String,
        },
    };
</script>
<style>

</style>
