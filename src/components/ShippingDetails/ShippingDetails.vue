<template>
  <div>
    <Navbar />
    <div class="top">
      <sui-modal v-model="isDetailsOpened">
        <sui-modal-header>
          Details for ticket number {{ this.selectedItem.ticketNumber }}
        </sui-modal-header>
        <sui-modal-content>
          <!-- <h3>Sender Info</h3>
          <p><strong>email:</strong> {{ this.selectedItem.Sender.User.email }}</p>
          <p><strong>username:</strong> {{ this.selectedItem.Sender.User.username }}</p>
          <h3>Receiver Info</h3>
          <p><strong>name:</strong> {{ this.selectedItem.Receiver.name }}</p>
          <p><strong>email:</strong> {{ this.selectedItem.Receiver.email }}</p>
          <p><strong>phone:</strong> {{ this.selectedItem.Receiver.phone }}</p>
          <p><strong>city:</strong> {{ this.selectedItem.Receiver.city }}</p>
          <p><strong>address:</strong> {{ this.selectedItem.Receiver.address }}</p> -->
          <h3>Package Info</h3>
          <p><strong>package name:</strong> {{ this.selectedItem.name }}</p>
          <p><strong>from:</strong> {{ this.selectedItem.from }}</p>
          <p><strong>to:</strong> {{ this.selectedItem.to }}</p>
          <p><strong>weight:</strong> {{ this.selectedItem.weight }}</p>
          <p><strong>category:</strong> {{ this.selectedItem.category }}</p>
          <p><strong>cost:</strong> {{ this.selectedItem.cost }}</p>
          <p><strong>package origin country:</strong> {{ this.selectedItem.country }}</p>
          <p><strong>package origin city:</strong> {{ this.selectedItem.city }}</p>
          <p><strong>package origin address:</strong> {{ this.selectedItem.address }}</p>
          <p><strong>note:</strong> {{ this.selectedItem.note }}</p>
          <p><strong>reward:</strong> {{ this.selectedItem.reward }}</p>
          <p><strong>type:</strong> {{ this.selectedItem.type }}</p>
          <h3>Package Status</h3>
          <p><strong>status:</strong> {{ this.selectedItem.status }}</p>
        </sui-modal-content>
      </sui-modal>
      <data-tables
      :data="items"
      :table-props="tableProps"
      :pagination-def="paginationDef"
      :search-def="searchDef"
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
import { mapGetters } from 'vuex';
import Navbar from '../Navbar/Navbar';

export default {
  name: 'ShippingDetails',
  data() {
    return {
      isDetailsOpened: false,
      selectedItem: {},
      titles: [
        {
          prop: 'ticketNumber',
          label: 'Ticket Number',
        },
        {
          prop: 'Sender.User.username',
          label: 'Sender',
        },
        {
          prop: 'Receiver.name',
          label: 'Receiver',
        },
        {
          prop: 'Courier',
          label: 'Courier',
        },
      ],
      tableProps: {
        border: true,
        stripe: false,
      },
      paginationDef: {
        pageSize: 5,
        pageSizes: [5, 10, 15],
        currentPage: 1,
      },
      searchDef: {
        inputProps: {
          placeholder: 'filter by ticket number',
          props: 'ticketNumber',
        },
      },
      customButtonsForRow(row) {
        const self = row;
        return [
          {
            name: 'Details',
            handler: () => {
              this.isDetailsOpened = !this.isDetailsOpened;
              this.selectedItem = this.getItemByTicketNumber(self.ticketNumber);
            },
          },
        ];
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async initItem() {
      await this.$store.dispatch('getItems');
    },
  },
  mounted() {
    this.initItem();
  },
  computed: {
    ...mapGetters(['items', 'getItemByTicketNumber']),
  },
};
</script>

<style>

</style>
