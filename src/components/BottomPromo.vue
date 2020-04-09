<template>
  <section class="bottom-promo">
    <div class="content">
      <ul>
        <li v-for="item in bottomPromo" :key="item.label">
          <a href="javascript:;">
            <img :src="item.url" />
          </a>
          <div class="text-desc">
            <div>
              <h4 class="SL">{{item.label}}</h4>
              <p class="SL">{{item.title}}</p>
            </div>
            <a href="javascript:;">了解更多</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["bottomPromo"])
  },
  methods: {}
};
</script>

<style lang='scss'>
.bottom-promo {
  padding: 6% 0;
  background-color: #f6f6f6;
  border-bottom: 1px solid #ddd;
  .content {
    max-width: 1200px;
    margin: 0 auto;
    ul {
      display: flex;
      padding: 0 20px;
      li {
        margin-right: 60px;
        &:last-of-type {
          margin-right: 0;
        }
        a {
          img {
            transition: all 0.4s ease;
            width: 100%;
            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 2px 5px rgba(185, 185, 191, 0.4);
            }
          }
        }
        .text-desc {
          div {
            h4 {
              font-size: 16px;
              line-height: 1.5;
              margin-top: 20px;
              color: black;
              opacity: 0.6;
            }
            p {
              font-size: 18px;
              line-height: 1.5;
              margin-top: 5px;
            }
          }
          a {
            color: #09c;
            font-size: 16px;
            line-height: 1.5;
            margin-top: 20px;
            display: block;
          }
        }
      }
    }
  }
}
</style>

