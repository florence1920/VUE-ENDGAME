<template>
  <div class="headerWrap">
    <router-link to="/main"><span>TIL</span></router-link>
    <div class="routerWrap">
      <span>{{ $store.state.username }}</span>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headerWrap {
  height: 70px;
  padding: 0 3% 0;
  background: rgb(15, 195, 195);
  color: #fff;
  line-height: 70px;
}
.headerWrap span {
  font-size: 30px;
  font-weight: bold;
}
.routerWrap {
  float: right;
  font-weight: bold;
}
a {
  color: #fff;
  text-decoration: none;
  margin: 0 10% 0 0;
}
</style>
