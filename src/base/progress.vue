<script setup>
import { ref, computed } from "vue";

let progressWidth = ref(0);
const progressDOM = ref(null);
function changeProgress(event) {
  progressWidth.value = event.pageX / progressDOM.value.offsetWidth;
}

const _progressWidth = computed(() => progressWidth.value * 100 + "%");
</script>

<template>
  <div class="progress-container" @click="changeProgress" ref="progressDOM">
    <div class="progress-bar">
      <div class="progress" :style="{ width: _progressWidth }">
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress-container {
  z-index: 9999;
  cursor: crosshair;
  height: 12px;
  transform: translateY(50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.progress-bar {
  width: 100vw;
  height: 4px;
  background-color: #d2d2d2;

  .progress {
    position: relative;
    height: 100%;
    width: 0%;
    background-color: rgb(238, 102, 102);
    .bar {
      position: absolute;
      right: -5px;
      top: -4px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgb(238, 102, 102);
      z-index: 10;
      border: 1px solid #d2d2d2;
    }
  }
}
</style>
