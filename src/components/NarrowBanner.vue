<template>
  <div class="narrow-banner W5" :id="`narrow-banner-${content.index}`">
    <div class="click" @click="handleclick">
      <div class="text">
        <div class="title">
          <span>{{content.title}}</span>
        </div>
        <div class="desc">
          <span>{{content.desc}}</span>
        </div>
        <div class="thir">{{content.thir}}</div>
        <opbutton :color="content.btnTheme">
          <span>{{content.btnText}}</span>
        </opbutton>
        <a v-if="content.link" class="link" href="javascript:;">
          <span>{{content.link}}</span>
        </a>
      </div>
      <div class="bg" :style="{backgroundImage:`url(${content.bgUrl})`}"></div>
    </div>
  </div>
</template>

<script>
import Opbutton from "@/components/OpButton.vue";

export default {
  components: {
    Opbutton
  },
  props: {
    content: Object
  },
  mounted() {
    let { index } = this.content;
    let controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: `#narrow-banner-${index}`, //触发元素
      triggerHook: 1, //触发元素开始离开视口时触发
      offset: 230 //从开始点滚动多少px触发
    })
    .setClassToggle(`#narrow-banner-${index}>.click`, "show")
    .addTo(controller);
  },
  methods: {
    handleclick() {
      window.location.href = "javascript:;";
    }
  }
};
</script>

<style lang="scss">
.narrow-banner {
  height: 680px;
  margin-bottom: 10px;
  background-color: black;
  overflow: hidden;
  > .click {
    display: block;
    height: 100%;
    font-style: normal;
    text-decoration: none;
    color: black;
    position: relative;
    cursor: pointer;
    transform: scale(1.02);
    opacity: 0;
    transition: all 0.8s ease;
    &.show {
      transform: scale(1);
      opacity: 1;
    }

    .text {
      font-size: inherit;
      position: absolute;
      left: 15%;
      height: 100%;
      padding: 0 3em;
      text-align: left;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .title {
      font-size: 45px;
      line-height: 1.2;
      span {
        cursor: text;
      }
    }
    .desc {
      font-size: 20px;
      line-height: 1.5;
      span {
        cursor: text;
      }
    }
    .thir {
      margin: 12px 0 40px 0;
      span {
        cursor: text;
      }
    }
    .link {
      display: inline-block;
      color: black;
      font-size: 16px;
      margin-top: 10px;
      span:hover {
        text-decoration: underline;
      }
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background: center center no-repeat;
      z-index: -2;
    }
  }
}
</style>