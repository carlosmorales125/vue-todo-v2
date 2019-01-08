<template>
    <form class="profile-form" @submit.prevent>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" type="text" placeholder="">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="">
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'profileform',
    };
</script>
<style>

</style>
