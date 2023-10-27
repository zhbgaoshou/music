<script setup>
import playCard from "./play-card.vue";

const props = defineProps({
  txt: String,
});
</script>

<template>
  <div class="mv-card">
    <div class="mv-info">
      <p class="mv-card-txt">
        {{ props.txt }}
      </p>
      <i class="iconfont icon-bofangliang"></i>
      <span>100w</span>
    </div>
    <div class="card">
      <playCard />
    </div>
  </div>
</template>

<style scoped lang="scss">
.mv-card {
  border: 1px solid #fff;
  border-bottom: 0;
  padding: 10px;
  display: flex;
  width: 100%;
  height: 40%;
  border-radius: 10px 10px 0 0;
  backdrop-filter: blur(10px);
  background-color: rgba($color: #fff, $alpha: 0.5);

  .mv-info {
    height: 100%;
    flex: 2;
    padding-right: 10px;
    border-right: 1px solid rgba($color: #e4e3e3, $alpha: 0.2);
    color: #fff;

    .mv-card-txt {
      font-size: 14px;
      line-height: 25px;
      margin-bottom: 10px;
      @include ell-mline;
    }
    span {
      margin: 0 5px;
    }
  }

  .card {
    @include box-center;
    flex: 1;

    .play-card {
      width: 60px;
      height: 60px;
      border: 1px solid #fff;
    }
  }
}
</style>
