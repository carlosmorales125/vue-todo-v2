<template>
    <form class="login-form" @submit.prevent>
        <div class="field">
            <div class="control">
                <input class="input" type="email" placeholder="Email" v-model="email">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
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
    import { mapActions } from 'vuex';

    export default {
        name: 'loginform',
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
            submitSignInForm() {
                this.login({
                    username: this.email,
                    password: this.password
                });
            },
            ...mapActions({
                login: 'login',
            }),
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
