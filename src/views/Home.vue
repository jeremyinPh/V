<template>

  <div>

    <div class="marquee site-footer"
         style="height: 35px; padding: 6px; position: relative; overflow: hidden;">
      <div style="position: absolute; left: -100px; width: 1184px; height: 35px;">
        Current
        <a href="https://inflationdata.com/Inflation/Consumer_Price_Index/HistoricalCPI.aspx">
          Consumer Price Index</a> (<a
        href="https://inflationdata.com/Inflation/Consumer_Price_Index/CPI.asp">CPI-U</a>)
        <span style="color: white;">257.971</span> | Current Annual
        <a href="https://inflationdata.com/Inflation/Inflation_Rate/CurrentInflation.asp">
          Inflation Rate</a> <span style="color: white;">2.49%</span> | Released
        <span style="color: white;">February 13, 2020</span> for the year ending
        <span style="color: white;">January 2020</span> |
        <a
          href="https://inflationdata.com/Inflation/Consumer_Price_Index/ConsumerPriceIndexReleaseDates.asp"
          target="_top">
          Next Data Release</a> <span style="color: white;">March 11<sup>th</sup>
			2020</span> |
      </div>
      <div style="position: absolute; left: 1084px; width: 1184px; height: 35px;">
        Current
        <a href="https://inflationdata.com/Inflation/Consumer_Price_Index/HistoricalCPI.aspx">
          Consumer Price Index</a> (<a
        href="https://inflationdata.com/Inflation/Consumer_Price_Index/CPI.asp">CPI-U</a>)
        <span style="color: white;">257.971</span> | Current Annual
        <a href="https://inflationdata.com/Inflation/Inflation_Rate/CurrentInflation.asp">
          Inflation Rate</a> <span style="color: white;">2.49%</span> | Released
        <span style="color: white;">February 13, 2020</span> for the year ending
        <span style="color: white;">January 2020</span> |
        <a
          href="https://inflationdata.com/Inflation/Consumer_Price_Index/ConsumerPriceIndexReleaseDates.asp"
          target="_top">
          Next Data Release</a> <span style="color: white;">March 11<sup>th</sup>
			2020</span> |
      </div>
    </div>

    <header>
      <h1>about my website</h1>
    </header>

    <section>

      <article>
        <h2>target</h2>

        <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack
          portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui
          pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B
          tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub
          hammock.</p>
      </article>

      <article>
        <h2>future</h2>

        <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack
          portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui
          pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B
          tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub
          hammock.</p>
      </article>

      <article>
        <h2>history</h2>

        <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack
          portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui
          pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B
          tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub
          hammock.</p>

        <p>Cray food truck brunch, XOXO +1 keffiyeh pickled chambray waistcoat ennui. Organic small
          batch paleo 8-bit. Intelligentsia umami wayfarers pickled, asymmetrical kombucha
          letterpress kitsch leggings cold-pressed squid chartreuse put a bird on it. Listicle
          pickled man bun cornhole heirloom art party.</p>
      </article>

      <article>
        <h2>history</h2>

        <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack
          portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui
          pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B
          tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub
          hammock.</p>

        <p>Cray food truck brunch, XOXO +1 keffiyeh pickled chambray waistcoat ennui. Organic small
          batch paleo 8-bit. Intelligentsia umami wayfarers pickled, asymmetrical kombucha
          letterpress kitsch leggings cold-pressed squid chartreuse put a bird on it. Listicle
          pickled man bun cornhole heirloom art party.</p>
      </article>

    </section>

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

<style scoped>

  header {
    background: purple;
    height: 100px;
  }

  h1 {
    text-align: center;
    color: white;
    line-height: 100px;
    margin: 0;
  }

  section {
    display: flex; /*布局方式 弹性盒子*/
    flex-direction: row; /*行还是列*/
  }

  article {
    padding: 10px;
    margin: 10px;
    background: aqua;
  }

</style>
