<template>
  <panel :cname="$style.panel" title="理财专享">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240"
        alt=""
      />
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
  > h4 {
    display: none;
  }
  .content {
    img {
      display: block;
      height: 142px;
      width: 100%;
    }
  }
}
</style>