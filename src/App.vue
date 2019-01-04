<template>
  <div id="app" class="container">
      <router-view name="header"/>
      <main>
          <router-view/>
      </main>
      <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
    #app {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1;
        display: flex;
        align-items: center;
    }
</style>
