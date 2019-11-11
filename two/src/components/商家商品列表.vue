<template>
  <div id="merchants">
    <header :style="{'background': '#CCCCCC'}">
      <van-icon name="arrow-left" class="goback" @click="goback" />
    </header>
    <nav class="tour">
      <van-image width="80" height="80" src="https://img.yzcdn.cn/vant/cat.jpeg" class="trademark" />
      <p class="title" v-text="'老王牛肉面'" />
      <p class="condition">
        <span v-text="'评价4.4'" />
        <span v-text="'月售70'" />
        <span v-text="'30分钟送达'" />
      </p>
      <div class="preferential">
        <div class="lelf">
          <van-tag
            plain
            type="danger"
            :style="{'font-size': '8px','margin-right':'5px'}"
            v-for="val in 4"
            :key="val"
          >{{'满20-5'}}</van-tag>
        </div>
        <span v-html="'4个优惠<em/>'" class="Activities_show" @click="toshow" />
      </div>
      <p class="announcement" v-text="'公告：用餐高峰期请提前下单，谢谢您的配合，谢谢！'" />
    </nav>
    <van-tabs v-model="activeName" sticky :style="{'margin-bottom':'50px'}">
      <van-tab title="点餐" name="点餐">
        <div :style="{'display':'flex'}">
          <van-sidebar v-model="activeKey" :style="{'height':innerheight-94+'px'}">
            <van-sidebar-item
              title="标签名称"
              v-for="val in 5"
              :key="val"
              ref="left_zuo"
              :info="info[val-1]"
              @click="floor(val-1)"
            />
          </van-sidebar>
          <ul
            class="shoplist"
            ref="shoplist"
            :style="{'background-color':'#fafafa','height':innerheight-94+'px' }"
            @scroll="checkfloor"
          >
            <li v-for="(vv,i) in 5" :key="i" ref="floor">
              <p class="childgoods">
                <strong v-text="'热销'" />
                <small v-text="'大家好才是真的好，噢耶'" />
              </p>
              <van-card
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                class="goods"
                lazy-load
                v-for="(val,ii) in 5"
                :key="ii"
              >
                <h6 slot="title" v-text="'商品信息'" />
                <div slot="desc" class="describe">
                  <p v-text="'好好吃，多来购买啊！！！'" />
                  <span v-text="'月售50份'" />
                  <span v-text="'好评88%'" />
                </div>
                <span slot="price" v-text="'￥10'" />
                <div slot="bottom" :style="{'display':'flex','flex-direction': 'row-reverse'}">
                  <div class="numnum">
                    <i
                      class="el-icon-remove-outline"
                      @click="Reduction($event,ii)"
                      ref="Reduction"
                      :style="{'display':'none'}"
                    />
                    <span :style="{'font-size':'14px','display':'none'}" ref="num">0</span>
                    <i
                      class="el-icon-circle-plus"
                      :style="{'color':'#3399CC'}"
                      @click="add($event,ii)"
                    />
                  </div>
                </div>
              </van-card>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="评价" name="评价">内容 2</van-tab>
      <van-tab title="商家" name="商家">内容 3</van-tab>
    </van-tabs>
    <van-submit-bar
      button-text="去结算"
      button-type="primary"
      :style="{'background-color': 'rgba(61,61,63,.9)' ,'z-index': 2500}"
      ref="caicai"
    >
      <van-icon
        name="shopping-cart"
        class="shopping-cart"
        info
        :style="{'background':isbuy?'#3190e8':'#444','color':isbuy?'#fff':'#aaa'}"
        @click="keepout"
      />
      <p class="settlement">
        <span v-text="'￥50'" v-show="isbuy" />
        <span v-text="'未选择商品'" v-show="!isbuy" />
      </p>
    </van-submit-bar>
    <van-popup v-model="show" position="bottom" :style="{'bottom':'50px'}" class="smallcar">
      <h5>
        <span v-show="isbuy">已选商品</span>
        <span>
          <i class="el-icon-delete" :style="{'margin-right':'5px'}" />请空
        </span>
      </h5>
      <ul v-show="isbuy">
        <li>
          <span v-text="'鸡蛋番茄面'" />
          <em
            v-text="'￥20'"
            :style="{'font-style': 'normal','color':'red','width':'50px','display':'inline-block'}"
          />
          <div class="num">
            <i class="el-icon-remove-outline" @click="Reduction($event)" ref="Reduction" />
            <span :style="{'font-size':'14px'}" ref="num">1</span>
            <i class="el-icon-circle-plus" :style="{'color':'#3399CC'}" @click="add($event)" />
          </div>
        </li>
      </ul>
    </van-popup>

    <van-action-sheet v-model="Activities_show" title="优惠活动" @open="zzz" @closed="zzt">
      <p v-for="val in 3" :key="val" :style="{'padding':'0 30px'}">
        <van-tag plain type="danger" :style="{'font-size':'8px'}">{{'标签'}}</van-tag>
        <span v-text="'各种各样的优惠，非常好'" :style="{'font-size':'12px','margin-left':'10px'}" />
      </p>
    </van-action-sheet>
  </div>
