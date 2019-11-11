<template>
  <div v-if="$store.getters.getislogin" id="order">
    <div class="no_order">
      <van-image
        width="200"
        height="144"
        src="https://fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png"
      />
      <p class="Norecord">无订单记录！</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#order {
  height: calc(100% - 50px);
  width: 100%;
  .no_order {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    .Norecord {
      font-size: 14px;
      text-align: center;
      color: #666;
    }
  }
}
</style>