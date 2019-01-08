<template>
    <div class="profile-page">
        <ProfileImage imageSrc="https://bulma.io/images/placeholders/128x128.png"></ProfileImage>
        <ProfileForm></ProfileForm>
    </div>
</template>
<script>
    import ProfileImage from '../components/profile/ProfileImage.vue';
    import ProfileForm from '../components/profile/ProfileForm.vue';

    export default {
        name: 'profilepage',
        components: {
            ProfileImage,
            ProfileForm,
        },
    };
</script>
<style scoped>
    .profile-page {
        flex: 1;
        padding: 0 5%;
    }
</style>
