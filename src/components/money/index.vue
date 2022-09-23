<template>
  <div>
    <heador />
    <mslider />
    <new />
    <money />
    <lcj />
    <finance />
    <jdzt />
    <footor cname="mfooter" />
    <navbar />
  </div>
</template>

<script>
import Money from "../home/money.vue";
import Footor from "../public/footer.vue";
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Finance from "./finance.vue";
import Jdzt from "./jdzt.vue";
import Lcj from "./lcj.vue";
import Mslider from "./mslider.vue";
import New from "./new.vue";
export default {
  components: {
    Heador,
    Navbar,
    Mslider,
    New,
    Money,
    Footor,
    Jdzt,
    Finance,
    Lcj,
  },
};
</script>

<style lang="less">
.mfooter {
  margin-top: 0 !important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>