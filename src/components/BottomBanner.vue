<template>
  <section class="thirdBanner W7">
    <div class="tran">
      <div :class="contentClass">
        <div class="text">
          <div class="h3">{{thirdBanner.title}}</div>
          <opbutton class="W5 btn" :color="thirdBanner.btnColor" small>{{thirdBanner.btnText}}</opbutton>
        </div>
        <div class="bg" :style="{backgroundImage:`url(${thirdBanner.url})`}"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Opbutton from "@/components/OpButton.vue";
import {sleep} from "@/share.js"
import { mapState } from "vuex";
export default {
  data() {
    return {
      contentClass: {
        content:true,
        'tran-load':false,
      }
    };
  },
  components: {
    Opbutton
  },
  computed: {
    ...mapState(["thirdBanner"])
  },
  mounted() {
    let _this = this
    let controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: ".tran", //触发元素
      triggerHook: 1, //触发元素开始离开视口时触发
      offset: 250 //从开始点滚动多少px触发（施法前摇）
    })
    .on("progress", async function({ progress }) {
      if (progress) {
      await sleep(50)
        _this.contentClass['tran-load'] = true;
      }else{
        _this.contentClass['tran-load'] = false;
      }
    })
    .addTo(controller);
  }
};
</script>

<style lang='scss'>
.thirdBanner {
  .tran {
    height: 37.5vw;
    overflow: hidden;
    margin-bottom: 10px;

    .content {
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(1.05);
      transition: transform 0.6s ease;
      &.tran-load {
        transform: scale(1);
      }
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 130px;
        justify-content: space-between;
        .h3 {
          text-align: center;
          font-size: 48px;
          line-height: 1.2;
          color: white;
        }
        
      }

      .bg {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: center center no-repeat;
        background-color: black;
        z-index: -2;
      }
    }
  }
}
</style>