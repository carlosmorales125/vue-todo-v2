<template>
    <form class="sign-up-form" @submit.prevent>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Enter Your Name">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="Enter Your Email">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="Password" placeholder="Enter Your Password">
            </div>
        </div>
        <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
                <input class="input" type="Password" placeholder="Confirm Your Password">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <buttton class="button is-link" @click.prevent="submitSignUpForm">
                    Sign Up
                </buttton>
                <router-link to="/login" class="button is-primary">
                    Go To Login
                </router-link>
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'signupform',
        methods: {
            submitSignUpForm() {
                // todo: make this work
            },
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
