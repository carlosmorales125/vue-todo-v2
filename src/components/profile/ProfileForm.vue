<template>
    <div class="profile-form">
        <h2 class="title is-2">Profile</h2>
        <form class="profile-form" @submit.prevent>
            <ProfileItem labelText="Name:"
                         currentValue="John Doe"
                         inputType="text"
            >
            </ProfileItem>
            <ProfileItem labelText="Email:"
                         currentValue="John.Doe@gmail.com"
                         inputType="email"
            >
            </ProfileItem>
        </form>
    </div>
</template>
<script>
    import ProfileItem from './ProfileItem.vue';

    export default {
        name: 'profileform',
        components: {
            ProfileItem,
        },
    };
</script>
<style scoped>
    .profile-form {
        margin-bottom: 40px;
    }
    .profile-form .title {
        text-align: center;
    }
</style>
