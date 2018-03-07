<template>
  <div id="main">
    <h1>You are not authorized to access this page</h1>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
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
  margin: -60px 0 0 -270px;
  z-index: 15;
}
</style>
