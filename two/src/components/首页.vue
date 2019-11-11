<template>
  <div @click="maskinoff">
    <main>
      <transition name="fade">
        <van-icon name="upgrade" class="totop" size="40px" v-show="totop" @click="topzerogo" />
      </transition>
      <van-cell :title="adress" icon="location-o" @click="gochu" class="top" :border="false" />
      <van-sticky>
        <van-search v-model="value" placeholder="输入商店、商品名称" @search="onSearch" background="#0099CC">
          <div slot="action" @click="onSearch" :style="{'color':'#fff'}">搜索</div>
        </van-search>
      </van-sticky>
      <van-grid :gutter="5" :column-num="5" :border="false">
        <van-grid-item
          v-for="(val,index) in $store.getters.getNevIcon"
          :key="index"
          :icon="val.img"
          :text="val.txt"
        />
      </van-grid>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 60px' }">推荐商家</van-divider>
      <van-sticky :offset-top="54">
        <van-row type="flex" justify="center" :style="{'background':'#fff'}">
          <van-col
            span="6"
            style="text-align: center;font-size: 14px;color: #333;line-height: 50px;"
          >
            <van-dropdown-menu>
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
          </van-col>
          <van-col
            span="6"
            style="text-align: center;font-size: 14px;color: #333;line-height: 50px;"
          >距离最近</van-col>
          <van-col
            span="6"
            style="text-align: center;font-size: 14px;color: #333;line-height: 50px;"
          >品质联盟</van-col>
          <van-col
            span="6"
            style="text-align: center;font-size: 14px;color: #333;line-height: 50px;"
          >
            <van-dropdown-menu>
              <van-dropdown-item title="筛选" ref="item">
                <van-button block type="info">确认</van-button>
              </van-dropdown-item>
            </van-dropdown-menu>
          </van-col>
        </van-row>
      </van-sticky>
      <van-list v-model="loading" @load="getsList">
        <div v-for="(y,i) in $store.getters.getmerchants" :key="i" class="marks" :id="y.id">
          <div slot="tags" class="maskOntology">
            <van-button round type="warning" class="nolike" @click.stop>不喜欢</van-button>
          </div>
          <van-card :thumb="y.img" lazy-load @click="goshop(y.id)">
            <div slot="tags" class="title">
              <span v-text="y.title" class="title-zi" />
              <span @click.stop="maskoff" class="maskoff">···</span>
            </div>
            <div slot="tags" :style="{'display':'flex'}">
              <!-- <van-rate v-model=" distribution" readonly size="12px" allow-half /> -->
              <el-rate
                :value="y.星星*1"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
              <span v-text="'月售'+y.月售" class="inshow" />
            </div>
            <div slot="tags" class="delivery">
              <span>
                <span v-text="y.起送+'元起送'" />
                |
                <span v-text="'配送费'+y.配送+'元'" />
              </span>
              <span>
                <span v-text="y.距离+'米'" />
                |
                <span v-text="y.时间+'分钟'" />
              </span>
            </div>
            <div slot="tags">
              <van-tag plain v-for="(u,i) in y.标识" :key="i" class="mark">
                <span v-text="u" />
              </van-tag>
            </div>
            <div slot="tags" class="activitiesList">
              <span class="smallxia" @click.stop="According" v-if="y.活动.length>2">
                <span v-text="y.活动.length+'个活动'" />
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                  alt
                  class="subscript"
                />
              </span>
              <div v-for="(h,i) in y.活动" :key="i">
                <van-tag :color="h.颜色">{{h.字}}</van-tag>
                <span v-text="h.txt" class="didi" />
              </div>
            </div>
          </van-card>
        </div>
      </van-list>
    </main>
    <van-popup v-model="chulai" position="right" :style="{ height: '100%',width:'100%'}">
      <van-nav-bar title="选择收获地址" left-text="返回" right-text="新增地址" left-arrow @click-left="huiin" />
      <van-search v-model="bearing" :label="adress" placeholder="请输入地址" @search="onbearing" />
      <van-list>
        <van-cell v-for="(item,index) in 0" :key="index" :title="item" />
      </van-list>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Search,
  Icon,
  Grid,
  GridItem,
  Divider,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Button,
  Tag,
  Sticky,
  Lazyload,
  Rate,
  Overlay,
  List,
  Popup,
  NavBar,
  Cell,
  CellGroup
} from "vant";

