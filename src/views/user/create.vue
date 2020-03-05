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
  </div>
</template>

<script>
import * as api from '../../api'
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
      }
    }
  },
  created () {},
  destroyed () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    parseInput () {
      let singleCreateObj = JSON.parse(this.singleCreate)
      let params = {
        name: singleCreateObj.name,
        password: singleCreateObj.password
      }
      return params
    },
    create (type) {
      // 创建单条数据
      if (type === 1) {
        let params = this.parseInput()
        api._UserCreateUser(params).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      } else {
        // 创建多条数据
      }
    }
  }
}
</script>

<style>

</style>
