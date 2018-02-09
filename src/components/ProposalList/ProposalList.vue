<template>
  <div>
    <data-tables
    :data="proposals"
    :checkbox-filter-def="checkboxFilterDef"
    :table-props="tableProps">
    >
      <el-table-column
        v-for="title in titles"
        :prop="title.prop"
        :label="title.label"
        :key="title.label"
        sortable="custom">
    </el-table-column>
    <el-table-column label="Actions" min-width="100px">
      <template scope="scope">
        <el-button v-for="button in customButtonsForRow(scope.row)" :key="button.name" type="text" @click="button.handler">
          {{ button.name }}
        </el-button>
      </template>
    </el-table-column>
  </data-tables>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProposalList',
  data() {
    return {
      titles: [
        {
          prop: 'User',
          label: 'User Email',
        },
        {
          prop: 'status',
          label: 'Status',
        },
        {
          prop: 'proposeDate',
          label: 'Propose Date',
        },
        {
          prop: 'rejectDate',
          label: 'Reject Date',
        },
        {
          prop: 'acceptDate',
          label: 'Accept Date',
        },
        {
          prop: 'rejectReason',
          label: 'Reject Reason',
        },
        {
          prop: 'idLink',
          label: 'KTP',
        },
        {
          prop: 'photoLink',
          label: 'Photo',
        },
      ],
      checkboxFilterDef: {
        colProps: {
          span: 19,
        },
        props: 'status',
        def: [
          {
            code: 'waiting',
            name: 'Waiting',
          },
          {
            code: 'verified',
            name: 'Verified',
          },
          {
            code: 'rejected',
            name: 'Rejected',
          },
        ],
      },
      tableProps: {
        border: false,
        stripe: false,
      },
    };
  },
  methods: {
    async initUser() {
      const res = await this.$store.dispatch('gets');
    },
    handleClick(command) {
      this.$message(`click drapdown button ${command}`);
    },
    customButtonsForRow(row) {
      if (row.status === 'waiting') {
        return [
          {
            name: 'Accept',
            handler: _ => {
              this.$message(`Accepted user ${row.User}`);
            },
          },
          {
            name: 'Reject',
            handler: _ => {
              this.$message(`Rejected ${row.User}`);
            },
          },
        ];
      } else {
        return [
          {
            name: 'Waiting',
            handler: _ => {
              this.$message(`${row.User} status now waiting`);
            },
          },
        ];
      }
    },
  },
  mounted() {
    const init = this.initUser();
  },
  computed: {
    ...mapGetters(['proposals']),
  },
};
</script>

<style scoped>

</style>
