<template>
  <div class="wrapper">
    <div class="invoice-list-header">
      <van-sticky :offset-top="45">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1"/>
        </van-dropdown-menu>
      </van-sticky>
      <div class="invoice-list-header-left">共33张</div>
    </div>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-swipe-cell v-for="item in list" :key="item.id">
        <div v-on:click="jump()" style="width: 100%; height: 142px; margin-top: 20px; background-color: white; border-radius: 10px">
          <div class="invoice-panel panel-header">
            <div class="header-label">天猫国际进口超市国内现货</div>
          </div>
          <div class="invoice-panel panel-separation">
            <div class="cbn cbn-left"></div><div class="cbn cbn-right"></div>
            <hr style="border:1px dashed #A1500A; position: relative; top: -23px;">
          </div>
          <div class="invoice-panel panel-body">
            <div class="invoice-panel-label">
              <div class="invoice-panel-label-title">购方名称</div>
              <div class="invoice-panel-label-content van-ellipsis">亚信科技（中国）有限公司</div>
            </div>
            <div class="invoice-panel-label">
              <div class="invoice-panel-label-title">发票金额</div>
              <div class="invoice-panel-label-content">1288.00</div>
            </div>
            <div class="invoice-panel-label">
              <div class="invoice-panel-label-title">开票时间</div>
              <div class="invoice-panel-label-content">2020.10.09</div>
            </div>
          </div>

        </div>
        <template #right>
          <van-button class="swipe-button" square type="danger" text="删除"/>
        </template>
      </van-swipe-cell>
    </van-list>
  </div>
</template>

