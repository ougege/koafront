<template>
  <div class="forward-delete">
    <div>
        <el-input
            placeholder="请输入合约id"
            v-model="forwardId"
            clearable>
        </el-input>
        <button @click="doSubmit">删除</button>
    </div>
  </div>
</template>

<script>
import * as api from '../../api'
// import axios from 'axios'
export default {
  data () {
    return {
      loading: false,
      forwardId: ''
    }
  },
  created () {},
  destroyed () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    doSubmit () {
      let that = this
      if (this.forwardId !== '') {
        let params = {
          id: this.forwardId
        }
        api._ForwardDropFd(params).then(res => {
          console.log(res)
          that.singleCreate = JSON.stringify(res.data.data)
        }).catch(err => {
          console.log(err)
        })
      } else {
        // type值:success/warning/info/error
        this.$message({
          message: '请输入合约id',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style>
</style>
