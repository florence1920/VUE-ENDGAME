<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="title">Title: </label>
      <input id="title" type="text" v-model="title" />
    </div>
    <div>
      <label for="contents">Contents: </label>
      <textarea id="contents" type="text" v-model="contents" />
    </div>
    <p v-if="!isContentsValid" class="validation-text">Text is Too Long</p>
    <button type="submit">글 등록</button>
    <p class="log">
      {{ logMessage }}
    </p>
  </form>
</template>

<script>
import { createPost } from '@/api/index';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
  },
};
</script>

<style></style>
