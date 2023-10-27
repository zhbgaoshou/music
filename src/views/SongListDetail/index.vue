<script setup>
import { useMusicStore } from "@/store/index";
import cardSkeletonSlot from "@/slot/card-skeleton-slot.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

let loading = ref(true);

const route = useRoute();
const musicStore = useMusicStore();

async function getData() {
  await musicStore.getPlayList_detail(route.query._id);
  loading.value = false;
  await musicStore.getPlayList_all(route.query._id);
}

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="sl-detail" id="songDetail">
    <cardSkeletonSlot :loadingFlag="loading" :count="1">
      <div class="sl-detail-head">
        <div class="head-top">
          <img :src="musicStore.play_detail.coverImgUrl" alt="" />
          <div class="info" style="height: 100%">
            <p class="names">{{ musicStore.play_detail.name }}</p>
            <p>{{ musicStore.play_detail.creator?.nickname }}</p>
          </div>
        </div>
        <div class="head-bottom">
          <p id="txts">{{ musicStore.play_detail.description }}</p>
        </div>
      </div>
    </cardSkeletonSlot>
    <div class="sl-detail-main">
      <div class="main-head">
        <h6>歌曲列表</h6>
        <div class="row" v-for="o in 10">
          <span>{{ o }}</span>
          <span>songName</span>
          <span>演唱者</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#txts {
  @include ell-mline(2);
  font: {
    size: 13px;
    color: #a1a1a1;
  }
  line-height: 25px;
}

.names {
  @include ell-mline(3);
}
.sl-detail {
  padding: $padding;
  .sl-detail-head {
    height: 150px;
    .head-top {
      @include vertical-center;
      height: 80%;

      img {
        height: 100px;
        width: 100px;
        border-radius: 10px;
      }

      p {
        padding: 15px;
      }
    }
  }

  .sl-detail-main {
    margin-top: 20px;
    .main-head {
      h6 {
        font-size: 12px;
        padding: 10px 0;
        border-bottom: 1px solid #999;
      }
      .row {
        @include vertical-center;
        height: 50px;
        margin: 10px 0;
        span {
          margin: 0 15px;

          &:last-child,
          &:first-child {
            font-size: 12px;
            color: #afafaf;
          }
        }

        &:hover {
          background-color: rgba($color: #000000, $alpha: 0.1);
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
