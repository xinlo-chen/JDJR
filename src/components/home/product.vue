<template>
  <panel title="新品推荐" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.arrow">更多尖货 ></div>
      <Slider :options="options" :items="items" cname="product-slider" />
    </section>
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
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421",
        },
        {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
        },
        {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
        },
        {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
        },
      ],
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true,
      },
    };
  },
};
</script>

<style lang="less">
.product-slider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>

<style lang="less" module>
@import "../../css/element.less";
.panel {
  .panel;
  .content {
    padding-bottom: 40px;
    position: relative;
    .arrow {
      position: absolute;
      font-size: 28px;
      color: #999;
      right: 20px;
      top: -70px;
    }
  }
}
</style>