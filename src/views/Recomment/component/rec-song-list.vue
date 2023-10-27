<script setup>
import listGood from "./list-good.vue";
import { useRoute, useRouter } from "vue-router";
import { useMusicStore } from "@/store";

const musicStore = useMusicStore();
const router = useRouter();
const props = defineProps(["rec_list"]);

async function goDetail(_id) {
  router.push({
    name: "listdetail",
    query: {
      _id,
    },
  });
}
</script>

<template>
  <div class="rec-song-list">
    <!-- 精品歌单 -->
    <listGood v-if="useRoute().path !== '/search'" />
    <!-- 精品歌单end -->

    <!-- 歌单列表 -->
    <div class="song-list">
      <ul class="list">
        <li
          @click="goDetail(rec.id)"
          v-for="(rec, index) in props.rec_list"
          :key="rec.id"
          class="song-item"
        >
          <img :src="rec.coverImgUrl" alt="" />
          <p class="song-txt">{{ rec.name }}</p>
        </li>
      </ul>
    </div>
    <!-- 歌单列表结束 -->
  </div>
</template>

<style scoped lang="scss">
.rec-song-list {
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    .song-item {
      flex: 0 0 25%;
      height: 180px;
      padding: 10px;
      margin: 20px 0;

      img {
        @include img-style(10px);
      }

      .song-txt {
        margin-top: 5px;
        width: 130px;
        @include ell-line;
      }
    }
  }
}
</style>
