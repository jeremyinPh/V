<template>
  <div class="centralbank">
    <h1>This is an central bank page</h1>
    <button @click="clickMe">click me jump to default page. baby</button>
  </div>
</template>


<script>
  export default {
    name: 'central bank',
    methods: {
      clickMe() {
        this.$router.replace('/');
      },
    },
  };
</script>
