<template>
  <div id="app" class="container">
      <router-view name="header"/>
      <div>
          <router-view/>
      </div>
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

}
</style>
