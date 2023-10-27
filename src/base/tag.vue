<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="tag">{{ props.title }}</div>
</template>

<style scoped lang="scss">
.tag {
  width: max-content;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 12px;
  font-size: 12px;
  @include box-center;
}
</style>
