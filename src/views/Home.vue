<template>
  <div class="home">


<!--    &lt;!&ndash; TradingView Widget BEGIN &ndash;&gt;-->
<!--    <div class="tradingview-widget-container">-->
<!--      <div id="tradingview_85d7b"></div>-->
<!--    </div>-->
<!--    &lt;!&ndash; TradingView Widget END &ndash;&gt;-->

<!--    &lt;!&ndash; TradingView Widget BEGIN &ndash;&gt;-->
<!--    <div class="tradingview-widget-container">-->
<!--      <div id="tradingview_cff2a"></div>-->
<!--    </div>-->
<!--    &lt;!&ndash; TradingView Widget END &ndash;&gt;-->


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
