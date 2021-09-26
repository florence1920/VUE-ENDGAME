<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    {{ logMessage }}
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
export default {
  data() {
    return {
      username: '',
      password: '',
      //log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const Userdata = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(Userdata);
      console.log(data.user.username);
      this.logMessage = `${data.user.username} 님환영합니다`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
