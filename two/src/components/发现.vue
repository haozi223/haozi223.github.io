<template>
  <div id="find" :style="{'background':'#f5f5f5','margin-bottom':'50px'}">
    <div class="surprised">
      <van-row type="flex">
        <van-col span="12">
          <van-row
            type="flex"
            :style="{'height':'100%' ,'padding':'20px 10px 5px','box-sizing':'border-box'}"
          >
            <van-col span="12">
              <p class="Orangefont">金币商城</p>
              <span class="zeroRMB">0元好物在这里</span>
            </van-col>
            <van-col span="12" :style="{'display':'flex','flex-direction':'column-reverse'}">
              <img
                src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp"
                alt
                style="height:80px"
              />
            </van-col>
          </van-row>
        </van-col>
        <van-row
          type="flex"
          :style="{'flex-direction':'column','flex':'1','border-left':'1px solid #ddd','':''}"
        >
          <van-col
            span="12"
            :style="{'height':'80px','width':'100%','border-bottom':'1px solid #ddd','display':'flex','box-sizing':'border-box','padding':'0 10px'}"
          >
            <div style="width:60%">
              <p class="Orangefont" style="margin-top:20px;color:rgb(27, 169, 225)">推荐有奖</p>
              <span class="zeroRMB">20元现金拿不停</span>
            </div>
            <img
              src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp"
              alt
              style="margin-top:20px;width:45px;height:45px"
            />
          </van-col>
          <van-col
            span="12"
            :style="{'height':'80px','width':'100%','display':'flex','box-sizing':'border-box','padding':'0 10px'}"
          >
            <div style="width:60%">
              <p class="Orangefont" style="margin-top:20px;color:rgb(237, 102, 96)">周边优惠</p>
              <span class="zeroRMB">赢取口碑好券</span>
            </div>
            <img
              src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp"
              alt
              style="margin-top:20px;width:45px;height:45px"
            />
          </van-col>
        </van-row>
      </van-row>
    </div>
    <div class="recommended" v-show="isshow1">
      <van-divider
        :style="{ color: '#444', borderColor: '#666', padding: '0 30%' ,'font-weight':'bold','margin':'15px 0 5px'}"
      >
        <van-icon name="good-job-o" :style="{'margin-right':'5px','color':'red'}" />为你推荐
      </van-divider>
      <p class="taste">你的口味我都懂</p>
      <van-grid :column-num="2" clickable :style="{'margin-top':'15px'}" :center="false">
        <van-grid-item
          v-for="(val,index) in $store.getters.getrecommended"
          :key="index"
          :id="val.id"
        >
          <div :style="{'position':'relative','width':'150px'}">
            <van-image width="150" height="auto" lazy-load :src="val.img" />
            <p class="smallSecret" v-text="'您可能感兴趣的美食'"/>
          </div>
          <h4 v-text="val.title"/>
          <small>
            <span v-text="'月售'+val.月售+'份'"/>
            <span v-text="'好评率'+val.好评+'%'"/>
          </small>
          <p class="price">
            <span>
              ￥
              <em v-text="val.售价"/>
            </span>
            <del v-text="'￥'+val.旧价"/>
          </p>
          <aside>
            <van-icon name="shop-o" />
            <span v-text="val.店名"/>
          </aside>
        </van-grid-item>
      </van-grid>
      <p class="more">
        查看更多
        <van-icon name="arrow" />
      </p>
    </div>
    <div class="Timelimit" v-show="isshow2">
      <van-divider
        :style="{ color: '#444', borderColor: '#666', padding: '0 30%' ,'font-weight':'bold','margin':'15px 0 5px'}"
      >
        <van-icon name="clock-o" :style="{'margin-right':'5px','color':'red'}" />限时好礼
      </van-divider>
      <p class="exchange">金币换豪礼</p>
      <van-grid :column-num="3" gutter="5" :center="false">
        <van-grid-item v-for="(val,index) in $store.getters.getTimelimit" :key="index">
          <div :style="{'position':'relative'}">
            <van-image width="100%" height="auto" lazy-load :src="val.img" />
            <span class="badge" v-text="val.头标"/>
          </div>
          <h5 v-text="val.title"/>
          <small>
            <span v-text="val.price+'金币'"/>
            <del v-text="'￥'+val.del"/>
          </small>
        </van-grid-item>
      </van-grid>
      <p class="more">
        查看更多
        <van-icon name="arrow" />
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Image } from "vant";
Vue.use(Image);
export default {
  data() {
    return {
      isshow1: false,
      isshow2: false
    };
  },
  methods: {
    getrecommend() {
      this.axios
        .get("http://localhost:3000/recommended")
        .then(response => {
          this.$store.dispatch("setrecommended", response.data);
          this.isshow1 = true;
        })
        .catch(response => {
          window.console.log(response);
        });
    },
    getTime_limit() {
      this.axios
        .get("http://localhost:3000/Timelimit")
        .then(response => {
          this.$store.dispatch("setTimelimit", response.data);
          this.isshow2 = true;
        })
        .catch(response => {
          window.console.log(response);
        });
    }
  },
  created() {
    this.getrecommend();
    this.getTime_limit();
  }
};
</script>
<style lang="scss" scoped>
.surprised {
  margin-bottom: 30px;
  background: #fff;
  .Orangefont {
    color: orange;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }
  .zeroRMB {
    color: #aaa;
    font-size: 10px;
    line-height: 14px;
  }
}
.recommended {
  background: #fff;
  overflow: hidden;
  .taste {
    margin: 0;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
  .van-image {
    display: block;
  }
  .smallSecret {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    color: #fff;
    font-size: 6px;
    padding: 3px 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
  }
  h4 {
    overflow: hidden;
    color: #333;
    white-space: normal;
    text-overflow: ellipsis;
    font-size: 12px;
    margin: 0;
    padding-left: 5px;
  }
  small {
    font-size: 8px;
    color: #666;
    padding-left: 5px;
    span {
      margin-right: 5px;
    }
  }
  .price {
    margin: 0 0 5px 3px;
    border-bottom: 1px dotted #ccc;
    span {
      font-size: 10px;
      color: orangered;
      margin-right: 5px;
      em {
        font-style: normal;
        font-size: 14px;
        font-weight: bold;
      }
    }
    del {
      font-size: 8px;
    }
  }
  aside {
    display: flex;
    align-items: center;
    span {
      font-size: 10px;
      color: #999;
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 70%;
    }
  }
}
.Timelimit {
  background: #fff;
  overflow: hidden;
  .exchange {
    margin: 0;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
  .badge {
    position: absolute;
    padding: 2px 3px;
    background: #333;
    color: #fff;
    font-size: 8px;
    left: 0;
    top: 5px;
  }
  .van-image {
    display: block;
  }
  h5 {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 400;
    width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  small {
    font-size: 10px;
    span {
      color: #ff5339;
      margin-right: 3px;
    }
    del {
      font-size: 8px;
    }
  }
}
.more {
  border-bottom: 1px solid #f5f5f5;
  text-align: center;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  margin: 0;
  padding: 15px;
}
</style>