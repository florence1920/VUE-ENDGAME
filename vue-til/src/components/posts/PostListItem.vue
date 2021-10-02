<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  width: 100%;
  height: 150px;
  padding: 2%;
  background: #fff;
  list-style: none;
  position: relative;
}
.post .post-title {
  font-size: 20px;
  font-weight: bold;
}

.post .post-contents {
  margin: 1.5% 0;
  font-size: 15px;
}

.post .post-time {
  font-size: 12px;
  color: rgb(167, 167, 167);
  position: absolute;
  bottom: 10px;
  right: 15px;
}
</style>
