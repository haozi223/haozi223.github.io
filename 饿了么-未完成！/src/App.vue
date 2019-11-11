<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    Automaticlogin() {
      if (window.localStorage.getItem("key")) {
        this.axios
          .post(
            "http://localhost:3000/automatic",
            this.$qs.stringify({
              key: window.localStorage.getItem("key")
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(response => {
            if (response.data.islogin) {
              this.$store.dispatch("setislogin", true);
              this.$store.dispatch("setuserdata", response.data.data);
            } else {
              this.$dialog
                .confirm({
                  title: "提示",
                  message: "登录信息以过期,是否重新登录"
                })
                .then(() => {
                  window.localStorage.removeItem("key");
                  this.$router.push({ path: "/login" });
                })
                .catch(() => {
                  window.localStorage.removeItem("key");
                });
            }
          })
          .catch(response => {
            window.console.log(response);
          });
      } else {
        this.$store.dispatch("setislogin", false);
      }
    }
  },
  created() {
    this.Automaticlogin();
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
