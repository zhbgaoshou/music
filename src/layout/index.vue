<script setup>
import Header from "../components/Header/index.vue";
import Main from "../components/Main/index.vue";
import Footer from "../components/Footer/index.vue";
import Lyric from "../components/Lyric/index.vue";
import Progress from "../base/progress.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <Main />
    <Lyric />
    <Progress />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
