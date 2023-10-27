<script setup>
import Carousel from "@/base/carousel.vue";
import disRec from "./component/dis-rec.vue";
import disNewmusic from "./component/dis-newmusic.vue";
import disMv from "./component/dis-mv.vue";
</script>

<template>
  <div class="discover">
    <Carousel />
    <disRec />
    <disNewmusic />
    <disMv />
  </div>
</template>

<style scoped lang="scss">
.discover {
  padding: $padding;
  flex: 1;
  height: 100%;
  overflow-y: scroll;
}
</style>
