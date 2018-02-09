<template>
  <div>
    <data-tables
    :data="proposals"
    :checkbox-filter-def="checkboxFilterDef"
    :table-props="tableProps"
    :pagination-def="paginationDef"
    >
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
      message: null,
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
      await this.$store.dispatch('gets');
    },
    async updatePropose(payload) {
      await this.$store.dispatch('updatePropose', payload);
      this.$notify({
        group: 'proposal',
        title: 'Info',
        text: this.proposalMessage,
      });
    },
    customButtonsForRow(row) {
      if (row.status === 'waiting') {
        return [
          {
            name: 'Accept',
            handler: _ => {
              const payload = {
                status: 'verified',
                userId: row.UserId,
              };
              this.updatePropose(payload);
              // this.$message(`${row.User} diterima sebagai kurir`);
            },
          },
          {
            name: 'Reject',
            handler: _ => {
              const payload = {
                status: 'rejected',
                userId: row.UserId,
              };
              this.updatePropose(payload);
              // this.$message(`${row.User} ditolak sebagai kurir`);
            },
          },
        ];
      } else {
        return [
          {
            name: 'Waiting',
            handler: _ => {
              const payload = {
                status: 'waiting',
                userId: row.UserId,
              };
              this.updatePropose(payload);
              // this.$message(`${row.User} statusnya waiting`);
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
    ...mapGetters(['proposals', 'proposalMessage']),
  },
};
</script>

<style scoped>

</style>
