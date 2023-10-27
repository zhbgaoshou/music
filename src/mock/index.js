import Mockjs from "mockjs";

const data = [
  {
    id: 1,
    name: "Sunshine Girl",
    singer: "Moumoon",
    url: "http://localhost:5173/media/mp3/SunshineGirl.mp3",
  },
  {
    id: 2,
    name: "断点",
    singer: "张敬轩",
    url: "http://localhost:5173/media/mp3/断点.mp3",
  },
  {
    id: 3,
    name: "父亲的散文诗",
    singer: "李建",
    url: "http://localhost:5173/media/mp3/父亲的散文诗.mp3",
  },
  {
    id: 4,
    name: "江湖笑",
    singer: "群星",
    url: "http://localhost:5173/media/mp3/江湖笑.mp3",
  },
  {
    id: 5,
    name: "天后",
    singer: "陈势安",
    url: "http://localhost:5173/media/mp3/天后.mp3",
  },
  {
    id: 6,
    name: "太多",
    singer: "陈冠蒲",
    url: "http://localhost:5173/media/mp3/太多.mp3",
  },
];

Mockjs.mock("/songlist", { code: 200, data, msg: "请求成功" });
