<template>
    <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="https://dummyimage.com/112x28/3273dc/ffffff.png&text=Todo" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Profile
                    </a>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                Log Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'mainnav',
    };
</script>
<style>
    .navbar {
        margin-bottom: 40px;
    }
</style>
