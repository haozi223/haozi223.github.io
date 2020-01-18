<template>
  <div>
    <van-row>
      <van-col span="6">
        <!-- 宽度可调节 -->
        <van-sidebar
          v-model="activeKey"
          class="the_left"
        >
          <van-sidebar-item title="标签名称" />
          <!-- v-for循环添加标签 -->
        </van-sidebar>
      </van-col>
      <van-col span="18">
        <div>
          <h6>123</h6>
          <van-grid :column-num="3">
            <van-grid-item
              v-for="value in 6"
              :key="value"
              icon="photo-o"
              text="文字"
            />
          </van-grid>
        </div>
        <!-- v-for循环绑定内容，根据标签对应渲染内容 -->
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Sidebar, SidebarItem, Row, Col, Grid, GridItem } from 'vant'

Vue.use(Sidebar).use(SidebarItem).use(Row).use(Col).use(Grid).use(GridItem)
export default {
  data () {
    return {
      activeKey: 0
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
.the_left {
  width: 100%;
  // border-right: 1px solid #000;
  box-sizing: border-box;
}
</style>
