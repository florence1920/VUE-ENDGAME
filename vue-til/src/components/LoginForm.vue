<template>
  <form @submit.prevent="submitForm" class="formWrap">
    <div>
      <label for="username">id:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button
      v-bind:disabled="!isUsernameValid || !password"
      type="submit"
      class="btnWrap"
    >
      로그인
    </button>
    {{ logMessage }}
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation.js';
export default {
  data() {
    return {
      username: '',
      password: '',
      //log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const Userdata = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(Userdata);
        console.log(data.token);
        this.$store.commit('setToken', data.token);
        this.$store.commit('setUsername', data.user.username);
        //메인 페이지로 이동 <router-link to></router-link>
        this.$router.push('/main');
      } catch (error) {
        //console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
.formWrap {
  background: #fff;
  padding: 5%;
}
label {
  width: 80px;
  display: inline-block;
}
</style>
