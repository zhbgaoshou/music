<script setup>
import Tag from "@/base/tag.vue";
</script>

<template>
  <div class="good-song-list">
    <img src="@/assets/images/default.jpg" alt="" />
    <div class="song-list-info">
      <Tag title="精品歌单"></Tag>

      <h6 class="title">「凯尔特民谣」来自西欧风情的悠扬之音</h6>
      <p class="txt">
        凯尔特民谣起源于中世纪欧洲英伦三岛凯尔特人的一种传统音乐。
        传统的凯尔特音乐古老优美、源远流长。以提琴、手风琴、竖琴、爱尔兰布祖基／长笛，手风琴，宝思兰鼓、哨笛和风笛等极具韵味的乐器为代表，发展出一种无与伦比的遗世独立的气息，这也正是凯尔特音乐带给人的核心意象。她有重迭的和声,有传说般的回响，飘渺的歌吟和旷远的合唱。在器乐上竖琴和风笛是最常用的凯尔特特色乐器它们配合凯尔特歌唱，流泛着同样或相通的声音气质，凯尔特民歌旋律普遍是中世纪调式的，很少有装饰音，也较少跨跳式的行进;平缓地发展、简单地回旋，旋律有一种虚幻感和消逝感。
        低低的琴，沉沉的心，自由如你
      </p>
      <a style="display: none" class="more">查看更多 >></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.good-song-list {
  cursor: pointer;
  position: relative;
  height: 150px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  @include vertical-center;
  @include jianbian;

  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #fff, $alpha: 0.5);
    backdrop-filter: blur(100px);
    border-radius: 10px;
    z-index: 1;
  }
  img,
  .song-list-info {
    position: static;
    z-index: 2;
  }
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 20px;
    margin-left: 20px;
  }
  .song-list-info {
    flex: 1;
    height: 120px;
    margin: 0 20px;

    .more {
      font-size: 14px;
      margin: 15px;
    }

    h6 {
      margin: 10px 0;
      width: 43vw;
      @include ell-line;
    }
    .txt {
      @include ell-mline(2);
      font-size: 12px;
      line-height: 18px;
      margin: 15px;
    }
  }
}
</style>
