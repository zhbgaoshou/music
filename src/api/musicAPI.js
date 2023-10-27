import musicRequest from "@/utils/musicRequest";

// 获取轮播图
export const reqBannerList = () =>
  musicRequest({ url: "/banner", method: "GET" });

// 获取发现歌单
export const reqPlayList_dis = (limit = 8, type = "hot") =>
  musicRequest({ url: `/top/playlist?limit=${limit}&order=${type}` });

// 获取发现音乐
export const reqMusic_dis = () =>
  musicRequest({ url: "/personalized/newsong" });

// 获取发现MV
export const reqMV_dis = () => musicRequest({ url: "/personalized/mv" });

// 获取推荐歌单
export const reqRecList = (cat = "流行", limit, before) =>
  musicRequest({
    url: "/top/playlist/highquality",
    params: { cat, limit: limit, before },
  });

// 获取歌单详情
export const reqPlayList_detail = (id) =>
  musicRequest({
    url: "/playlist/detail",
    method: "GET",
    params: {
      id,
    },
  });

// 获取歌单全部歌曲
export const reqPlaylist_all = (_id, limit, offset) =>
  musicRequest({
    url: `/playlist/track/all`,
    method: "GET",
    params: {
      id: _id,
      limit,
      offset,
    },
  });

// 获取新歌
export const reqNewSong = () =>
  musicRequest({ url: "/top/song", method: "GET" });

// 获取推荐mv
export const reqMv = (limit) =>
  musicRequest({ url: `/mv/first?limit=${limit}`, method: "GET" });
