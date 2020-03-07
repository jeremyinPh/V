<template>
  <div class="history">
    <h1>This is an history page</h1>
    <button @click="clickMe">click me jump to default page. baby</button>
  </div>
</template>


<script>
export default {
  name: 'history',
  methods: {
    clickMe() {
      this.$router.replace('/');
    },
  },
};
</script>
