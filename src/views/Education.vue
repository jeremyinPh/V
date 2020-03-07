<template>
  <div class="edu">
    <h1>This is an edu page</h1>
    <button @click="clickMe">click me jump to default page. baby</button>
  </div>
</template>


<script>
export default {
  name: 'edu',
  methods: {
    clickMe() {
      this.$router.replace('/');
    },
  },
};
</script>
