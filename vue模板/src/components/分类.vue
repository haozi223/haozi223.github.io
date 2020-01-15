<template>
  <div>
    <van-row class="top_box">
      <van-col
        span="3"
        class="between_box"
      >
        <van-icon
          name="arrow-left"
          @click.native="$router.back()"
          :color="leftcolor||''"
        />
      </van-col>
      <van-col
        :span="17 * 1 + (this.soso ? 0 : 4) * 1"
        class="between_box"
        :style="{transition: soso?'none':'width 0.2s'}"
      >
        <van-field
          :value="value"
          :placeholder="placeholder"
          class="top_input"
          @input="$emit('update:value', $event)"
          :clearable="inputclearable"
          :style="{borderColor:bordercolor||''}"
        />
      </van-col>
      <van-col
        :span="soso?4:0"
        v-if="soso"
        class="between_box"
      >
        <van-button
          plain
          type="info"
          round
          size="small"
          class="button"
          :color="buttoncolor"
          @click="$emit('soto')||null"
          text="搜索"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from 'vue'

import { Field, Row, Col, Icon, Button } from 'vant'

Vue.use(Field).use(Row).use(Col).use(Icon).use(Button)
export default {
  props: {
    value: String,
    soso: Boolean,
    bordercolor: String,
    inputclearable: Boolean,
    leftcolor: String,
    buttoncolor: String,
    placeholder: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top_box {
  border-top: solid #fff 16px;
  height: 1.1rem;
  display: flex;
  align-items: center;
  .between_box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    height: 100%;
  }
  .top_input {
    border: 1px solid #ccc;
    border-radius: 20px;
    height: 80%;
    padding: 3px 16px;
    font-size: 16px;
    margin-right: 8px;
    width: 100%;
  }
  .button {
    max-width: 100%;
    font-size: 14px;
    transition: all 0.5s;
  }
}
</style>
