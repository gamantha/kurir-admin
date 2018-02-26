<template>
  <div>
    <navbar/>
    <div class="top">
    <sui-modal v-model="open">
      <sui-modal-header>Create New Site Admin</sui-modal-header>
      <sui-modal-content>
        <el-form status-icon :model="siteAdminForm" :rules="rules"
        ref="siteAdminForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="Username" prop="username">
            <el-input v-model="siteAdminForm.username"></el-input>
          </el-form-item>
          <el-form-item label="Email Address" prop="email">
            <el-input v-model="siteAdminForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="siteAdminForm.password"></el-input>
          </el-form-item>
          <el-form-item label="Retype Password" prop="retype">
            <el-input type="password" v-model="siteAdminForm.retype"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('siteAdminForm')">Create</el-button>
          </el-form-item>
        </el-form>
      </sui-modal-content>
    </sui-modal>
      <data-tables
      :data="proposals"
      :checkbox-filter-def="checkboxFilterDef"
      :table-props="tableProps"
      :actions-def="actionsDef"
      :pagination-def="paginationDef">
        >
        <el-table-column v-for="title in titles"
        :prop="title.prop"
        :label="title.label"
        :key="title.label"
        sortable="custom">
        </el-table-column>
        <el-table-column label="Actions" min-width="100px">
          <template slot-scope="scope">
            <el-button v-for="button in customButtonsForRow(scope.row)"
            :key="button.name"
            type="text"
            @click="button.handler">
              {{ button.name }}
            </el-button>
          </template>
        </el-table-column>
      </data-tables>
    </div>
  </div>
</template>

<script>
// import VueCookie from 'vue-cookie';
import { mapGetters } from 'vuex';
import Navbar from '../Navbar/Navbar';

export default {
  name: 'ProposalList',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.siteAdminForm.retype !== '') {
          this.$refs.siteAdminForm.validateField('retype');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.siteAdminForm.password) {
        callback(new Error("Password don't match"));
      } else {
        callback();
      }
    };
    return {
      open: false,
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
      actionsDef: {
        colProps: {
          span: 4,
        },
        def: [
          {
            name: 'Register',
            handler: () => {
              this.open = !this.open;
            },
          },
          {
            name: 'Reload',
            handler: () => {
              this.initProposal();
            },
          },
        ],
      },
      siteAdminForm: {
        email: '',
        username: '',
        password: '',
        retype: '',
        role: 'siteadmin',
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Invalid email',
            trigger: 'blur,change',
          },
        ],
        username: [
          {
            required: true,
            message: 'Please input username',
            trigger: 'blur',
          },
        ],
        password: [{ validator: validatePass, trigger: 'blur,change' }],
        retype: [{ validator: validatePass2, trigger: 'blur,change' }],
      },
      checkboxFilterDef: {
        colProps: {
          span: 6,
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
  components: {
    navbar: Navbar,
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.createSiteAdmin(this.siteAdminForm);
          return true;
        }
        return false;
      });
    },
    async createSiteAdmin(payload) {
      await this.$store.dispatch('createSiteAdmin', payload);
    },
    async initProposal() {
      await this.$store.dispatch('getProposal');
    },
    async updatePropose(payload) {
      await this.$store.dispatch('updateProposal', payload);
    },
    customButtonsForRow(row) {
      if (row.status === 'waiting') {
        return [
          {
            name: 'Accept',
            handler: () => {
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
            handler: () => {
              const payload = {
                status: 'rejected',
                userId: row.UserId,
              };
              this.updatePropose(payload);
              // this.$message(`${row.User} ditolak sebagai kurir`);
            },
          },
        ];
      }
      return [
        {
          name: 'Waiting',
          handler: () => {
            const payload = {
              status: 'waiting',
              userId: row.UserId,
            };
            this.updatePropose(payload);
            // this.$message(`${row.User} statusnya waiting`);
          },
        },
      ];
    },
  },
  mounted() {
    this.initProposal();
  },
  computed: {
    ...mapGetters(['proposals', 'proposalMessage']),
  },
};
</script>

<style scoped>
.top {
  margin: 20px;
}
</style>
