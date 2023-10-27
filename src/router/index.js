import { createRouter, createWebHashHistory } from "vue-router";

const Discover = () => import("@/views/Discover/index.vue");
const Newest = () => import("@/views/Newest/index.vue");
const NewestMV = () => import("@/views/NewestMV/index.vue");
const Recomment = () => import("@/views/Recomment/index.vue");
const SongListDetail = () => import("@/views/SongListDetail/index.vue");
const Search = () => import("@/views/Search/index.vue");
const MVDetail = () => import("@/views/MvDetail/index.vue");

// 这是菜单栏的route
export const menuRoutes = [
  {
    path: "/discover",
    name: "discover",
    component: Discover,
    meta: { title: "发现音乐", icon: "icon-yinle1", lowTitle: "发现" },
  },
  {
    path: "/recomment",
    name: "recomment",
    component: Recomment,
    meta: { title: "推荐歌单", icon: "icon-bofangliebiao", lowTitle: "推荐" },
  },
  {
    path: "/newest",
    name: "ewest",
    component: Newest,
    meta: { title: "最新音乐", icon: "icon-yinle2", lowTitle: "最新" },
  },
  {
    path: "/newestMV",
    name: "newestMV",
    component: NewestMV,
    meta: { title: "最新MV", icon: "icon-diantai", lowTitle: "MV" },
  },
];

const routes = [
  { path: "/", redirect: "/discover" },
  {
    path: "/listdetail",
    name: "listdetail",
    component: SongListDetail,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/mvdetail",
    name: "mvdetail",
    component: MVDetail,
  },
  ...menuRoutes,
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.path === "/listdetail") {
      return {
        top: -100,
      };
    }
  },
});

export default router;
