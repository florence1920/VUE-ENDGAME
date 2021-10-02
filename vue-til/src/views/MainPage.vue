<template>
  <div>
    <h1>Today I Learned</h1>
    <div v-if="isLoading">
      <h1>
        Loading
      </h1>
    </div>
    <ul v-else class="post">
      <PostListItem
        v-for="postItem in postItems"
        v-bind:key="postItem._id"
        :postItem="postItem"
      ></PostListItem>
    </ul>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/index';
export default {
  components: {
    PostListItem,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped></style>
