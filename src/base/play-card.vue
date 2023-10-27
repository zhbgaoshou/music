<script setup></script>

<template>
  <div class="play-card">
    <svg
      class="feather feather-play"
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.play-card {
  @include box-center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba($color: #fff, $alpha: 0.1);
  backdrop-filter: blur(10px);

  svg {
    color: #fff;
    transform: translateX(2px);
  }
}
</style>
