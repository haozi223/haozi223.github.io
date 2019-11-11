<template>
  <div>
    <van-nav-bar
      title="我的地址"
      left-arrow
      @click-left="onClickLeft"
      :style="{'background':'linear-gradient(90deg,#0af,#0085ff)'}"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { AddressList } from "vant";

Vue.use(AddressList);
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },

  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss" scoped>
.van-icon-arrow-left {
  color: #fff;
  font-size: 20px;
}
.van-nav-bar__title {
  color: #fff;
  font-weight: bold;
}
</style>