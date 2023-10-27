<script setup></script>

<template>
  <div class="content"><router-view /></div>
</template>

<style scoped lang="scss">
.content {
  flex: 1;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
