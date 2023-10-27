import { useMusicStore, useFooterStore } from "@/store/index";
import { randomIndex } from "@/utils/random";

export function useChangeOrder() {
  const footerStore = useFooterStore();

  footerStore.play_order === 3
    ? (footerStore.play_order = 1)
    : footerStore.play_order++;

  footerStore.play_order === 2
    ? (footerStore.loop = true)
    : (footerStore.loop = false);
}

export function useNext() {
  const musicStore = useMusicStore();
  if (musicStore.curIndex == musicStore.songList.length - 1) {
    ElMessage("你的播放列表已经没有更多了^_^");
  } else {
    musicStore.curIndex++;
  }
}

export function useEndedNext() {
  const footerStore = useFooterStore();
  const musicStore = useMusicStore();

  // 顺序播放
  if (footerStore.play_order === 1) {
    if (musicStore.curIndex == musicStore.songList.length - 1) {
      ElMessage("你的播放列表已经没有更多了^_^");
    } else {
      musicStore.curIndex++;
    }
  } else if (footerStore.play_order === 2) {
    footerStore.loop = true;
  } else {
    console.log(randomIndex(musicStore.songList));
    musicStore.curIndex = randomIndex(musicStore.songList);
  }
}
