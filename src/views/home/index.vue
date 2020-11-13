<template>
  <div>
    <van-nav-bar
        :title="pageTitle"
        safe-area-inset-top
        left-arrow
        fixed
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home/dashboard" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/home/title" icon="search">抬头</van-tabbar-item>
      <van-tabbar-item to="/home/invoice" icon="friends-o">票据</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import {NavBar, Icon, Tabbar, TabbarItem, Toast} from 'vant';

export default {
  name: "home",

  components: {
    [NavBar .name]: NavBar,
    [Icon .name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },

  data() {
    return {
      active: 0,
      pageTitle: "发票管家"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);//返回上一层
    },
    onClickRight() {
      Toast('保存成功');
      this.$router.go(-1);//返回上一层
    },
  },
}
</script>

<style scoped>

</style>