<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="routerView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
  name: 'app',
  components: {
    AppHeader,
  },
};
</script>

<style>
.routerView {
  padding: 0 3% 0;
  margin: 0 auto;
  width: 1100px;
}
.btnWrap {
  width: 120px;
  height: 40px;
}
input {
  width: 500px;
  height: 30px;
  margin: 0 0 20px 0;
  box-shadow: none;
  border-radius: 5px;
  border: 1px solid #dfdfdf;
}
input:focus {
  outline: none;
}
</style>
