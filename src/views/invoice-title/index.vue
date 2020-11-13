<template>
  <div class="wrapper">
    <div v-show="isEmpty">
      <van-empty description="抬头为空"/>
    </div>
    <van-pull-refresh v-show="!isEmpty" v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <van-swipe-cell v-for="item in list" :key="item.id">
          <van-cell is-link v-on:click="jump('update', item.id)">

            <template #title>
              <div style="height: 100%">
                <div class="cell-left">
                  <div class="header-label">{{ item.name.charAt(0).toLocaleUpperCase() }}</div>
                </div>
                <div class="cell-right">
                  <span class="custom-title van-ellipsis">{{ item.name }}</span>
                  <van-tag class="title-tag" type="danger" v-show="item.isDefault">默认</van-tag>
                  <div class="cell-label">{{ item.taxId }}</div>
                </div>
              </div>
            </template>

          </van-cell>
          <template #right>
            <van-button class="swipe-button" square type="info" text="设为默认"/>
            <van-button class="swipe-button" square type="danger" text="删除"/>
          </template>
        </van-swipe-cell>
      </van-list>
    </van-pull-refresh>
    <van-button v-on:click="jump('add', null)" icon="plus" round type="danger" class="bottom-button"/>
  </div>

</template>

<script>
import {Button, Empty, PullRefresh, List, SwipeCell, Cell, Tag} from 'vant';

export default {
  name: "invoice-title",
  components: {
    [Button.name]: Button,
    [Empty.name]: Empty,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [Tag.name]: Tag
  },
  data() {
    return {
      list: [],
      currentPage: 0,
      isEmpty: false,
      listData: [{"id":1,"isDefault":true,"name":"亚信科技（中国）有限公司1","taxId":"9166727373663X"},{"id":2,"isDefault":false,"name":"亚信科技（中国）有限公司2","taxId":"9166727373663X"},{"id":3,"isDefault":false,"name":"zhaoyao","taxId":""},{"id":4,"isDefault":false,"name":"亚信科技（中国）有限公司4","taxId":"9166727373663X"},{"id":5,"isDefault":false,"name":"亚信科技（中国）有限公司5","taxId":"9166727373663X"},{"id":6,"isDefault":false,"name":"zhaoyao","taxId":""},{"id":7,"isDefault":false,"name":"亚信科技（中国）有限公司7","taxId":"9166727373663X"},{"id":8,"isDefault":false,"name":"亚信科技（中国）有限公司8","taxId":"9166727373663X"},{"id":9,"isDefault":false,"name":"亚信科技（中国）有限公司9","taxId":"9166727373663X"},{"id":10,"isDefault":false,"name":"亚信科技（中国）有限公司10","taxId":"9166727373663X"},{"id":11,"isDefault":false,"name":"亚信科技（中国）有限公司11","taxId":"9166727373663X"},{"id":12,"isDefault":false,"name":"亚信科技（中国）有限公司12","taxId":"9166727373663X"},{"id":13,"isDefault":false,"name":"亚信科技（中国）有限公司13","taxId":"9166727373663X"},{"id":14,"isDefault":false,"name":"亚信科技（中国）有限公司14","taxId":"9166727373663X"},{"id":15,"isDefault":false,"name":"亚信科技（中国）有限公司15","taxId":"9166727373663X"},{"id":16,"isDefault":false,"name":"亚信科技（中国）有限公司16","taxId":"9166727373663X"},{"id":17,"isDefault":false,"name":"亚信科技（中国）有限公司17","taxId":"9166727373663X"},{"id":18,"isDefault":false,"name":"亚信科技（中国）有限公司18","taxId":"9166727373663X"},{"id":19,"isDefault":false,"name":"亚信科技（中国）有限公司19","taxId":"9166727373663X"},{"id":20,"isDefault":false,"name":"亚信科技（中国）有限公司20","taxId":"9166727373663X"},{"id":21,"isDefault":false,"name":"亚信科技（中国）有限公司21","taxId":"9166727373663X"},{"id":22,"isDefault":false,"name":"亚信科技（中国）有限公司22","taxId":"9166727373663X"},{"id":23,"isDefault":false,"name":"亚信科技（中国）有限公司23","taxId":"9166727373663X"},{"id":24,"isDefault":false,"name":"亚信科技（中国）有限公司24","taxId":"9166727373663X"},{"id":25,"isDefault":false,"name":"亚信科技（中国）有限公司25","taxId":"9166727373663X"},{"id":26,"isDefault":false,"name":"亚信科技（中国）有限公司26","taxId":"9166727373663X"},{"id":27,"isDefault":false,"name":"亚信科技（中国）有限公司27","taxId":"9166727373663X"},{"id":28,"isDefault":false,"name":"亚信科技（中国）有限公司28","taxId":"9166727373663X"},{"id":29,"isDefault":false,"name":"亚信科技（中国）有限公司29","taxId":"9166727373663X"},{"id":30,"isDefault":false,"name":"亚信科技（中国）有限公司30","taxId":"9166727373663X"},{"id":31,"isDefault":false,"name":"亚信科技（中国）有限公司31","taxId":"9166727373663X"},{"id":32,"isDefault":false,"name":"亚信科技（中国）有限公司32","taxId":"9166727373663X"},{"id":33,"isDefault":false,"name":"亚信科技（中国）有限公司33","taxId":"9166727373663X"}],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    jump(type, ss) {
      if (type === "add") {
        this.$router.push("/home/title/add");
      } else {
        this.$router.push("/home/title/update/" + ss);
      }
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          if (this.listData[20 * this.currentPage + i] !== null && this.listData[20 * this.currentPage + i] !== undefined) {
            this.list.push(this.listData[20 * this.currentPage + i]);
          }
        }
        this.currentPage++;
        // 加载状态结束
        this.loading = false;
        this.refreshing = false;
        // 数据全部加载完成
        if (this.list.length >= this.listData.length) {
          this.finished = true;
        }
        if (this.list.length === 0) {
          this.isEmpty = true;
        }
      }, 200);
    },
    onRefresh() {
      // 清空列表数据
      this.currentPage = 0;
      this.list = [];
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  },
}
</script>

<style scoped>
.wrapper {
  padding-top: 48px;
  padding-bottom: 50px;
}

.title-tag {
  margin-left: 10px;
}

.custom-title {

}

.swipe-button {
  height: inherit;
}

.bottom-button {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 70px;
  right: 20px;
  z-index: 100;
  box-shadow: 2px 2px 10px #909090;
}

.cell-label {
  margin-top: 4px;
  color: #969799;
  font-size: 12px;
  line-height: 18px;
}

.cell-left {
  width: 56px;
  height: inherit;
  float: left;
}

.cell-right {
  float: left;
}

.header-label {
  width: 46px;
  height: 46px;
  background-color: gainsboro;
  border-radius: 23px;
  line-height: 46px;
  text-align: center;
  font-size: 20px;
}

.van-cell__right-icon {
  line-height: 46px;
}
</style>