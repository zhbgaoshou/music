<script setup>
import { ref, nextTick } from "vue";
import { useEndedNext } from "@/hook/music-hook";
import { useMusicStore, useFooterStore } from "@/store/index";
import bus from "@/mitt/index";
const musicStore = useMusicStore();
const footerStore = useFooterStore();
const audioDOM = ref(null);

function canplay(event) {
  const audioDOM = event.target;
  audioDOM.play().then(() => {
    console.log("播放成功");
  });
}

nextTick(() => {
  bus.on("isPlay", function () {
    if (audioDOM.value.paused) {
      if (musicStore.songList.length === 0)
        return ElNotification({
          title: "播放失败",
          message: "播放列表为空，请更新您的播放列表",
          type: "error",
        });
      if (!musicStore.src) {
        musicStore.curIndex = 0;
        ElMessage({
          message: "已为您播放列表的第一首歌曲",
          type: "success",
        });
      } else {
        audioDOM.value.play();
        musicStore.playIcon = true;
        console.log("播放中...");
      }
    } else {
      audioDOM.value.pause();
      musicStore.playIcon = false;
      console.log("暂停中...");
    }
  });
});
</script>

<template>
  <audio
    :src="musicStore.src"
    @canplay="canplay"
    @ended="useEndedNext"
    :volume="footerStore.volume_value"
    :loop="footerStore.loop"
    ref="audioDOM"
  ></audio>
</template>

<style scoped lang="scss"></style>
