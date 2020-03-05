<template>
  <div id="home_main_content" style="background: blue">

    <h1>Hello World</h1>
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

<style>
  #home_main_content {
    z-index: 2;
    position: relative;
    display: inline-block;

    /* Vertical center */
    top: 50%;
    transform: translateY(-50%);
  }

</style>
