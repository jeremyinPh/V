<template>
  <div class="Predict">
    <h1>This is an personal Predict page</h1>
    <button @click="clickMe">click me jump to default page. baby</button>
  </div>
</template>


<script>
  export default {
    name: 'Predict',
    methods: {
      clickMe() {
        this.$router.replace('/');
      },
    },
  };
</script>
