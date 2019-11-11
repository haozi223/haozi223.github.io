<template>
  <div id="uesr">
    <div class="top">
      <van-image
        round
        width="60"
        height="60"
        :src="$store.getters.getuserdata.img?$store.getters.getuserdata.img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=='"
      />
      <div class="login" @click="!$store.getters.getislogin?tologin():null">
        <p v-text="$store.getters.getislogin?$store.getters.getuserdata.用户名:'登录/注册'" />
        <small
          v-text="$store.getters.getislogin?$store.getters.getuserdata.手机号.slice(0,3)+'****'+$store.getters.getuserdata.手机号.slice(7):'登录后享受更多特权'"
        />
      </div>
      <van-icon name="arrow" @click="$store.getters.getislogin?toexit():null" />
    </div>
    <van-grid :column-num="2">
      <van-grid-item>
        <em class="smallcircle" style="background: rgb(255, 95, 62)">
          <van-icon name="bill-o" :style="{'color':'#fff'}" />
        </em>
        <p class="smallword">红包</p>
      </van-grid-item>
      <van-grid-item>
        <em class="smallcircle" style="background: rgb(106, 194, 11)">
          <van-icon name="points" :style="{'color':'#fff'}" />
        </em>
        <p class="smallword">金币</p>
      </van-grid-item>
    </van-grid>
    <van-cell
      color
      title="我的地址"
      is-link
      :style="{'margin':'15px 0'}"
      @click="$store.getters.getislogin?toaddress():null"
    >
      <van-icon
        slot="icon"
        name="map-marked"
        color="#0085ff"
        style="line-height: inherit;margin-right:10px"
      />
    </van-cell>
    <van-cell-group :style="{'margin':'15px 0'}">
      <van-cell title="金币商城" is-link>
        <van-icon
          slot="icon"
          name="gold-coin"
          color="gold"
          style="line-height: inherit;margin-right:10px"
        />
      </van-cell>
      <van-cell title="分享20元现金" is-link>
        <van-icon
          slot="icon"
          name="point-gift"
          color="rgb(252, 123, 83)"
          style="line-height: inherit;margin-right:10px"
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group :style="{'margin':'15px 0'}">
      <van-cell title="我的客服" is-link>
        <van-icon
          slot="icon"
          name="service"
          color="#0085ff"
          style="line-height: inherit;margin-right:10px"
        />
      </van-cell>
      <van-cell title="下载饿了么APP" is-link>
        <van-icon
          slot="icon"
          name="fire"
          color="red"
          style="line-height: inherit;margin-right:10px"
        />
      </van-cell>
      <van-cell title="规则中心" is-link>
        <van-icon
          slot="icon"
          name="warning"
          color="#0085ff"
          style="line-height: inherit;margin-right:10px"
        />
      </van-cell>
    </van-cell-group>
    <p class="privacy">隐私规则</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    tologin() {
      this.$router.push({ path: "/login" });
    },
    toexit() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否退出登录,重新回到徒步打饭的日子？？"
        })
        .then(() => {
          window.localStorage.removeItem("key");
          this.$store.dispatch("setislogin", false);
          this.$store.dispatch("setuserdata", []);
        })
        .catch(() => {
          // on cancel
        });
    },
    toaddress() {
      this.$router.push({ path: "/address" });
    }
  }
};
</script>
<style lang="scss" scoped>
#uesr {
  height: calc(100% - 50px);
  background: #f5f5f5;
  .top {
    height: 60px;
    background: linear-gradient(90deg, #0af, #0085ff);
    padding: 20px 15px;
    display: flex;
    color: white;
    align-items: center;
    .login {
      margin-left: 15px;
      flex: 1;
      p {
        margin: 0;
        font-weight: bold;
        line-height: 30px;
        font-size: 18px;
      }
      small {
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
  .smallcircle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .smallword {
    font-size: 12px;
    margin: 8px 0 0;
    color: #666;
    font-weight: 700;
  }
  .privacy {
    text-align: center;
    font-size: 14px;
    color: #0085ff;
  }
}
</style>