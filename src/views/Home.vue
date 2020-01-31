<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  computed: { // 计算属性
    routes() {
      return this.$store.state.routes;
    },
  },
  methods: {
    gochat() {
      this.$router.push('/chat');
    },
  },
};
</script>
