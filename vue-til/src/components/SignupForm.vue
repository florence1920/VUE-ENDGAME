<template>
  <form @submit.prevent="submitForm" class="formWrap">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button
      v-bind:disabled="!isUsernameValid || !password || !nickname"
      type="submit"
    >
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation.js';
export default {
  data() {
    return {
      //form value
      username: '',
      password: '',
      nickname: '',
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
      console.log('form 제출');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      //const response = await registerUser(userData); destructuring-->
      //console.log(resonse.data.username);
      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username} 님이 가입되없습니다`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
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
