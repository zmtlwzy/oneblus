<template>
  <nav id="series-slide" :class="{show:show}">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
#series-slide {
  display: none;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  border-top: 1px solid #ccc;
  overflow: hidden;
  box-sizing: border-box;
  &.show {
    display: block;
  }
  > ul {
    min-height: 160px;
    display: flex;
    justify-content: center;
    > li {
      width: 132px;
      padding: 10px 10px 0;
      margin-top: 20px;
      > a {
        color: black;
        &:hover {
          color: #eb0028;
        }
        > .ico {
          display: block;
          margin-bottom: 10px;
          font-family: one;
          font-style: normal;
          font-variant: normal;
          font-weight: 400;
          text-decoration: none;
          text-transform: none;
          height: 1em;
          font-size: 40px;
        }
        > span {
          font-size: 14px;
        }
      }
    }
  }
}

.ico-head-9t::before {
  content: "\E02A";
}
.ico-head-9t-pro::before {
  content: "\E028";
}
.ico-head-phone::before {
  content: "\E037";
}
.ico-head-audio::before {
  content: "\E02B";
}
.ico-head-cases-protection::before {
  content: "\E02D";
}
.ico-head-power-cables::before {
  content: "\E038";
}
.ico-head-bundles::before {
  content: "\E02C";
}
.ico-head-gear::before {
  content: "\E02E";
}
</style>