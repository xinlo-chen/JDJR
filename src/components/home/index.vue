<template>
  <div>
    <heador />
    <slider />
    <novice />
    <borrow />
    <money />
    <product />
    <life />
    <footor />
    <navbar />
  </div>
</template>

<script>
import Footor from "../public/footer.vue";
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Borrow from "./borrow.vue";
import Slider from "./hslider.vue";
import Life from "./life.vue";
import Money from "./money.vue";
import Novice from "./novice.vue";
import Product from "./product.vue";
export default {
  components: {
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footor,
    Navbar,
  },
};
</script>
