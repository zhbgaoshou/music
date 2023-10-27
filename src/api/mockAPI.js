import request from "../utils/request";

export const reqSongList = () => request.get("/songlist");
