<template>
  <div>
    <navbar/>
    <div class="top">
      <data-tables
      :data="userList"
      :checkbox-filter-def="checkboxFilterDef"
      :table-props="tableProps"
      :pagination-def="paginationDef">
        >
        <el-table-column v-for="title in titles"
        :prop="title.prop"
        :label="title.label"
        :key="title.label"
        sortable="custom">
        </el-table-column>
      </data-tables>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '../Navbar/Navbar';

export default {
  name: 'UserList',
  components: {
    navbar: Navbar,
  },
  data() {
    return {
      titles: [
        {
          prop: 'id',
          label: 'User Id',
        },
        {
          prop: 'username',
          label: 'Username',
        },
        {
          prop: 'email',
          label: 'Email',
        },
        {
          prop: 'deletedAt',
          label: 'Deleted At',
        },
        {
          prop: 'role',
          label: 'Role',
        },
        {
          prop: 'isEmailValidated',
          label: 'Email Status',
        },
      ],
      checkboxFilterDef: {
        colProps: {
          span: 8,
        },
        props: 'role',
        def: [
          {
            code: 'sender',
            name: 'Sender',
          },
          {
            code: 'sender+kurir',
            name: 'Sender + Kurir',
          },
          {
            code: 'siteadmin',
            name: 'Officer (site admin)',
          },
        ],
      },
      tableProps: {
        border: true,
        stripe: false,
      },
      paginationDef: {
        pageSize: 5,
        pageSizes: [5, 10, 15],
        currentPage: 1,
      },
    };
  },
  methods: {
    async initUser() {
      await this.$store.dispatch('getUser');
    },
  },
  mounted() {
    this.initUser();
  },
  computed: {
    ...mapGetters(['userList']),
  },
};
</script>

<style scoped>
.top {
  margin: 20px;
}
</style>
