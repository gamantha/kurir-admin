<template>
  <div >
    <sui-table celled striped>
      <sui-table-header>
        <sui-table-row>
          <sui-table-headerCell colspan="4">Shipping Detail for package number {{ this.detail.ticketNumber }}</sui-table-headerCell>
        </sui-table-row>
      </sui-table-header>

      <sui-table-body>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="envelope" /> Sender email
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.detail.Sender.User.email }}</sui-table-cell>
          <!-- <sui-table-cell collapsing text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="archive" /> Package definition
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.detail.name }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="user" /> Receiver name
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.detail.Receiver.name }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="phone" /> Receiver phone
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.detail.Receiver.phone }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="balance scale" /> Weight
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.detail.weight }} Kilogram</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="home" /> Origin
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.detail.from }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="paper plane" /> Destination
          </sui-table-cell>
          <sui-table-cell colspan="3">{{ this.detail.to }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>
            <sui-icon name="briefcase" /> Courier email
          </sui-table-cell>
          <sui-table-cell v-if="this.detail.Courier" colspan="3">{{ 
            this.detail.Courier.User.email
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
          <sui-table-cell colspan="3">Rp. {{ this.detail.cost }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="dollar sign" /> Reward value for Courier
          </sui-table-cell>
          <sui-table-cell colspan="3">Rp. {{ this.detail.reward }}</sui-table-cell>
          <!-- <sui-table-cell text-align="right">10 hours ago</sui-table-cell> -->
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell collapsing>
            <sui-icon name="truck" /> Package status
          </sui-table-cell>
          <sui-table-cell colspan="2">{{ this.detail.status }}</sui-table-cell>
          <sui-table-cell text-align="right">
            Last updated: {{ this.decodeDate(this.detail.updatedAt) }} / <strong>{{ this.fromDate(this.detail.updatedAt) }}</strong>
          </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
    </sui-table>
  </div>
</template>

<script>
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
    if (!this.detail.name) {
      this.$router.push({
        name: 'ShippingList',
      });
    }
  },
};
</script>

<style scoped>

</style>

