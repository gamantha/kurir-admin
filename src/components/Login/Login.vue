<template>
  <div class="background">
    <div class="ui middle aligned centered grid">
      <div class="column">
        <h2 class="ui teal image header">
          <img src="../../assets/logo.png" class="ui image">
          <div class="content">Kurir.id Admin Login</div>
        </h2>
        <div class="ui form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input" placeholder="Username/Email address">
                <input
                v-model="username"
                name="username"
                placeholder="Username/Email address">
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input" type="password" placeholder="Password">
                <input
                v-model="password"
                name="password"
                type="password"
                placeholder="Password">
                <i class="lock icon"></i>
              </div>
            </div>
            <button
            @click="onClickLogin(username, password)"
            role="button"
            class="ui teal fluid large button">Login</button>
          </div>
        </div>
        <div class="ui message">Don't have account?
          <a href="#">Request to us</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async onClickLogin(username, password) {
      this.$store.dispatch('login', { username, password });
    },
  },
  computed: {
    ...mapGetters(['loading', 'message']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background-color: #dadada !important;
  height: 100vh;
  margin: 1em 0;
}

.column {
  max-width: 450px;
  text-align: center !important;
}

.grid {
  height: 100%;
}
</style>
