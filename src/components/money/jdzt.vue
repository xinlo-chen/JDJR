<template>
  <panel :cname="$style.panel" title="理财专享">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120"
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
  margin-bottom: 0;
  > h4 {
    display: none;
  }
  .content {
    height: 102px;
    img {
      display: block;
      width: 100%;
      height: 102px;
    }
  }
}
</style>