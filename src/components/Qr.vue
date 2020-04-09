<template>
  <div class="qr">
    <qrcode></qrcode>
    <qrdialog></qrdialog>
  </div>
</template>

<script>
import Qrcode from "@/components/QrCode.vue";
import Qrdialog from "@/components/QrDialog.vue";
export default {
  data() {
    return {};
  },
  computed: {},
  components: {
    Qrcode,
    Qrdialog
  }
};
</script>

<style>
</style>