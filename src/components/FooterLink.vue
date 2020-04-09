<template>
  <div id="link">
    <div class="content">
      <dl v-for="obj in footerLink" :key="obj.thead">
        <dt>{{obj.thead}}</dt>
        <dd>
          <ul>
            <li v-for="data in obj.tbody" :key="data">
              <a href="javascript:;">{{data}}</a>
            </li>
          </ul>
        </dd>
      </dl>
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
    ...mapState(["footerLink"])
  },
  methods: {}
};
</script>

<style lang="scss">
$black_col: #101920;
$white_col: #828282;
#link {
  display: flex;
  justify-content: center;
  padding-left: 5vw;
  padding-top: 25px;
  .content {
    flex: 1;
    display: flex;
    margin-bottom: 40px;
    max-width: 1200px;
    dl {
      flex: 1;
      dt {
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        color: $black_col;
      }
      dd {
        font-size: 14px;
        line-height: 1.7;
      }
      ul {
        li {
          padding: 8px 0;
          a {
            color: $white_col;
            &:hover {
              color: $black_col;
            }
          }
        }
      }
    }
  }
}
</style>