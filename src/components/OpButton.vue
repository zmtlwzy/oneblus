<template>
  <div :class="color">
    <a href="javascript:;" :style="small?smallcss:''">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "black"
    },
    small: {
      type: Boolean
    }
  },
  data() {
    return {
      smallcss: {
        fontSize: "14px",
        padding: "0 28.5px",
        height: "36px",
        lineHeight: "36px",
        borderRadius: "0",
        borderWidth: "2px"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$btn_black: #101920;
$btn_white: white;
$btn_red: #eb0028;
$btn_dark_red: #b8001f;

@mixin theme($bgcolor, $fontcolor, $small: false, $changeFontColor: true) {
  a {
    border: 1px solid $bgcolor;
    z-index: 1;
    @if $small==false {
      overflow: hidden;
    }
    @if $changeFontColor {
      color: $bgcolor;
      &::before {
        background-color: $bgcolor;
      }
      &:hover {
        color: $fontcolor;
      }
    } @else {
      color: $btn_white;
      background-color: $bgcolor;
      &::before {
        background-color: $fontcolor;
      }
    }
  }
}

.button {
  a {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 3em;
    text-decoration: none;
    background-color: transparent;
    border-radius: 2px;
    font-weight: 300;
    position: relative;
    transition: all 0.3s cubic-bezier(0, 0.7, 0.3, 1);

    &::before {
      content: "";
      display: block;
      position: absolute;
      border-radius: 2px;
      top: -1px;
      left: -1px;
      width: 0;
      height: calc(100% + 1.5px);
      z-index: -1;
      transform: scale(1.01);
      transition: all 0.3s cubic-bezier(0, 0.7, 0.3, 1);
    }

    &:hover::before {
      width: calc(100% + 1px);
    }
  }
}
.black {
  @extend .button;
  @include theme($btn_black, $btn_white);
}
.white {
  @extend .button;
  @include theme($btn_white, $btn_black, true);
}
.red {
  @extend .button;
  @include theme($btn_red, $btn_dark_red, false, false);
}
</style>