Vue.use(Divider)
  .use(Search)
  .use(Icon)
  .use(Grid)
  .use(GridItem)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Row)
  .use(Col)
  .use(Card)
  .use(Tag)
  .use(Sticky)
  .use(Lazyload)
  .use(Rate)
  .use(Button)
  .use(Overlay)
  .use(List)
  .use(Popup)
  .use(NavBar)
  .use(Cell)
  .use(CellGroup);

export default {
  data() {
    return {
      value: "",
      totop: false,
      adress: "广州市",
      value1: 0,
      distribution: 2,
      switch1: false,
      switch2: false,
      value5: 3.5,
      option1: [
        { text: "附近商家", value: 0 },
        { text: "价格优惠", value: 1 },
        { text: "热度最高", value: 2 }
      ],
      loading: false,
      chulai: false,
      bearing: ""
    };
  },
  methods: {
    onSearch() {
      if (this.value.trim()) {
        window.console.log(this.value);
      }
      this.value = "";
    },
    maskoff(ev) {
      ev.path[5].getElementsByClassName("maskOntology")[0].style.display =
        "block";
    },
    maskinoff() {
      for (let inoff of document.getElementsByClassName("maskOntology")) {
        inoff.style.display = "none";
      }
    },
    According(ev) {
      ev.path[2]
        .getElementsByClassName("subscript")[0]
        .classList.toggle("imgzhuang");
      ev.path[3]
        .getElementsByClassName("activitiesList")[0]
        .classList.toggle("activitiesList_nov");
    },
    windowScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 300) {
        this.totop = true;
      } else {
        this.totop = false;
      }
      for (let inoff of document.getElementsByClassName("maskOntology")) {
        inoff.style.display = "none";
      }
    },
    topzerogo() {
      window.scroll(0, 0);
    },
    getsList() {
      this.axios
        .get("http://localhost:3000/merchants")
        .then(response => {
          this.$store.dispatch("setmerchants", response.data);
          this.loading = false;
        })
        .catch(response => {
          window.console.log(response);
        });
    },
    gochu() {
      this.chulai = true;
    },
    huiin() {
      this.chulai = false;
    },
    onbearing() {
      window.console.log("soso");
    },
    goshop(val) {
      this.$router.push({ path: "/merchants", query: { merchants: val } });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  }
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  flex: 1;
  z-index: 1;
  margin-bottom: 50px;
  .top {
    padding: 25px 25px 5px;
    background: #0099cc;
    span {
      font-size: 18px;
      color: white;
      position: relative;
      padding-right: 20px;
    }
    span::after {
      content: "";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      background: linear-gradient(to right top, #fff 50%, #0099cc 50%);
      right: 5px;
      top: 6px;
      transform: rotate(-45deg);
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    .title-zi {
      font-size: 14px;
      font-weight: bold;
      // border: solid
    }
  }
  .starstar {
    margin-left: 8px;
    color: #666;
  }
  .inshow {
    margin-left: 8px;
    color: #666;
  }
  .van-card__content > div {
    margin: 2px 0;
  }
  .mark {
    margin-right: 5px;
  }
  .delivery {
    display: flex;
    justify-content: space-between;
  }
  .didi {
    margin-left: 5px;
  }
  .van-search__action:active {
    background: #0099cc;
  }
  .marks {
    position: relative;
  }
  .maskOntology {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
    display: none;
  }
  .maskoff {
    margin-right: 5px;
  }
  .nolike {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .activitiesList {
    position: relative;
    height: 40px;
    overflow: hidden;
    .smallxia {
      position: absolute;
      right: 5px;
      top: 1px;
      font-size: 10px;
      img {
        width: 8px;
        margin-left: 5px;
        transform: translate(0, -2px);
        transition: transform 0.3s;
      }
      .imgzhuang {
        transform: translate(0, -2px) rotate(180deg);
      }
    }
    div {
      margin: 2px 0;
    }
  }
  .activitiesList_nov {
    height: auto !important;
  }
  .totop {
    position: fixed;
    right: 25px;
    bottom: 70px;
    width: 40px;
    height: 40px;
    z-index: 5;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 50%;
    z-index: 500;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
.van-popup {
  background: #ffffcc;
}
</style>
