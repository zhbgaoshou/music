/**
 * 此模块是对底部按钮的状态管理,关于音乐资源的管理在music模块
 */
import { ref, computed, watch } from "vue";
export default () => {
  // 控制歌词页的显示/隐藏
  let is_show_lyric = ref(false);
  // 控制播放列表的显示/隐藏
  let is_show_play_list = ref(false);
  // 音量条
  let slider_value = ref(parseFloat(localStorage.getItem("volume")) || 0);
  // 是否循环播放
  let loop = ref(false);

  // 播放顺序
  /**
   * 1:顺序播放
   * 2:循环播放
   * 3:随机播放
   */
  let play_order = ref(1);

  // 顺序提示文字
  const order_text = computed(() => {
    if (play_order.value === 1) {
      return "顺序";
    } else if (play_order.value === 2) {
      return "循环";
    } else {
      return "随机";
    }
  });

  // 播放列表的right(PC)
  const list_style_right = computed(() =>
    is_show_play_list.value ? "0" : "-60%"
  );
  // 播放列表的的height(移动端)
  const list_style_height = computed(() =>
    is_show_play_list.value ? "50% !important" : "0 !important"
  );
  // 音量
  const volume_value = computed({
    get() {
      return slider_value.value / 100;
    },
  });

  // 监听音量的变化，并且存到本地
  watch(
    slider_value,
    (new_volume) => {
      localStorage.setItem("volume", new_volume);
    },
    { immediate: true }
  );

  return {
    is_show_lyric,
    is_show_play_list,
    list_style_right,
    list_style_height,
    slider_value,
    volume_value,
    play_order,
    order_text,
    loop,
  };
};
