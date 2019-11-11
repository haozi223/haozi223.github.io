<template>
  <div id="login">
    <van-image
      width="130"
      height="56"
      lazy-load
      src="http://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png"
    />
    <van-cell-group>
      <van-field
        v-model="telnum"
        type="number"
        maxlength="11"
        center
        :border="false"
        clearable
        placeholder="手机号"
        :style="{'border':'1px solid'+telborder ,'margin-top':'15px','border-radius':'6px','padding':'5px 8px'}"
        :error-message="telerr"
        @focus="Focusing1"
        @blur="blur1"
        @input="Modify1"
      >
        <van-button slot="button" size="small" @click="prompt">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="passnum"
        type="password"
        maxlength="20"
        center
        :border="false"
        clearable
        placeholder="密码"
        :style="{'border':'1px solid'+passborder ,'margin-top':'15px','border-radius':'6px','padding':'5px 8px','width':'260px','height':'42px'}"
        :error-message="passerr"
        @focus="Focusing2"
        @blur="blur2"
        @input="Modify2"
      />
    </van-cell-group>
    <p class="rules">
      新用户登录即自动注册，并表示已同意
      <a
        href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
      >《用户服务协议》</a>和
      <a
        href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
      >《隐私权政策》</a>
    </p>
    <van-button
      type="primary"
      :style="{'margin-bottom':'20px','width':'250px'}"
      @click="login_go"
      :loading="loading"
      loading-type="spinner"
    >登录</van-button>
    <span class="Aboutus">关于我们</span>
    <span>测试阶段</span>
    <van-button type="default" to="/registered">注册请点这里</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Toast } from "vant";
Vue.use(Field).use(Toast);
export default {
  data() {
    return {
      telnum: "",
      passnum: "",
      telborder: "#ddd",
      passborder: "#ddd",
      telerr: "",
      passerr: "",
      loading: false
    };
  },
  methods: {
    Focusing1() {
      this.telborder = "#0085ff";
    },
    blur1() {
      this.telborder = "#ddd";
    },
    Focusing2() {
      this.passborder = "#0085ff";
    },
    blur2() {
      this.passborder = "#ddd";
    },
    prompt() {
      Toast("验证码功能暂时不能用哟");
    },
    login_go() {
      if (this.telnum == "") {
        this.telerr = "请输入手机号";
        return;
      } else if (this.passnum == "") {
        this.passerr = "请输入密码";
        return;
      } else if (this.telistrue()) {
        this.telerr = "";
        this.loading = true;
        this.axios
          .post(
            "http://localhost:3000/login",
            this.$qs.stringify({
              手机号: this.telnum,
              密码: this.passnum
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(response => {
            this.loading = false;
            if (response.data.state == "no-1") {
              this.$dialog
                .alert({
                  title: "提示",
                  message: "该手机号未注册"
                })
                .then(() => {
                  this.telerr = "请重新输入手机号或注册";
                  this.telborder = "#FF0033";
                });
            } else if (response.data.state == "no-2") {
              this.$dialog
                .alert({
                  title: "提示",
                  message: "密码错误"
                })
                .then(() => {
                  this.passerr = "请重新输入密码";
                  this.passborder = "#FF0033";
                });
            } else {
              window.localStorage.setItem("key", response.data.state);
              this.$store.dispatch("setislogin", true);
              this.$store.dispatch("setuserdata", response.data.data);
              this.$router.back();
            }
          })
          .catch(response => {
            window.console.log(response);
          });
      } else {
        this.telerr = "请正确填写手机号";
      }
    },
    telistrue() {
      if (/^1[3456789]\d{9}$/.test(this.telnum)) {
        return true;
      } else {
        return false;
      }
    },
    Modify1() {
      this.telerr = "";
    },
    Modify2() {
      this.passerr = "";
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  .rules {
    font-size: 12px;
    width: 250px;
    color: #666;
    margin-bottom: 20px;
    a {
      color: #0085ff;
    }
  }
  .Aboutus {
    font-size: 12px;
    color: #999;
    margin-bottom: 30px;
  }
}
</style>