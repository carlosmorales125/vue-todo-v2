<template>
    <div class="login-page">
        <LoginForm/>
    </div>
</template>
<script>
    import LoginForm from '../components/login/LoginForm.vue';

    export default {
        name: 'login',
        components: {
            LoginForm,
        },
    };
</script>
<style scoped>
    .login-page {
        flex: 1;
    }
</style>
