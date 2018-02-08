<template>
  <div>
    <data-tables :data="users">
      <el-table-column
        v-for="title in titles"
        :prop="title.prop"
        :label="title.label"
        :key="title.label"
        sortable="custom">
    </el-table-column>
  </data-tables>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserList',
  data() {
    return {
      titles: [
        {
          prop: 'username',
          label: 'username',
        },
        {
          prop: 'role',
          label: 'role',
        },
      ],
    };
  },
  methods: {
    async initUser() {
      const res = await this.$store.dispatch('gets');
    },
  },
  mounted() {
    const init = this.initUser();
  },
  computed: {
    ...mapGetters(['users']),
  },
};
</script>

<style scoped>

</style>
