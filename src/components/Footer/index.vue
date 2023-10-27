<script setup>
import footerLeft from "./component/footer-left.vue";
import footerMid from "./component/footer-mid.vue";
import footerRight from "./component/footer-right.vue";
import footerMenu from "./component/footer-menu.vue";
</script>

<template>
  <div class="footer">
    <footerLeft></footerLeft>
    <footerMid></footerMid>
    <footerRight></footerRight>
  </div>
  <footerMenu></footerMenu>
</template>

<style scoped lang="scss">
.footer {
  position: static;
  z-index: 11;
  display: flex;
  padding: 0 10px;
  background-color: $menu-bg-color;
  height: $foot-height;
}
</style>
