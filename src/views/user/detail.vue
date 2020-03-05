<template>
  <div class="forward-detail">
    <el-button @click="getDetail">点我</el-button>
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 6}"
      placeholder="请输入内容"
      v-model="singleCreate">
    </el-input>
    <!-- <button ></button> -->
    <!-- 调试koa和vue跨域 -->
    <!-- https://segmentfault.com/a/1190000020102366 -->
    <!-- https://segmentfault.com/q/1010000019446949 -->
  </div>
</template>

<script>
import * as api from '../../api'
export default {
  data () {
    return {
      loading: false,
      singleCreate: 'ougege'
    }
  },
  created () {},
  destroyed () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    getDetail () {
      let params = {
        name: this.singleCreate
      }
      api._UserGetUserDetail(params).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>
