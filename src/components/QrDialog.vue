<template>
  <div class="qr-dialog" ref="dia" :style="{display:'none'}">
    <transition
      name="dialog"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"
    >
      <div class="card-container" v-if="!qrState">
        <div class="top-bar">
          <div class="btn-container" @click="qrToggle">
            <div class="close-btn"></div>
          </div>
        </div>
        <div class="content"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { sleep } from "@/share.js";
export default {
  computed: {
    ...mapState(["qrState"])
  },
  methods: {
    ...mapMutations(["qrToggle"]),
    async beforeEnter() {
      this.$refs.dia.style.display = "";
      await sleep(0);
      this.$refs.dia.style.backgroundColor = "rgba(0,0,0,.5)";
    },
    beforeLeave() {
      this.$refs.dia.style.backgroundColor = "rgba(0,0,0,0)";
    },
    afterLeave() {
      console.log(this.$refs.dia.style);
      this.$refs.dia.style.display = "none";
    }
  }
};
</script>

<style lang="scss">
.qr-dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  z-index: 999;
  transition: background-color 0.5s ease;
  .card-container {
    width: 600px;
    height: 500px;
    background-color: #fff;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
    .top-bar {
      display: flex;
      justify-content: flex-end;
      height: 40px;
      .btn-container {
        position: relative;
        right: 2%;
        top: 7px;
        height: 25px;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .close-btn {
          height: 20px;
          border-left: 2px solid #222;
          position: relative;
          transform: rotateZ(45deg);
          &::before {
            content: "";
            height: 100%;
            position: absolute;
            left: 50%;
            right: 50%;
            border-left: 2px solid #222;
            transform: translateX(-2px) rotateZ(90deg);
          }
        }
      }
    }
  }
}

.dialog-enter,
.dialog-leave-to {
  transform: translateY(50vw);
  opacity: 0;
}

.dialog-enter-to,
.dialog-leave {
  transform: translateY(0);
  opacity: 1;
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.5s ease;
}
</style>