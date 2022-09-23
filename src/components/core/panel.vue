<template>
  <section :class="[panelClass, cname]">
    <h4>-{{ title }}-</h4>
    <slot />
  </section>
</template>

<script>
export default {
  props: ["cname", "title"],
  data() {
    return {
      panelClass: "panel",
    };
  },
};
</script>

<style lang="less">
@import "../../css/element.less";
.panel {
  .panel;
}
</style>