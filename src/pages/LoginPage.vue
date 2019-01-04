<template>
    <div class="login-page">
        <Logo :logoSrc="logoPath"
              :logoSizeClass="logoSizeClass"
        />
        <LoginForm/>
    </div>
</template>
<script>
    import LoginForm from '../components/login/LoginForm.vue';
    import Logo from '../components/Logo.vue';

    export default {
        name: 'login',
        components: {
            LoginForm,
            Logo
        },
        data() {
            return {
                logoPath: 'https://11tx7b411ycc3zja3v2vhqz9-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/Banner@2x.png',
                logoSizeClass: 'is-3by1'
            }
        }
    };
</script>
<style scoped>
    .login-page {
        flex: 1;
    }
</style>
