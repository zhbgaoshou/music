<script setup>
const props = defineProps({
  loadingFlag: Boolean,
  count: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <el-skeleton
    :loading="loadingFlag"
    :count="count"
    style="--el-skeleton-circle-size: 50px; margin: 20px 0"
    :throttle="500"
    animated
  >
    <template #template>
      <div class="container" style="display: flex">
        <el-skeleton-item variant="circle" style="margin: 10px" />
        <div style="flex: 1">
          <el-skeleton-item variant="p" style="width: 100%" />
          <el-skeleton-item variant="p" style="width: 100%" />
          <el-skeleton-item variant="p" style="width: 100%" />
        </div>
      </div>
      <el-skeleton-item variant="p" style="width: 100%" />
    </template>
    <slot></slot>
  </el-skeleton>
</template>

<style scoped lang="scss"></style>
