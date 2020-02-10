<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>ccccc</h1>
  </div>
</template>

<script>

  export default {
    name: 'home',
    computed: {      // 计算属性
      routes() {
        return this.$store.state.routes;
      },
    },
    methods: {},
  };
</script>
