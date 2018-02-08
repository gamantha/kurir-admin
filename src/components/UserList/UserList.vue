<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserList',
  data() {
    return {};
  },
  methods: {
    async initUser() {
      await this.$store.dispatch('gets');
    },
  },
  created() {
    this.initUser();
  },
};
</script>

<style scoped>

</style>
