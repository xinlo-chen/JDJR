<template>
  <div>
    <heador />
    <islider />
    <btfl />
    <more />
    <footor />
    <navbar />
  </div>
</template>

<script>
import Footor from "../public/footer.vue";
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Btfl from "./btfl.vue";
import Islider from "./islider.vue";
import More from "./more.vue";
export default {
  components: {
    Heador,
    Footor,
    Navbar,
    Islider,
    Btfl,
    More,
  },
};
</script>
