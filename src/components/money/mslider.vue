<template>
  <panel :cname="$style.panel" title="轮播图">
    <Slider :items="items" :cname="$style.slider" />
  </panel>
</template>

<script>
import panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
  components: { panel, Slider },
  data() {
    return {
      items: [
        {
          href: "money",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
        },
        {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
        },
      ],
    };
  },
};
</script>

<style lang="less" module>
@import "../../css/element.less";
.panel {
  .panel;
  > h4 {
    display: none;
  }
  .slider {
    margin-top: 120px;
    img {
      width: 100%;
    }
  }
}
</style>