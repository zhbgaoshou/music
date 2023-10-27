<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "您还没起标题呢???",
  },
});
</script>

<template>
  <div class="title">{{ props.title }}</div>
  <slot></slot>
</template>

<style scoped lang="scss">
.title {
  @include vertical-center;
  margin-top: 30px;
}
</style>
