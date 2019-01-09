<template>
    <div class="profile-page">
        <ProfileForm></ProfileForm>
        <ResetPasswordForm></ResetPasswordForm>
    </div>
</template>
<script>
    import ProfileForm from '../components/profile/ProfileForm.vue';
    import ResetPasswordForm from '../components/profile/ResetPasswordForm.vue';

    export default {
        name: 'profilepage',
        components: {
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
