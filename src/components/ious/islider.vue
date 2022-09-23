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
          src: "//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320",
        },
        {
          href: "money",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320",
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