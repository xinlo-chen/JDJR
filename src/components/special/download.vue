<template>
  <Panel title="下载APP" :cname="$style.panel">
    <section :class="$style.content">
      <div class="" />
      <p @click="download">立即下载</p>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: { Panel },
  methods: {
    download() {
      self.location.href = "//m.jr.jd.com/udownload/index.html";
    },
  },
};
</script>

<style lang='less' module>
@import "../../css/element.less";
html,
body {
  background: #fff;
}
.panel {
  .panel;
  margin: 0 !important;
  > h4 {
    display: none;
  }
  .content {
    .flex;
    justify-content: center;
    align-items: center;
    height: 1136px;
    width: 100%;
    > div {
      background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?)
        center center no-repeat;
      width: 600px;
      height: 800px;
      background-size: 100% auto;
      margin-top: -400px;
    }
    > p {
      .btn(
        @size: 32px,
        @color: #fff,
        @bgcolor: #f1443e,
        @padding: 5px,
        @radius: 5px
      );
      height: 100px;
      line-height: 100px;
      height: 100px;
      line-height: 100px;
      width: 471px;
      background-image: linear-gradient(270deg, #f55c33 0, #ee2d1b 75%);
      box-shadow: 0 12px 32px 0 rgba(255, 159, 135, 0.6);
      position: fixed;
      bottom: 130px;
    }
    span {
      position: fixed;
      bottom: 16px;
      font-size: 24px;
      color: #eee;
    }
  }
}
</style>