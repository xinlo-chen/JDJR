<template>
  <div>
    <heador />
    <rslider />
    <daily />
    <in />
    <more />
    <footor />
    <navbar />
  </div>
</template>

<script>
import More from "../raise/more.vue";
import Footor from "../public/footer.vue";
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Daily from "./daily.vue";
import In from "./in.vue";
import Rslider from "./rslider.vue";
export default {
  components: {
    Heador,
    Footor,
    Navbar,
    Rslider,
    Daily,
    In,
    More,
  },
};
</script>

