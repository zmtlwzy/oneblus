<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");

@font-face {
  font-family: MYingHei W5;
  src: url(https://statics.oneplus.cn/ov/assets/fonts/MYingHeiPRC/MYingHeiPRC-W5.woff?18ce36aa);
}
@font-face {
  font-family: MYingHei W7;
  src: url(https://statics.oneplus.cn/ov/assets/fonts/MYingHeiPRC/MYingHeiPRC-W7.woff?13898d7d);
}
@font-face {
  font-family: SlateForOnePlusRegular;
  src: url(https://statics.oneplus.cn/v2/fonts/SlateForOnePlus/SlateForOnePlusRegular.woff2?1497889858);
}

@font-face {
  font-family: one;
  src: url(https://statics.oneplus.cn/ov/assets/fonts/one/one.eot?1b411afe);
  src: url(https://statics.oneplus.cn/ov/assets/fonts/one/one.eot?1b411afe?#iefix)
      format("eot"),
    url(https://statics.oneplus.cn/ov/assets/fonts/one/one.woff2?ba4621fc)
      format("woff2"),
    url(https://statics.oneplus.cn/ov/assets/fonts/one/one.woff?c4d9d278)
      format("woff"),
    url(https://statics.oneplus.cn/ov/assets/fonts/one/one.ttf?0079a354)
      format("truetype"),
    url(https://statics.oneplus.cn/ov/assets/fonts/one/one.svg?e684098c#one)
      format("svg");
}

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4 {
  font: inherit;
}
input,
select,
button {
  font: inherit;
}

html,
body {
  -webkit-font-smoothing: antialiased;
  /* -webkit-user-select: none; */
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  font-family: MYingHei W5, SlateForOnePlusRegular, Microsoft Yahei, sans-serif;
}

.W5 {
  font-family: MYingHei W5, SlateForOnePlusRegular, Microsoft Yahei, sans-serif;
}
.W7 {
  font-family: MYingHei W7, SlateForOnePlusRegular, Microsoft Yahei, sans-serif;
}
.SL {
  font-family: SlateForOnePlusRegular, Microsoft Yahei;
}
</style>
