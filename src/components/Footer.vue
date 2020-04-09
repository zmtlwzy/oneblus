<template>
  <footer class="footer">
    <numlabel />
    <footerlink class="W5" />
    <footerlinkmess class="W5" />
  </footer>
</template>

<script>
import Numlabel from "@/components/NumLabel.vue";
import Footerlink from "@/components/FooterLink.vue";
import Footerlinkmess from "@/components/FooterLinkMess.vue";

export default {
  components: {
    Numlabel,
    Footerlink,
    Footerlinkmess
  }
};
</script>

<style lang="scss">
</style>