<script>
import {Button, Empty, PullRefresh, List, SwipeCell, Cell, Tag, DropdownMenu, DropdownItem, Sticky  } from 'vant';
export default {
  name: "invoice",
  components: {
    [Button.name]: Button,
    [Empty.name]: Empty,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [Tag.name]: Tag,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Sticky.name]: Sticky,
  },
  data() {
    return {
      list: [],
      currentPage: 0,
      value1: 0,
      option1: [
        { text: '近一个月', value: 0 },
        { text: '近三个月', value: 1 },
        { text: '近6个月', value: 2 },
        { text: '全部', value: 3 },
      ],
      isEmpty: false,
      listData: [{"id":1,"isDefault":true,"name":"亚信科技（中国）有限公司1","taxId":"9166727373663X"},{"id":2,"isDefault":false,"name":"亚信科技（中国）有限公司2","taxId":"9166727373663X"},{"id":3,"isDefault":false,"name":"zhaoyao","taxId":""},{"id":4,"isDefault":false,"name":"亚信科技（中国）有限公司4","taxId":"9166727373663X"},{"id":5,"isDefault":false,"name":"亚信科技（中国）有限公司5","taxId":"9166727373663X"},{"id":6,"isDefault":false,"name":"zhaoyao","taxId":""},{"id":7,"isDefault":false,"name":"亚信科技（中国）有限公司7","taxId":"9166727373663X"},{"id":8,"isDefault":false,"name":"亚信科技（中国）有限公司8","taxId":"9166727373663X"},{"id":9,"isDefault":false,"name":"亚信科技（中国）有限公司9","taxId":"9166727373663X"},{"id":10,"isDefault":false,"name":"亚信科技（中国）有限公司10","taxId":"9166727373663X"},{"id":11,"isDefault":false,"name":"亚信科技（中国）有限公司11","taxId":"9166727373663X"},{"id":12,"isDefault":false,"name":"亚信科技（中国）有限公司12","taxId":"9166727373663X"},{"id":13,"isDefault":false,"name":"亚信科技（中国）有限公司13","taxId":"9166727373663X"},{"id":14,"isDefault":false,"name":"亚信科技（中国）有限公司14","taxId":"9166727373663X"},{"id":15,"isDefault":false,"name":"亚信科技（中国）有限公司15","taxId":"9166727373663X"},{"id":16,"isDefault":false,"name":"亚信科技（中国）有限公司16","taxId":"9166727373663X"},{"id":17,"isDefault":false,"name":"亚信科技（中国）有限公司17","taxId":"9166727373663X"},{"id":18,"isDefault":false,"name":"亚信科技（中国）有限公司18","taxId":"9166727373663X"},{"id":19,"isDefault":false,"name":"亚信科技（中国）有限公司19","taxId":"9166727373663X"},{"id":20,"isDefault":false,"name":"亚信科技（中国）有限公司20","taxId":"9166727373663X"},{"id":21,"isDefault":false,"name":"亚信科技（中国）有限公司21","taxId":"9166727373663X"},{"id":22,"isDefault":false,"name":"亚信科技（中国）有限公司22","taxId":"9166727373663X"},{"id":23,"isDefault":false,"name":"亚信科技（中国）有限公司23","taxId":"9166727373663X"},{"id":24,"isDefault":false,"name":"亚信科技（中国）有限公司24","taxId":"9166727373663X"},{"id":25,"isDefault":false,"name":"亚信科技（中国）有限公司25","taxId":"9166727373663X"},{"id":26,"isDefault":false,"name":"亚信科技（中国）有限公司26","taxId":"9166727373663X"},{"id":27,"isDefault":false,"name":"亚信科技（中国）有限公司27","taxId":"9166727373663X"},{"id":28,"isDefault":false,"name":"亚信科技（中国）有限公司28","taxId":"9166727373663X"},{"id":29,"isDefault":false,"name":"亚信科技（中国）有限公司29","taxId":"9166727373663X"},{"id":30,"isDefault":false,"name":"亚信科技（中国）有限公司30","taxId":"9166727373663X"},{"id":31,"isDefault":false,"name":"亚信科技（中国）有限公司31","taxId":"9166727373663X"},{"id":32,"isDefault":false,"name":"亚信科技（中国）有限公司32","taxId":"9166727373663X"},{"id":33,"isDefault":false,"name":"亚信科技（中国）有限公司33","taxId":"9166727373663X"}],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    jump() {
      this.$router.push("/home/invoice/info/1");
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
  padding: 45px 15px 50px;
}

.swipe-button {
  height: inherit;
}
.header-label {
  line-height: 46px;
  font-size: 16px;
}
.invoice-panel {
  padding: 0 10px 0 10px;
}

.panel-header {
  height: 36px;
  padding: 0 20px 0 20px;
  border-top: 1px solid #A1500A;
  border-left: 1px solid #A1500A;
  border-right: 1px solid #A1500A;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  line-height: 46px;
}

.panel-separation {
  height: 20px;
  overflow: hidden;
  padding: 0 20px 0 20px;
}

.cbn {
  width: 18px;
  height: 18px;
  background-color: #f8f8f8;
}

.cbn-left {
  position: relative;
  display:inline-block;
  left: -30px;
  border: 1px solid #A1500A;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.cbn-right {
  position: relative;
  display:inline-block;
  right: -30px;
  float: right;
  border: 1px solid #A1500A;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.panel-body {
  height: 84px;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid #A1500A;
  border-left: 1px solid #A1500A;
  border-right: 1px solid #A1500A;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.swipe-button {
  margin-left: 10px;
  border-radius: 10px;
}

.invoice-panel-label {
  height: 26px;
  line-height: 26px;
}

.invoice-panel-label-title {
  width: 60px;
  float: left;
  font-size: 14px;
  color: #909090;
}
.invoice-panel-label-content {
  font-size: 14px;
  color: black;
  text-align: right;
}
.invoice-list-header {
  font-size: 14px;
  margin: 0 -15px -10px -15px;
}
.invoice-list-header-left {
  padding-left: 20px;
  margin-top: 10px;
}
.van-dropdown-menu__bar {
  box-shadow: 0 6px 12px rgba(100,101,102,.12);
}
</style>