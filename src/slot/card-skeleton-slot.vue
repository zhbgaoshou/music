<script setup>
const props = defineProps({
  loadingFlag: Boolean,
  count: {
    type: Number,
    default: 3,
  },
});
</script>

<template>
  <el-skeleton :throttle="500" animated :count="count" :loading="loadingFlag">
    <!-- 骨架start -->
    <template #template>
      <el-skeleton-item
        variant="image"
        style="
          width: 100%;
          height: 240px;
          margin-top: 20px;
          border-radius: 10px;
        "
      />
      <div style="padding: 14px">
        <el-skeleton-item variant="h3" style="width: 50%" />
        <div
          style="
            display: flex;
            align-items: center;
            justify-items: space-between;
            margin-top: 16px;
            height: 16px;
          "
        >
          <el-skeleton-item variant="text" style="margin-right: 16px" />
        </div>
      </div>
    </template>
    <!-- 骨架end -->
    <slot></slot>
  </el-skeleton>
</template>

<style scoped lang="scss"></style>
