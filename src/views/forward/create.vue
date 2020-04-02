<template>
  <div class="forward-create">
    <div class="flex-ul row">
      <div class="flex-li">
        <div class="li-info">
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 6}"
            placeholder="请输入内容"
            v-model="singleCreate">
          </el-input>
          <el-button @click="create(1)">创建单个</el-button>
        </div>
      </div>
      <div class="flex-li">
        <div class="li-info">
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 6}"
            placeholder="请输入内容"
            v-model="multiCreate">
          </el-input>
          <el-button @click="create(2)">创建多个</el-button>
        </div>
      </div>
    </div>
    <Progress :max="progress.max" :value="progress.value" :show="progress.show"></Progress>
  </div>
</template>

<script>
import * as api from '../../api'
import Dialog from '../../components/DialogCM'
import Progress from '../../components/Progress'
import { intro } from './intro'
// import axios from 'axios'
export default {
  data () {
    return {
      singleCreate: '',
      multiCreate: '',
      tempObj: {
        name: '白糖',
        id: '101',
        price: '5377',
        deposit: '4839'
      },
      allForwardList: [],
      progress: {
        value: 1,
        max: 100,
        show: false
      },
      timeId: ''
    }
  },
  components: { Dialog, Progress },
  created () {},
  destroyed () {},
  mounted () {
    this.dealForwardList()
    this.timeId = setInterval(this.runProgress, 1000)
  },
  computed: {},
  watch: {},
  methods: {
    dealForwardList () {
      let num = 100
      let newArr = intro.map(item => {
        num++
        let obj = {}
        obj.name = item.forward
        obj.id = num
        obj.price = item.price
        obj.deposit = item.deposit
        return obj
      })
      this.allForwardList = newArr
      // console.log(newArr)
    },
    parseInput () {
      let singleCreateObj = JSON.parse(this.singleCreate)
      let params = {
        name: singleCreateObj.name,
        id: singleCreateObj.id,
        price: singleCreateObj.price,
        deposit: singleCreateObj.deposit
      }
      return params
    },
    create (type) {
      // 创建单条数据
      if (type === 1) {
        let params = this.tempObj
        api._ForwardCreateFd(params).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      } else {
        // 创建多条数据
        let params = {
          arr: this.allForwardList
        }
        console.log(params)
        debugger
        api._ForwardCreateFdList(params).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    runProgress () {
      console.log(111)
      this.progress.show = true
      this.progress.value += 30
      if (this.progress.value >= this.progress.max) {
        this.progress.value = 100
        clearInterval(this.timeId)
        this.progress.show = false
        // this.progress.show = false
      }
      console.log(this.progress)
    }
  }
}
</script>

<style>
dl{text-align: left;}
</style>
