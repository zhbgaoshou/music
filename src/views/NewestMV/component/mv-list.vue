<script setup>
import mvCard from "@/base/mv-card.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps(["mvList"]);

function goMVDetail() {
  router.push({
    name: "mvdetail",
  });
}
</script>

<template>
  <div class="container" id="mv-container">
    <div
      v-for="mv in props.mvList"
      class="dis-mv"
      style="position: relative"
      @click="goMVDetail"
    >
      <img :src="mv.cover" alt="" />
      <p class="dis-txt">{{ mv.name }}</p>
      <p class="aut">{{ mv.artistName }}</p>
      <mvCard
        class="dis-mv-card"
        :txt="mv.name"
        style="position: absolute; bottom: 0"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  .dis-mv {
    cursor: pointer;
    flex: 0 0 30%;
    margin: 30px 0;

    img {
      @include img-style(5px);
    }
    p {
      margin: 5px;
      @include ell-line;
    }
    .dis-txt {
      font-size: 14px;
    }
    .aut {
      font-weight: 600;
      color: rgb(148, 145, 145);
    }
  }
}
</style>
