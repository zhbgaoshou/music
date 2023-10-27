<script setup>
import discoverSlot from "@/slot/discover-slot.vue";
import cardSkeletonSlot from "@/slot/card-skeleton-slot.vue";
import playCard from "@/base/play-card.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMusicStore, useLoadingStore } from "@/store/index";
const route = useRouter();
const musicStore = useMusicStore();
const loadingStore = useLoadingStore();
musicStore.getDisRecList(12);

function goDetail(_id) {
  route.push({
    name: "listdetail",
    query: {
      _id,
    },
  });
}

let isShow = ref(-1);
</script>

<template>
  <discoverSlot title="发现歌单">
    <cardSkeletonSlot :loadingFlag="loadingStore.dis_rec_loading">
      <div class="container">
        <!--  -->
        <div
          v-for="(disRec, index) in musicStore.dis_rec_list"
          :key="disRec.id"
          class="dis-rec"
          @mouseover="isShow = index"
          @mouseout="isShow = -1"
          @touchstart="isShow = index"
          @touchend="isShow = -1"
          @click="goDetail(disRec.id)"
        >
          <playCard
            class="rec-play-card"
            :class="{ active: index === isShow }"
          />
          <img :src="disRec.coverImgUrl" alt="" />
          <p>{{ disRec.name }}</p>
        </div>

        <!--  -->
      </div>
    </cardSkeletonSlot>
  </discoverSlot>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .dis-rec {
    position: relative;
    cursor: pointer;
    flex: 0 0 25%;
    margin: 20px 0;
    padding: 10px;

    .rec-play-card {
      opacity: 0;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
    }

    img {
      width: 100%;
      @include img-style(10px);
    }

    p {
      width: 100%;
      max-width: 140px;
      line-height: 20px;
      margin: 5px;
      font-size: 14px;
      @include ell-mline;
    }
  }
}
.active {
  opacity: 1 !important;
}
</style>
