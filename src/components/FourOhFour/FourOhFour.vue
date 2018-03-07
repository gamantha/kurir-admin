<template>
  <div id="main">
    <h1>404</h1>
    <h3>We're thinking you are lost in the middle of the internet.</h3>
    <p>It doesn't matter though. Maybe go to <router-link to="/">login page?</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'FourOhFour',
  data() {
    return {};
  },
};
</script>

<style scoped>
#main {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -200px;
  z-index: 15;
}
</style>
