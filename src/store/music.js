/**
 * 关于音乐的业务逻辑状态管理
 */

import { ref, computed, watch } from "vue";
import { reqSongList } from "@/api/mockAPI";
import { useLoadingStore } from "@/store/index";
import {
  reqBannerList,
  reqPlayList_dis,
  reqMusic_dis,
  reqMV_dis,
  reqRecList,
  reqPlayList_detail,
  reqPlaylist_all,
  reqNewSong,
  reqMv,
} from "../api/musicAPI";

export default () => {
  const loadingStore = useLoadingStore(); //loading状态
  let songList = ref([]); //播放列表
  let curIndex = ref(-1); //当前歌曲的下标，用来控制上/下一首
  let curSong = ref({}); //当前歌曲，用来计算src
  let playIcon = ref(false); // 控制播放图标
  // 轮播图
  const bannerList = ref([]);
  // 发现歌单
  const dis_rec_list = ref([]);
  // 发现音乐
  const dis_music_list = ref([]);
  // 发现mv
  const dis_mv_list = ref([]);
  // 推荐歌单
  const rec_list = ref([]);
  // 歌单详情列表
  const play_detail = ref({});
  // 歌单全部歌曲
  const play_list = ref([]);
  // 新歌
  const newSong_list = ref([]);
  // mv列表
  const mv_list = ref([]);

  // 搜索历史
  const search_history_list = ref(
    JSON.parse(localStorage.getItem("historyList")) || []
  );

  /**
   * 获取音乐列表
   */
  async function getSongList() {
    const ret = await reqSongList();
    songList.value = ret.data;
  }

  /**
   * 获取轮播图
   */

  async function getBannerList() {
    try {
      const ret = await reqBannerList();
      bannerList.value = ret.banners;
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }

  /**
   * 获取发现歌单
   */

  async function getDisRecList(limit) {
    try {
      const ret = await reqPlayList_dis(limit);
      dis_rec_list.value = ret.playlists;
      loadingStore.dis_rec_loading = false;
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }

  /**
   * 获取发现音乐
   */

  async function getDisMusic() {
    try {
      const ret = await reqMusic_dis();
      dis_music_list.value = ret.result;
      loadingStore.dis_music_loading = false;
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }

  /**
   * 获取发现MV
   */
  async function getDisMV() {
    try {
      const ret = await reqMV_dis();
      dis_mv_list.value = ret.result;
      ret.result.forEach((value) => {
        console.log(value.id);
      });
      loadingStore.dis_mv_loading = false;
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }

  /**
   * 推荐歌单
   */
  async function getRecList(cat, limit, before) {
    try {
      const ret = await reqRecList(cat, limit, before);
      rec_list.value = ret.playlists;
      loadingStore.rec_list_loading = false;
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }

  /**
   * 获取歌单详情
   * @param {Number} id 歌单id
   */
  async function getPlayList_detail(id) {
    try {
      const ret = await reqPlayList_detail(id);
      play_detail.value = ret.playlist;
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }

  /**
   * 获取歌单全部歌曲
   * @param {Number} id 歌单id
   */
  async function getPlayList_all(id, limit = 20, offset = 0) {
    try {
      const ret = await reqPlaylist_all(id, limit, offset);
      console.log(ret);
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }

  /**
   * 获取新歌
   */
  async function getNewSong() {
    try {
      const ret = await reqNewSong();
      newSong_list.value = ret.data;
      loadingStore.new_song_loading = false;
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }
  /**
   *获取mv
   * @param {Number} limit 请求数量
   */

  async function getMvList(limit = 10) {
    try {
      const ret = await reqMv(limit);
      mv_list.value = ret.data;
      loadingStore.rec_mv_loading = false;
    } catch (error) {
      ElMessage.error("请求失败");
    }
  }

  // requset end

  const src = computed(() => {
    return curSong.value?.url;
  });

  watch(curIndex, (newIndex) => {
    curSong.value = songList.value[newIndex];
    playIcon.value = true;
  });

  return {
    songList,
    curSong,
    curIndex,
    src,
    playIcon,
    getSongList,
    bannerList,
    getBannerList,
    dis_rec_list,
    getDisRecList,
    dis_music_list,
    getDisMusic,
    dis_mv_list,
    getDisMV,
    search_history_list,
    rec_list,
    getRecList,
    play_detail,
    getPlayList_detail,
    play_list,
    getPlayList_all,
    newSong_list,
    getNewSong,
    mv_list,
    getMvList,
  };
};
