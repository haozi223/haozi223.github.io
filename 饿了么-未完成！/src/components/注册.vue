<template>
  <div id="registered">
    <van-cell-group :style="{'margin-bottom':'20px','width':'100%'}">
      <van-field
        v-model="username"
        placeholder="请输入用户名"
        left-icon="user-o"
        required
        maxlength="18"
        :error-message="usererr"
        label="用户名"
        @input="Modify1"
      />
      <van-field
        v-model="telnum"
        placeholder="请输入手机号"
        left-icon="phone-o"
        required
        maxlength="11"
        :error-message="telerr"
        label="手机号"
        @input="Modify2"
      />
      <van-field
        v-model="password"
        :type="According?'text':'password'"
        label="密码"
        placeholder="请输入密码"
        maxlength="18"
        required
        :left-icon="According?'eye-o':'closed-eye'"
        :error-message="passerr"
        @input="Modify3"
      >
        <van-button slot="button" size="small" @click="isAccording">{{According?'隐藏':'显示'}}</van-button>
      </van-field>
    </van-cell-group>
    <van-button plain type="info" :style="{'width':'200px'}" @click="registered_go">注册</van-button>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      username: "",
      telnum: "",
      password: "",
      usererr: "",
      telerr: "",
      passerr: "",
      According: false
    };
  },
  methods: {
    registered_go() {
      if (this.username == "") {
        this.usererr = "请输入用户名";
        return;
      } else if (this.telnum == "") {
        this.telerr = "请输入手机号";
        return;
      } else if (this.password == "") {
        this.passerr = "请输入密码";
        return;
      }
      if (this.usernameistrue()) {
        if (this.telistrue()) {
          if (this.passwordistrue()) {
            this.axios
              .post(
                "http://localhost:3000/registered",
                this.$qs.stringify({
                  用户名: this.username,
                  手机号: this.telnum,
                  密码: this.password
                }),
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }
              )
              .then(response => {
                if (response.data) {
                  Dialog.confirm({
                    title: "恭喜",
                    message:
                      "恭喜你成为饿了么集团所宠幸的顾客,注册成功，是否登录？"
                  }).then(() => {
                    this.$router.back();
                  });
                } else {
                  Dialog.alert({
                    title: "提示",
                    message: "号码已被注册"
                  }).then(() => {
                    this.telerr = "请输入新的号码！";
                  });
                }
              })
              .catch(response => {
                window.console.log(response);
              });
          } else {
            this.passerr = "请正确输入密码";
          }
        } else {
          this.telerr = "请正确输入手机号";
        }
      } else {
        this.usererr = "用户名有非法字符";
      }
    },
    isAccording() {
      this.According = !this.According;
    },
    telistrue() {
      if (/^1[3456789]\d{9}$/.test(this.telnum)) {
        return true;
      } else {
        return false;
      }
    },
    usernameistrue() {
      if (/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(this.username)) {
        return true;
      } else {
        return false;
      }
    },
    passwordistrue() {
      if (/^[a-zA-Z]\w{5,17}$/.test(this.password)) {
        return true;
      } else {
        return false;
      }
    },
    Modify1() {
      this.usererr = "";
    },
    Modify2() {
      this.telerr = "";
    },
    Modify3() {
      this.passerr = "";
    }
  }
};
</script>
<style lang="scss" scoped>
#registered {
  padding-top: 40px;
  background: #ccccff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>