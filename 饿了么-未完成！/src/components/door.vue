<template>
  <div id="bigdoor">
    <keep-alive>
      <router-view />
    </keep-alive>
    <div class="bottom">
      <van-tabbar v-model="active">
        <van-tabbar-item replace to="home" name="/home">
          <i slot="icon" class="el-icon-eleme"></i> 首页
        </van-tabbar-item>
        <van-tabbar-item replace to="find" name="/find">
          <i slot="icon" class="el-icon-discover"></i>
          发现
        </van-tabbar-item>
        <van-tabbar-item replace to="description" name="/description" icon="description">订单</van-tabbar-item>
        <van-tabbar-item replace to="user" name="/user" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
// import router from "../router/index";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: this.$route.path
    };
  }
};
</script>
<style lang="scss" scoped>
#bigdoor {
  display: flex;
  flex-direction: column;
  height: 100%;
  .bottom {
    position: fixed;
    z-index: 9999;
  }
}
</style>
