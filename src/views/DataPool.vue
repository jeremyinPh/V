<template>
  <div class="datapool">
    <h1>This is an data pool page</h1>
    <button @click="clickMe">click me jump to default page. baby</button>
  </div>
</template>


<script>
export default {
  name: 'datapool',
  methods: {
    clickMe() {
      this.$router.replace('/');
    },
  },
};
</script>
