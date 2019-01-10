<template>
    <form class="login-form" @submit.prevent>
        <div class="field">
            <div class="control">
                <input class="input" type="email" placeholder="Email">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="password" placeholder="Password">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-link" @click.prevent="submitSignInForm">
                    Login
                </button>
                <router-link to="/signup" class="button is-primary">
                    Sign Up
                </router-link>
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'loginform',
        methods: {
            submitSignInForm() {
                //todo: make this work
            },
        },
    };
</script>
<style scoped>
    .login-form {
        padding: 0 10%;
    }
    .button {
        margin-right: 10px;
    }
    .field:nth-child(2) {
        margin-bottom: 20px !important;
    }
</style>
