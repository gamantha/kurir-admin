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
