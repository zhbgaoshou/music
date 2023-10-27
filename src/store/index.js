import { defineStore } from "pinia";
import { ref } from "vue";
import footer from "./footer";
import music from "./music";

export const useFooterStore = defineStore("footer", footer);
export const useMusicStore = defineStore("music", music);
export const useLoadingStore = defineStore("loading", () => {
  let dis_rec_loading = ref(true);
  let dis_mv_loading = ref(true);
  let dis_music_loading = ref(true);
  let rec_list_loading = ref(true);
  let new_song_loading = ref(true);
  let rec_mv_loading = ref(true);

  return {
    dis_rec_loading,
    dis_mv_loading,
    dis_music_loading,
    rec_list_loading,
    new_song_loading,
    rec_mv_loading,
  };
});
