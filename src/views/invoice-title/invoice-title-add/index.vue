<template>
  <div>
    <van-nav-bar
        :title="pageTitle"
        left-text="返回"
        right-text="保存"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <van-form>
      <van-field name="radio" label="类型">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">个人</van-radio>
            <van-radio name="2">企业</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
          v-model="taxName"
          name="名称"
          label="抬头名称"
          placeholder="抬头名称"
          :rules="[{ required: true, message: '请填写抬头名称' }]"
      />
      <van-field name="switch" label="默认抬头">
        <template #input>
          <van-switch v-model="isDefault" size="20" />
        </template>
      </van-field>

      <div v-show="radio !== '1'">
        <van-field
            v-model="taxId"
            name="税号"
            label="税号"
            placeholder="税号"
            :rules="[{ required: true, message: '请填写税号' }]"
        />
        <van-field
            v-model="address"
            name="地址"
            label="地址"
            placeholder="地址"
        />
        <van-field
            v-model="tel"
            name="电话"
            label="电话"
            placeholder="电话"
        />
        <van-field
            v-model="bank"
            name="开户行"
            label="开户行"
            placeholder="开户行"
        />
        <van-field
            v-model="account"
            name="开户行账户"
            label="账户"
            placeholder="开户行账户"
        />
      </div>






    </van-form>
  </div>
</template>

<script>
import { NavBar, Toast, Form, Field, RadioGroup, Radio, Switch } from 'vant';
export default {
  name: "invoice-title-add",
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
    },
    onClickRight() {
      Toast('保存成功');
      this.$router.go(-1);//返回上一层
    },
  },
  mounted() {
    const param = this.$route.params;
    console.log(JSON.stringify(param));
    if (param.id === null || param.id === undefined) {
      this.pageTitle = "新增抬头";
    } else {
      this.pageTitle = "抬头修改";
      this.titleId = param.id;
      this.isUpdate = true;
    }
  }
}
</script>

<style scoped>

</style>