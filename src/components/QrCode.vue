<template>
  <transition name="code">
    <div class="qr-code" @click="qrToggle" v-if="qrState">
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M419.2 160v256h-256V160h256m0-64h-256c-35.2 0-64 28.8-64 64v256c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64V160c0-35.2-28.8-64-64-64zM899.2 160v256h-256V160h256m0-64h-256c-35.2 0-64 28.8-64 64v256c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64V160c0-35.2-28.8-64-64-64zM419.2 608v256h-256v-256h256m0-64h-256c-35.2 0-64 28.8-64 64v256c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64v-256c0-35.2-28.8-64-64-64zM611.2 896c-19.2 0-32-12.8-32-32v-256c0-19.2 12.8-32 32-32s32 12.8 32 32v256c0 16-16 32-32 32zM768 896c-19.2 0-32-12.8-32-32v-256c0-19.2 12.8-32 32-32s32 12.8 32 32v256c0 16-16 32-32 32zM931.2 896c-19.2 0-32-12.8-32-32v-256c0-19.2 12.8-32 32-32s32 12.8 32 32v256c0 16-16 32-32 32z"
        />
      </svg>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      code: true
    };
  },
  computed: {
    ...mapState(["qrState"])
  },
  methods: {
    ...mapMutations(["qrToggle"])
  }
};
</script>

<style lang="scss">
.qr-code {
  position: fixed;
  right: 3.5vw;
  bottom: 3.5vw;
  width: 60px;
  height: 60px;
  background-image: linear-gradient(135deg, #384155 10%, #1f2739);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .icon {
    width: 35px;
    fill: #ccc;
  }
}

.code-enter,
.code-leave-to {
  transform: translateX(4vw);
  opacity: 0;
}

.code-enter-to,
.code-leave {
  transform: translateX(0);
  opacity: 1;
}

.code-enter-active,
.code-leave-active {
  transition: all 0.5s ease;
}
</style>