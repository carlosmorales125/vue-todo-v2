<template>
    <div class="profile-form">
        <h2 class="title is-2">Profile</h2>
        <form class="profile-form" @submit.prevent>
            <ProfileItem labelText="Name:"
                         :currentValue="user.name"
                         inputType="text"
                         :stateUpdateMethod="changeName"
            >
            </ProfileItem>
            <ProfileItem labelText="Email:"
                         :currentValue="user.email"
                         inputType="email"
                         :stateUpdateMethod="changeEmail"
            >
            </ProfileItem>
        </form>
    </div>
</template>
<script>
    import ProfileItem from './ProfileItem.vue';
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'profileform',
        components: {
            ProfileItem,
        },
        computed: mapState({
            user: state => state.profile.user,
        }),
        methods: {
            ...mapActions({
                changeName: 'changeName',
                changeEmail: 'changeEmail',
            }),
        }
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
