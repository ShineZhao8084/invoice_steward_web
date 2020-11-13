<template>
  <div class="wrapper">
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false">
        <van-swipe-item>内容 1</van-swipe-item>
        <van-swipe-item>内容 2</van-swipe-item>
        <van-swipe-item>内容 3</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
  </div>
</template>

<script>

import {NoticeBar, Swipe, SwipeItem} from 'vant';
export default {
  name: "dashboard",
  components: {
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>

<style scoped>
.wrapper {
  padding-top: 45px;
  padding-bottom: 50px;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>