<template>
  <div class="navMenu">
    <ul :class="{'top':!isTop}">
      <li
        v-for="(data,index) in navMenuData"
        :key="index"
        @mouseenter="enter(index)"
        @mouseleave="leave(index)"
        ref="li"
      >
        <a href="javascript:;">{{data.title}}</a>
        <navmenuitem v-if="data.hasOwnProperty('showItem')" :show="data.showItem">
          <template v-slot:default>
            <li v-for="(item,indexSub) in data.children" :key="indexSub">
              <a href="javascript:;">
                <i :class="['ico', `${item.icon}`]"></i>
                <span class="W5">{{item.title}}</span>
              </a>
            </li>
          </template>
        </navmenuitem>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Navmenuitem from "@/components/NavMenuItem.vue";
export default {
  props:{
    isTop:{
      type:Boolean,
      default:true,
      required:true
    }
  },
  computed: {
    ...mapState(["navMenuData"])
  },
  methods: {
    enter(index, data) {
      this.$refs.li[index].style.borderBottomColor = "red";
      this.navMenuData[index].showItem = true;
    },
    leave(index, data) {
      this.$refs.li[index].style.borderBottomColor = "transparent";
      this.navMenuData[index].showItem = false;
    }
  },
  components: {
    Navmenuitem
  }
};
</script>

<style lang="scss">
.line {
  border-bottom: 2px solid red;
}
.navMenu {
  text-align: center;
  color: #333;
  > ul {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height .25s ease-out;
    &.top{
      height:40px;
    }
    > li {
      padding: 0 20px;
      height: 100%;
      box-sizing: border-box;
      border-bottom: 2px solid transparent;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      > a {
        display: inline-block;
        text-decoration: none;
        color: #111;
        margin-top: -1px;
        font-size: 14px;
      }
    }
  }
}
</style>
