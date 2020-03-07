<template>
  <div class="hao123">
    <h1>This is an hao123 page</h1>
    <button @click="clickMe">click me jump to default page. baby</button>
  </div>
</template>


<script>
export default {
  name: 'hao123',
  methods: {
    clickMe() {
      this.$router.replace('/');
    },
  },
};
</script>
