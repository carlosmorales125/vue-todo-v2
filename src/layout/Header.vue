<template>
    <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <img src="https://dummyimage.com/112x28/3273dc/ffffff.png&text=Todo" width="112" height="28">
                </router-link>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="profile" class="navbar-item">Profile</router-link>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <button class="button is-primary" @click="logout">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'mainnav',
        methods: {
            ...mapActions({
                logout: 'logout'
            })
        }
    };
</script>
<style>
    .navbar {
        margin-bottom: 40px;
    }
</style>
