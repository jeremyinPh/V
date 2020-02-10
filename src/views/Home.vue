<template>
  <div class="home">


    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div id="tradingview_85d7b"></div>
    </div>
    <!-- TradingView Widget END -->

    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div id="tradingview_cff2a"></div>
    </div>
    <!-- TradingView Widget END -->


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
