<template>
  <div class="forward-detail">
    <el-button @click="getDetail">点我</el-button>
    <el-button @click="util.debounce(fnDelay, delay, that)">测试debonce</el-button>
    <section>大家好{{alink}}</section>
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
import {util} from '../../utils/util'
export default {
  data () {
    return {
      loading: false,
      singleCreate: '',
      delay: 1000,
      timeId: '',
      alink: '欧哥歌测试'
    }
  },
  created () {},
  destroyed () {},
  mounted () {
    // console.log(this.$store.state.global)
    // this.utils = util
    // console.log(this.that)
    this.alink.sup()
  },
  computed: {
    util () {
      return util
    },
    that () {
      return this
    }
  },
  watch: {
    // fn (val) {
    //   console.log(val)
    // }
  },
  methods: {
    getDetail () {
      let that = this
      // let params = {
      //   id: 101
      // }
      let params = {
        id: this.singleCreate
      }
      api._ForwardGetFdDetail(params).then(res => {
        console.log(res)
        that.singleCreate = JSON.stringify(res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    fnDelay () {
      console.log(new Date().getTime())
    }
  }
}
</script>

<style>
</style>
