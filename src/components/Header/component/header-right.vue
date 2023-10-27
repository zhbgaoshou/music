<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useMusicStore } from "@/store/index";
const musicStore = useMusicStore();
const router = useRouter();
const keyword = ref("");
const isShowCard = ref(false);

function closeCard() {
  isShowCard.value = false;
}

function goSearch(sreachVal = "") {
  let data = "";
  sreachVal ? (data = sreachVal) : (data = keyword.value);

  if (data == "") return;
  closeCard();

  if (!musicStore.search_history_list.includes(data))
    musicStore.search_history_list.unshift(data);

  router.push({
    name: "search",
    query: {
      keyword: data,
    },
  });
  keyword.value = "";
}

watch(musicStore.search_history_list, (historyList) => {
  if (historyList.length == 11) historyList.pop();
  localStorage.setItem("historyList", JSON.stringify(historyList));
});
</script>

<template>
  <div class="header-right">
    <div class="search">
      <svg
        class="feather feather-search"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
      </svg>

      <div style="position: relative; flex: 1">
        <!-- input start -->
        <input
          placeholder="搜索内容不能为空"
          type="text"
          @focus="isShowCard = true"
          v-model="keyword"
          style="width: 100%"
          @keydown.enter="goSearch()"
        />
        <!-- input end -->

        <el-card
          class="card-box"
          v-show="isShowCard"
          :body-style="{
            padding: '5px',
            position: 'relative',
          }"
        >
          <template #header>
            <div class="box-head">
              <h6 class="title">搜索历史</h6>

              <svg
                @click="closeCard"
                class="feather feather-x"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            </div>
          </template>
          <!-- 清空 -->

          <!-- 清空end -->
          <el-empty
            description="空空如也"
            :image-size="100"
            v-if="!musicStore.search_history_list.length"
          />

          <el-tag
            v-else
            v-for="(history, index) in musicStore.search_history_list"
            @close="musicStore.search_history_list.splice(index, 1)"
            @click="goSearch(history)"
            :key="history"
            style="cursor: pointer; margin: 5px"
            effect="plain"
            type="info"
            closable
          >
            {{ history }}
          </el-tag>
        </el-card>
      </div>

      <el-tooltip content="Let's go." placement="top" effect="light">
        <svg
          @click="goSearch()"
          v-show="keyword"
          id="go"
          style="
            margin: 0 10px;
            cursor: pointer;
            position: absolute;
            right: 10vw;
            top: 18px;
          "
          class="feather feather-arrow-right-circle"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 16 16 12 12 8" />
          <line x1="8" x2="16" y1="12" y2="12" />
        </svg>
      </el-tooltip>
    </div>

    <div class="theme">
      <svg
        class="feather feather-slack"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
        />
        <path
          d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
        />
        <path
          d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
        />
        <path
          d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
        />
        <path
          d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
        />
        <path
          d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
        />
        <path
          d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
        />
        <path
          d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-right {
  @include vertical-center;
  flex: 1;
  .search {
    @include vertical-center;
    flex: 1;
    border-radius: 10px;
    padding: 0.6667vw;
    margin-right: 2.6667vw;
    border: 1px solid $border-color;

    .card-box {
      position: absolute;
      width: 100%;
      top: 35px;
      z-index: 100;

      .box-head {
        display: flex;
        justify-content: space-between;
        .title {
          display: flex;
          align-items: end;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }

    svg {
      margin-left: 0.6667vw;
    }

    input {
      @include input-style;
      padding-left: 10px;
      flex: 1;
    }
  }
}
</style>
