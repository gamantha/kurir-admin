<template>
  <div >
    <sui-table celled striped>
      <sui-table-header>
        <sui-table-row>
          <sui-table-headerCell colspan="4">
            Shipping Detail for package number {{ this.getSelectedItem.ticketNumber }}
          </sui-table-headerCell>
        </sui-table-row>
      </sui-table-header>

      <sui-table-body>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="envelope" /> Sender email
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.getSelectedItem.Sender.User.email }}</sui-table-cell>
          <!-- <sui-table-cell collapsing text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="archive" /> Package definition
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.getSelectedItem.name }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="user" /> Receiver name
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.getSelectedItem.Receiver.name }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="phone" /> Receiver phone
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.getSelectedItem.Receiver.phone }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="balance scale" /> Weight
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.getSelectedItem.weight }} Kilogram</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="home" /> Origin
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.getSelectedItem.from }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="paper plane" /> Destination
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.getSelectedItem.to }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="briefcase" /> Courier email
          </sui-table-cell>
          <sui-table-cell v-if="this.getSelectedItem.Courier" colspan="3">{{ 
            this.getSelectedItem.Courier.User.email
          }}</sui-table-cell>
          <sui-table-cell v-else colspan="3">
            <strong>Item ini belum punya kurir</strong>
          </sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="money" /> Item price for sender
          </sui-table-cell>
          <sui-table-cell colspan="3">Rp. {{ this.getSelectedItem.cost }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="dollar sign" /> Reward value for Courier
          </sui-table-cell>
          <sui-table-cell colspan="3">Rp. {{ this.getSelectedItem.reward }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="truck" /> Package status
          </sui-table-cell>
          <sui-table-cell colspan="2">{{ this.getSelectedItem.status }}</sui-table-cell>
          <sui-table-cell text-align="right">
            Last updated: {{ this.decodeDate(this.getSelectedItem.updatedAt) }} / <strong>{{ this.fromDate(this.getSelectedItem.updatedAt) }}</strong>
          </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
    </sui-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Helper from '../../helpers';

export default {
  name: 'ItemDetails',
  data() {
    return {
      detail: this.$route.params,
    };
  },
  methods: {
    fromDate(time) {
      return Helper.fromDate(time);
    },
    decodeDate(time) {
      return Helper.decodeDate(time);
    },
  },
  created() {
    this.detail = this.$route.params;
    // go to shipping list if data not available
    if (this.getSelectedItem.length < 1) {
      this.$router.push({
        name: 'ShippingList',
      });
    }
  },
  computed: {
    ...mapGetters(['getSelectedItem']),
  },
};
</script>

<style scoped>

</style>

