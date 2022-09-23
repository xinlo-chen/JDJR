<template>
  <div :class="[btnClass, cname]">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["cname"],
  data() {
    return {
      btnClass: "btn",
    };
  },
};
</script>

<style lang="less">
@import "../../css/element.less";
.btn {
  .btn;
}
</style>