<template>
    <div class="reset-password-form" @submit.prevent>
        <h2 class="title is-3">Password Reset</h2>
        <form @submit.prevent>
            <div class="field">
                <div class="control">
                    <label class="label">Current Password</label>
                </div>
                <div class="control">
                    <input class="input"
                           type="password"
                           placeholder="Current Password"
                           v-model="currentPassword"
                    >
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="label">New Password</label>
                </div>
                <div class="control">
                    <input class="input"
                           type="password"
                           placeholder="New Password"
                           v-model="newPassword"
                    >
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="label">Confirm New Password</label>
                </div>
                <div class="control">
                    <input class="input"
                           type="password"
                           \placeholder="Confirm New Password"
                           v-model="confirmNewPassword"
                    >
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button is-primary"
                            @click="submitChangePassword"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'resetpasswordform',
        methods: {
            ...mapActions({
                changePassword: 'changePassword'
            }),
            submitChangePassword() {
                this.changePassword({
                    id: this.id,
                    currentPassword: this.currentPassword,
                    password: this.newPassword,
                    confirmPassword: this.confirmNewPassword
                });
            }
        },
        data() {
            return {
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: '',
            };
        },
        computed: {
            ...mapState({
                id: state => state.profile.user.id
            })
        },
    };
</script>
<style>
    .reset-password-form {
        margin-bottom: 40px;
    }
    .reset-password-form .title {
        text-align: center;
    }
</style>
