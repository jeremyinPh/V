<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="clickMe">click me jump to default page. baby</button>
  </div>
</template>


<script>
export default {
  name: 'about',
  methods: {
    clickMe() {
      this.$router.replace('/');
    },
  },
};
</script>
