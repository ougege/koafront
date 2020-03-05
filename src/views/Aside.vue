<template>
  <div class="aside">
      <el-row class="tac">
        <el-col :span="24">
            <!-- <h5>默认颜色</h5> -->
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                <span>合约</span>
                </template>
                <!-- <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group> -->
                <el-menu-item-group title="">
                    <el-menu-item index="/forward/create">合约列表</el-menu-item>
                    <el-menu-item index="/forward/detail">合约详情</el-menu-item>
                    <el-menu-item index="/forward/delete">删除合约</el-menu-item>
                </el-menu-item-group>
                <!-- <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu> -->
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                <span>用户</span>
                </template>
                <el-menu-item-group title="">
                    <el-menu-item index="/user/create">用户列表</el-menu-item>
                    <el-menu-item index="/user/detail">用户详情</el-menu-item>
                    <el-menu-item index="/user/delete">删除用户</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {},
  destroyed () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scope lang="scss">
.aside /deep/ .el-submenu{width:200px;}
</style>
