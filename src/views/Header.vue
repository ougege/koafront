<template>
  <div class="header">
    <div class="flex-ul row logo">
      <div class="flex-li">
        <div class="li-info">ougege项目DEMO</div>
      </div>
    </div>
    <el-dropdown split-button type="primary" class="user" @command="handleCommand">
      {{user.name}}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-switch-button" command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '../store/mutation-type'
export default {
  data () {
    return {
      user: {}
    }
  },
  created () {},
  destroyed () {},
  mounted () {
    this.getUserInfo()
    console.log(this.$store)
  },
  computed: {
    // 从全局导入Getter
    ...mapState({
      userData: state => state.global.userData
    })
  },
  watch: {
    userData (newVal) {
      this.user = newVal
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'logout') {
        localStorage.clear()
        this.$router.push({ path: '/login' })
      }
    },
    getUserInfo () {
      let userDataObj = JSON.parse(localStorage.getItem(types.SYSTEM_USERDATA))
      let token = localStorage.getItem(types.SYSTEM_TOKEN)
      this.$store.dispatch(types.SYSTEM_USERDATA, userDataObj)
      this.$store.dispatch(types.SYSTEM_TOKEN, token)
    }
  }
}
</script>

<style scope lang="scss">
.header{
  height:60px;line-height: 60px;background: #27ae60;color:#fff;position: relative;
  .user {
    position: absolute;right:100px;height:60px;line-height:60px;bottom:0;
    .el-dropdown-link {cursor: pointer;color:#fff;}
    .el-icon-arrow-down {font-size: 12px;}
  }
}
</style>