</template>
<script>
import Vue from "vue";
import { ActionSheet, Tab, Tabs, Sidebar, SidebarItem, SubmitBar } from "vant";

Vue.use(ActionSheet)
  .use(Tab)
  .use(Tabs)
  .use(Sidebar)
  .use(SidebarItem)
  .use(SubmitBar);
export default {
  data() {
    return {
      Activities_show: false,
      activeName: "点餐",
      activeKey: 0,
      innerheight: window.document.documentElement.clientHeight,
      isbuy: true,
      show: false,
      info: ["", "", "", "", ""]
    };
  },
  methods: {
    goback() {
      this.$router.back();
    },
    toshow() {
      this.Activities_show = true;
    },
    add(ev) {
      ev.currentTarget.previousElementSibling.innerText++;
      if (ev.currentTarget.previousElementSibling.innerText >= 1) {
        ev.currentTarget.previousElementSibling.style.display = "inline-block";
        ev.currentTarget.previousElementSibling.previousElementSibling.style.display =
          "inline-block";
      }
    },
    Reduction(ev) {
      ev.currentTarget.nextElementSibling.innerText--;
      if (ev.currentTarget.nextElementSibling.innerText <= 0) {
        ev.currentTarget.nextElementSibling.style.display = "none";
        ev.target.style.display = "none";
      }
    },
    floor(val) {
      this.$refs.shoplist.scrollTop = this.$refs.floor[val].offsetTop - 54;
    },
    checkfloor() {
      var shushu = 0;
      for (var i = 0; i < this.$refs.floor.length; i++) {
        if (
          Math.ceil(this.$refs.shoplist.scrollTop) >=
          this.$refs.floor[i].offsetTop - 54
        ) {
          shushu = i;
        }
      }

      this.activeKey = shushu;
    },
    keepout() {
      this.show = !this.show;
    },
    zzz() {
      this.$refs.caicai.style.zIndex = 2000;
    },
    zzt() {
      this.$refs.caicai.style.zIndex = 2500;
    }
  }
};
</script>
<style lang="scss" scoped>
#merchants {
  header {
    height: 100px;
    .goback {
      margin: 15px;
      font-size: 20px;
    }
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .trademark {
      position: absolute;
      top: -60px;
    }
    .title {
      margin-top: 30px;
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: bold;
    }
    .condition {
      display: flex;
      justify-content: space-between;
      width: 180px;
      font-size: 12px;
      color: #666;
      margin: 0 0 5px;
    }
    .preferential {
      display: flex;
      justify-content: space-between;
      width: 260px;
      align-items: center;
      .Activities_show {
        font-size: 8px;
        margin-right: 8px;
        transform: translate(0, 1px);
        position: relative;
        padding-right: 10px;
      }
      .Activities_show ::after {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        background: linear-gradient(to top right, #666 50%, #fff 50%);
        position: absolute;
        right: 0px;
        top: 30%;
        transform: rotate(-45deg);
      }
    }
    .announcement {
      font-size: 12px;
      color: #666;
      margin: 5px 0;
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .shopping-cart {
    position: absolute;
    left: 16px;
    top: -18px;
    font-size: 32px;
    padding: 5px;
    border-radius: 50%;
    border: 5px solid rgba(61, 61, 63, 0.9);
    .van-info {
      top: 5px;
      right: 5px;
    }
  }
  .settlement {
    position: absolute;
    left: 88px;
    top: 0;
    color: #fff;
  }
  .shoplist {
    overflow: auto;
    flex: 1;
  }
  .childgoods {
    margin: 10px 0;
    strong {
      font-size: 14px;
      margin: 0 15px;
    }
    small {
      font-size: 10px;
      color: #666;
    }
  }
  .goods {
    h6 {
      margin: 0;
      font-size: 14px;
    }
    .describe {
      font-size: 10px;
      color: #333;
      p {
        margin: 3px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span {
        margin-right: 8px;
      }
    }
    .numnum {
      font-size: 20px;
      display: flex;
      align-items: center;
      span {
        margin: 0 7px;
      }
    }
  }
}
.van-sidebar {
  overflow: auto;
}

.van-card__price {
  transform: translate(0, 20px);
}

.smallcar {
  h5 {
    position: relative;
    background: #eceff1;
    font-size: 14px;
    margin: 0;
    padding: 10px 15px;
    font-weight: 400;
    span:nth-child(2) {
      position: absolute;
      right: 15px;
    }
  }
  ul {
    padding-bottom: 10px;
    li {
      padding: 10px 20px;
      font-size: 14px;
      display: flex;
      align-items: center;
      span:nth-child(1) {
        display: inline-block;
        width: 210px;
      }
      .num {
        display: inline-flex;
        align-items: center;
        float: right;
        i {
          font-size: 24px;
        }
        span {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>