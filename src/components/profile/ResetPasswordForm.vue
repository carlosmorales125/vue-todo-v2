<template>
    <div class="reset-password-form">
        <h2 class="title is-3">Password Reset</h2>
        <form @submit.prevent>
            <div class="field">
                <div class="control">
                    <label class="label">Current Password</label>
                </div>
                <div class="control">
                    <input class="input" type="password" placeholder="Current Password">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="label">New Password</label>
                </div>
                <div class="control">
                    <input class="input" type="password" placeholder="New Password">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="label">Confirm New Password</label>
                </div>
                <div class="control">
                    <input class="input" type="password" placeholder="Confirm New Password">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'resetpasswordform',
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
