<template>
  <panel :cname="$style.panel" title="极速借贷">
    <section :class="$style.content">
      <router-link :to="{ name: 'home' }">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280"
          alt=""
        />
      </router-link>
    </section>
  </panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: { Panel },
};
</script>

<style lang="less" module>
@import "../../css/element.less";
.panel {
  .panel;
  .content {
    padding-bottom: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>