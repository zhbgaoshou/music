<script setup>
import discoverSlot from "@/slot/discover-slot.vue";
import cardSkeletonSlot from "@/slot/card-skeleton-slot.vue";
import mvCard from "@/base/mv-card.vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useMusicStore, useLoadingStore } from "@/store";
const musicStore = useMusicStore();
musicStore.getDisMV();

function goMVDetail() {
  router.push({
    name: "mvdetail",
  });
}
</script>

<template>
  <discoverSlot title="发现MV">
    <cardSkeletonSlot
      :loadingFlag="useLoadingStore().dis_mv_loading"
      :count="2"
    >
      <div class="container" id="mv-container">
        <div
          v-for="disMv in musicStore.dis_mv_list"
          class="dis-mv"
          @click="goMVDetail"
        >
          <img :src="disMv.picUrl" alt="" />
          <p class="dis-txt">{{ disMv.name }}</p>
          <p class="aut">{{ disMv.artistName }}</p>
          <mvCard class="dis-mv-card" :txt="disMv.copywriter" />
        </div>
      </div>
    </cardSkeletonSlot>
  </discoverSlot>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 50px;
  .dis-mv {
    position: relative;
    cursor: pointer;
    flex: 0 0 30%;
    margin: 30px;

    .dis-mv-card {
      position: absolute;
      bottom: 0;
    }

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
