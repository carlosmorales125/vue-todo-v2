<template>
    <div class="login-page">
        <Logo :imageClass="imageClass"
              :imageSrc="imageSrc"
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
            Logo,
        },
        data() {
            return {
                imageClass: 'is-3by1',
                imageSrc: 'https://dummyimage.com/720x240/3273dc/ffffff.png&text=Todo+List+Logo',
            };
        },
    };
</script>
<style scoped>
    .login-page {
        flex: 1;
    }
    @media only screen and (min-width: 769px) {
        .login-page {
            padding: 0 20%;
        }
    }
</style>
