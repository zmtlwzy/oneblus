<template>
  <div class="num-label">
    <div class="content">
      <ul>
        <li v-for="item in numLabel" :key="item.icon">
          <a href="javascript:;">
            <div class="text" v-if="typeof item.icon === 'number'">{{item.icon}}</div>
            <div class="icon" v-else>
              <i :class="['fa', `fa-${item.icon}`]"></i>
            </div>
            <span>{{item.desc}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["numLabel"])
  },
  methods: {}
};
</script>

<style lang='scss'>
.num-label {
  .content {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ddd;
    ul {
      flex: 1;
      display: flex;
      height: 200px;
      max-width: 1200px;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          text-align: center;
          .text,
          .icon {
            font-size: 25px;
            font-weight: 900;
            color: black;
            position: relative;
            margin-bottom: 30px;

            &::before {
              content: "";
              display: block;
              position: absolute;
              top: -5px;
              left: 50%;
              transform: translateX(-50%);
              border-radius: 50%;
              width: 40px;
              height: 40px;
              border: 1.5px solid black;
            }
          }
          span {
            color: #565b62;
          }
        }
        &:nth-child(2) {
          a .text::before {
            left: 51%;
          }
        }
      }
    }
  }
}
</style>