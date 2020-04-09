<template>
  <section class="Banner W7">
    <div class="top">
      <a href="javascript:;">
        <div class="text">
          <div class="title W5">{{topBanner.text.title}}</div>
          <div class="desc W5">{{topBanner.text.desc}}</div>
          <a class="link W5" href="javascript:;">
            <span>{{topBanner.text.link.text}}</span>
            <i :class="['fa', `fa-${topBanner.text.link.icon}`]"></i>
          </a>
        </div>
        <div class="bg" :style="{backgroundImage:`url(${topBanner.url})`}"></div>
      </a>
    </div>
    <narrowbanner
      v-for="(item,index) in narrowBanner"
      :key="index"
      :content="Object.assign({index},item)"
    ></narrowbanner>
  </section>
</template>

<script>
import Narrowbanner from "@/components/NarrowBanner.vue";
import { mapState } from "vuex";
export default {
  components: {
    Narrowbanner
  },
  computed: {
    ...mapState(["topBanner", "narrowBanner"])
  },
};
</script>

<style lang='scss'>
.Banner {
  .top {
    margin-bottom: 10px;
    height: 300px;
    > a {
      display: block;
      height: 100%;
      font-style: normal;
      text-decoration: none;
      color: black;
      position: relative;
      .text {
        font-size: inherit;
        position: absolute;
        left: 15%;
        height: 100%;
        padding: 0 3em;
        text-align: left;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          font-size: 30px;
          font-weight: 400;
        }
        .desc {
          font-size: 16px;
          white-space: pre-line;
          margin: 20px 0 40px 0;
          line-height: 1.5;
        }
        .link {
          display: inline-block;
          color: white;
          font-size: 14px;
          span:hover {
            text-decoration: underline;
          }
          i {
            font-size: 20px;
            margin-left: 3px;
            position: relative;
            top: 1.3px;
          }
        }
      }
      .bg {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
    }
  }
}
#narrow-banner-1 {
  .title {
    font-size: 18px;
    line-height: 1.5;
  }
}
</style>