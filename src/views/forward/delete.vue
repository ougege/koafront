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
    <!-- 上传 -->
    <el-upload
      class="avatar-uploader"
      action="/api/upload"
      :show-file-list="false"
      :on-preview="handlePreview"
      :on-success="handleAvatarSuccess">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import * as api from '../../api'
// import axios from 'axios'
export default {
  data () {
    return {
      loading: false,
      forwardId: '',
      imageUrl: ''
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
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    handlePreview (file) {
      console.log(file)
      this.imageUrl = file.url
    }
    // beforeAvatarUpload (file) {
    //   const isJPG = file.type === 'image/jpeg'
    //   const isLt2M = file.size / 1024 / 1024 < 1

    //   if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!')
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('上传头像图片大小不能超过 2MB!')
    //   }
    //   return isJPG && isLt2M
    // }
  }
}
</script>

<style>
avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
