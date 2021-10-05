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
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);

        this.$router.push('/main');
      } catch (error) {
        console.log(error.response.data);
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
