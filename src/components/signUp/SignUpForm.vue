<template>
    <form class="sign-up-form" @submit.prevent>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Enter Your Name" v-model="name">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="Enter Your Email" v-model="email">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="Password" placeholder="Enter Your Password" v-model="password">
            </div>
        </div>
        <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
                <input class="input" type="Password" placeholder="Confirm Your Password" v-model="confirmPassword">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-link" @click.prevent="submitSignUpForm">
                    Sign Up
                </button>
                <router-link to="/login" class="button is-primary">
                    Go To Login
                </router-link>
            </div>
        </div>
    </form>
</template>
<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'signupform',
        methods: {
            ...mapActions({
                createUser: 'createUser'
            }),
            submitSignUpForm() {
                this.createUser({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                });
            },
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            };
        },
    };
</script>
<style scoped>
    .sign-up-form {
        padding: 0 10%;
    }
    .button {
        margin-right: 10px;
    }
    .field:nth-child(4) {
        margin-bottom: 20px !important;
    }
</style>
