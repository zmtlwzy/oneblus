<template>
  <nav id="nav">
    <span class="nav_l">
      <a href="javascript:;">
        <logo :class="{'scale-logo':!_isTop}" />
      </a>
    </span>
    <navMenu :isTop="_isTop"></navMenu>
    <div class="nav_r">
      <ul>
        <li v-for="icon in icons.navRight" :key="icon">
          <a href="javascript:;">
            <i :class="['fa', `fa-${icon}`]"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import Logo from "./Logo.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      oldScrollTop: null,
      scrollTop: null,
      lastFlag: true,
    };
  },
  components: {
    NavMenu,
    Logo
  },
  computed: {
    ...mapState(["icons"]),
    _isTop() {
      if (Math.abs(this.scrollTop - this.oldScrollTop) > 10) {
        if (this.scrollTop > this.oldScrollTop) {
          this.lastFlag = false;
          return false;
        } else {
          this.lastFlag = true;
          return true;
        }
      }
      return this.lastFlag;
    }
  },
  mounted() {
    window.addEventListener("scroll", event => {
      this.oldScrollTop = this.scrollTop;
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
    });
  }
};
</script>

<style lang="scss">
#nav {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 10px 0 20px;
  color: #333;
  background-color: #fff;
  z-index: 990;
  .nav_l {
    font-size: 33px;
    a {
      color: #111;
      .scale-logo{
        transform: scale(.8);
      }
    }
  }

  .nav_r {
    font-size: 23px;
    align-self: stretch;
    ul {
      height: 100%;
      display: flex;
      li {
        height: 100%;
        a {
          width: 60px;
          height: 100%;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            color: #111;
          }
        }
      }
    }
  }
  .navMenu {
    flex: 1;
  }

}
</style>
