<template>
  <div class="headerWrap">
    <router-link to="/"><span class="fontHead">TIL</span></router-link>
    <template v-if="isUserLogin">
      <span class="user">by {{ $store.state.username }}</span>
      <div class="routerWrap">
        <a href="javascript:;" @click="logoutUser">Logout</a>
      </div>
    </template>
    <div class="routerWrap">
      <template v-if="!isUserLogin">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.headerWrap {
  height: 70px;
  padding: 0 3% 0;
  background: rgb(15, 195, 195);
  color: #fff;
  line-height: 70px;
}
.fontHead {
  font-size: 30px;
  font-weight: bold;
}
.user {
  font-size: 15px;
}
.routerWrap {
  float: right;
  font-weight: bold;
}
a {
  color: #fff;
  text-decoration: none;
  margin: 0 2% 0 0;
}
</style>
