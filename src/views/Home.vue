<template>
  <div class="home">
    <Nav/>
    <topbanner></topbanner>
    <promo></promo>
    <bottombanner></bottombanner>
    <bottompromo></bottompromo>
    <footers></footers>
    <bottom />
    <qr />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Topbanner from '@/components/TopBanner.vue'
import Promo from '@/components/Promo.vue'
import Bottombanner from '@/components/BottomBanner.vue'
import Bottompromo from '@/components/BottomPromo.vue'
import Footers from '@/components/Footer.vue'
import Bottom from '@/components/Bottom.vue'
import Qr from '@/components/Qr.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Topbanner,
    Promo,
    Bottombanner,
    Bottompromo,
    Footers,
    Bottom,
    Qr
  }
}
</script>

