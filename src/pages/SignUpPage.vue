<template>
    <div class="sign-up-page">
        <Logo :imageClass="imageClass"
              :imageSrc="imageSrc"
        ></Logo>
        <SignUpForm></SignUpForm>
    </div>
</template>
<script>
    import SignUpForm from '../components/signUp/SignUpForm.vue';
    import Logo from '../components/Logo.vue';

    export default {
        name: 'signupform',
        components: {
            SignUpForm,
            Logo,
        },
        data() {
            return {
                imageClass: 'is-3by1',
                imageSrc: 'https://dummyimage.com/720x240/3273dc/ffffff.png&text=Sign+Up+Logo',
            };
        },
    };
</script>
<style scoped>
    .sign-up-page {
        flex: 1;
    }
    @media only screen and (min-width: 769px) {
        .sign-up-page {
            padding: 0 20%;
        }
    }
</style>
