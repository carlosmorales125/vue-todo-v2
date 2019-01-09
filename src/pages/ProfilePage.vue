<template>
    <div class="profile-page">
        <ProfileImage imageSrc="https://bulma.io/images/placeholders/128x128.png"></ProfileImage>
        <ProfileForm></ProfileForm>
        <ResetPasswordForm></ResetPasswordForm>
    </div>
</template>
<script>
    import ProfileImage from '../components/profile/ProfileImage.vue';
    import ProfileForm from '../components/profile/ProfileForm.vue';
    import ResetPasswordForm from '../components/profile/ResetPasswordForm.vue';

    export default {
        name: 'profilepage',
        components: {
            ProfileImage,
            ProfileForm,
            ResetPasswordForm,
        },
    };
</script>
<style scoped>
    .profile-page {
        flex: 1;
        padding: 0 5%;
    }
</style>
