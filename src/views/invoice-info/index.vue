<template>
  <div>
    <van-nav-bar
        :title="pageTitle"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <div class="wrapper">

    </div>
  </div>
</template>

<script>
import { NavBar, Toast, Form, Field, RadioGroup, Radio, Switch } from 'vant';
export default {
  name: "invoice-info",
  components: {
    [NavBar .name]: NavBar,
    [Toast .name]: Toast,
    [Form .name]: Form,
    [Field .name]: Field,
    [RadioGroup .name]: RadioGroup,
    [Radio .name]: Radio,
    [Switch .name]: Switch,
  },
  data() {
    return {
      titleId: -1,
      pageTitle: "",
      isUpdate: false,
      taxName: "",
      isDefault: false,
      taxId: "",
      address: "",
      tel: "",
      bank: "",
      account: "",
      radio: "1",
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 45px 15px 50px;
}
</style>