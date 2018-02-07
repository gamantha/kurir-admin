<template>
  <div class="background">
    <div class="ui middle aligned centered grid">
      <div class="column">
        <h2 class="ui teal image header">
          <img src="../assets/logo.png" class="ui image">
          <div class="content">Kurir.id Admin Login</div>
        </h2>
        <div class="ui form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input" placeholder="Username/Email address">
                <input placeholder="Username/Email address">
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input" type="password" placeholder="Password">
                <input type="password" placeholder="Password">
                <i class="lock icon"></i>
              </div>
            </div>
            <button role="button" class="ui teal fluid large button">Login</button>
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
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
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

/* h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
