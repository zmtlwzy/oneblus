<template>
  <section class="promo">
    <ul class="promoul">
      <li :class="['promo-item',`order-${index}`]" v-for="(item,index) in promo" :key="item.imgUrl">
        <a href="javascript:;">
          <div
            :id="`itembg-${index}`"
            :class="bgClass[index]"
            :style="{backgroundImage:`url(${item.imgUrl})`}"
          ></div>
        </a>
        <div :id="`itemtext-${index}`" :class="textClass[index]" :style="{color:item.color}">
          <div class="title">{{item.title}}</div>
          <div class="subtitle">{{item.subtitle}}</div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import Opbutton from "@/components/OpButton.vue";
import { mapState } from "vuex";
import { sleep } from "@/share.js";

function useScrollMagic(index, _this) {
  let sence = function() {
    return new ScrollMagic.Scene({
      triggerElement: `.promoul>.order-${index}`, //触发元素
      triggerHook: 1, //触发元素开始离开视口时触发
      offset: 280 //从开始点滚动多少px触发
    });
  };
  return sence().on("progress", function({ progress }) {
    if (index === 0) _this.fir = progress;
    if (index === 2) _this.sec = progress;
  });
}

export default {
  data() {
    return {
      delay: 250,
      fir: false,
      sec: false,
      textClass: new Array(4).fill().map(() => ({
        "promo-item-text": true,
        loaded: false
      })),
      bgClass: new Array(4).fill().map(() => ({
        "promo-item-bg": true,
        loaded: false
      }))
    };
  },

  watch: {
    fir: async function(newValue) {
      if (newValue) {
        this.textClass[0]["loaded"] = true;
        this.bgClass[0]["loaded"] = true;
        await sleep(this.delay);
        this.textClass[1]["loaded"] = true;
        this.bgClass[1]["loaded"] = true;
      } else {
        this.textClass[0]["loaded"] = false;
        this.bgClass[0]["loaded"] = false;
        await sleep(this.delay);
        this.textClass[1]["loaded"] = false;
        this.bgClass[1]["loaded"] = false;
      }
    },
    sec: async function(newValue) {
      if (newValue) {
        this.textClass[2]["loaded"] = true;
        this.bgClass[2]["loaded"] = true;
        await sleep(this.delay);
        this.textClass[3]["loaded"] = true;
        this.bgClass[3]["loaded"] = true;
      } else {
        this.textClass[2]["loaded"] = false;
        this.bgClass[2]["loaded"] = false;
        await sleep(this.delay);
        this.textClass[3]["loaded"] = false;
        this.bgClass[3]["loaded"] = false;
      }
    }
  },
  components: {
    Opbutton
  },
  mounted() {
    let controller = new ScrollMagic.Controller();
    for (let index = 0; index < 4; index += 2) {
      useScrollMagic(index, this).addTo(controller);
    }
  },
  computed: {
    ...mapState(["promo"])
  },
  methods: {}
};
</script>

<style lang='scss'>
.promo {
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 500px);
    padding: 0 10px;
    gap: 10px;
    margin-bottom: 10px;
    li {
      position: relative;
      a {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #f6f6f6;
        box-sizing: border-box;
        .promo-item-bg {
          width: 100%;
          height: 100%;
          background-size: cover;
          background: center center no-repeat;
          transform: scale(1.02);
          transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .loaded {
          transform: scale(1);
        }
      }
      .promo-item-text {
        position: absolute;
        top: 20px;
        left: 50%;
        text-align: center;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        transform: translateX(-50%);
        .title {
          margin-top: 2px;
          font-size: 30px;
          line-height: 1.5;
        }
        .subtitle {
          font-size: 20px;
          line-height: 1.1;
        }
      }
      .loaded {
        opacity: 1;
      }
    }
  }
}
</style>