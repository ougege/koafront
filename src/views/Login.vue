<template>
  <el-container class="login">
    <!-- logo -->
    <el-header class="logo">
      <el-image :src="logo.url">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </el-header>
    <!-- 表单 -->
    <el-main class="form">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="密码登录" name="first">
          <el-form :model="ruleFormPW" :rules="rulesPW" ref="ruleFormPW" label-width="100px" class="pwlogin">
            <el-form-item prop="name">
              <div class="flex-ul row">
                <div class="flex-li">
                  <div class="star link-red">*</div>
                  <div class="li-info">
                    <el-input v-model="ruleFormPW.name" placeholder="请输入用户名称"></el-input>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item prop="password">
              <div class="flex-ul row">
                <div class="flex-li">
                  <div class="star link-red">*</div>
                  <div class="li-info">
                    <el-input :type="inputPwType" v-model="ruleFormPW.password" placeholder="请输入用户密码">
                      <i v-if="inputPwType === 'text'" slot="suffix" class="el-input__icon el-icon-view" @click.stop='changePwIcon'></i>
                      <i v-if="inputPwType === 'password'" slot="suffix" class="el-input__icon el-icon-thumb" @click.stop='changePwIcon'></i>
                    </el-input>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item class="submit" prop="submit">
              <el-button  type="primary" @click="submitForm('ruleFormPW')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="验证码登录" name="second">
          <el-form :model="ruleFormCode" :rules="rulesCode" ref="ruleFormCode" label-width="100px" class="codelogin">
            <el-form-item prop="phone">
              <div class="flex-ul row">
                <div class="flex-li">
                  <div class="star link-red">*</div>
                  <div class="li-info">
                    <el-input v-model="ruleFormCode.phone" placeholder="请输入手机号码"></el-input>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item prop="verifyCode">
              <div class="flex-ul row">
                <div class="flex-li">
                  <div class="star link-red">*</div>
                  <div class="li-info">
                    <el-input :type="inputPwType" v-model="ruleFormCode.verifyCode" placeholder="请输入短信验证码">
                      <el-button v-if="!ruleFormCode.isInCountDown" class="btn-code" type="primary" slot="suffix" @click.stop='getVerifyCode'>获取验证码</el-button>
                      <el-button v-if="ruleFormCode.isInCountDown" class="btn-code" type="info" disabled plain slot="suffix" >{{ruleFormCode.countSecond}}</el-button>
                    </el-input>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item class="submit" prop="submit">
              <el-button  type="primary" @click="submitForm('ruleFormCode')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <!-- 版权 -->
    <el-footer class="copyright">
      <BottomFixed></BottomFixed>
    </el-footer>
  </el-container>
</template>

<script>
import * as api from '../api'
import BottomFixed from './BottomFixed'
import {util} from '../utils/util'
export default {
  components: { BottomFixed },
  data () {
    return {
      loading: false,
      activeName: 'second',
      logo: {
        url: '/static/img/logo.png'
        // fit: ['fill', 'contain', 'cover', 'none', 'scale-down']
      },
      ruleFormPW: {
        name: '',
        password: ''
      },
      ruleFormCode: {
        name: '',
        password: '',
        isInCountDown: false,
        countSecond: 60
      },
      setTimeoutCountDownId: '',
      inputPwType: 'text',
      rulesPW: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      rulesCode: {
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度固定11个数字', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
          { min: 4, max: 6, message: '长度在 4 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {},
  destroyed () {},
  mounted () {
    console.log(this.$store)
  },
  computed: {},
  watch: {},
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    changePwIcon () {
      this.inputPwType = this.inputPwType === 'text' ? 'password' : 'text'
    },
    getVerifyCode () {
      console.log(util)
      let cloneRuleFormCode = util.cpObject(this.ruleFormCode)
      cloneRuleFormCode.isInCountDown = true
      this.ruleFormCode = cloneRuleFormCode
      this.fnCountDown()
    },
    fnCountDown () {
      let that = this
      let cloneRuleFormCode = util.cpObject(this.ruleFormCode)
      if (cloneRuleFormCode.countSecond > 0) {
        that.setTimeoutCountDownId = setTimeout(() => {
          cloneRuleFormCode.countSecond--
          that.ruleFormCode = cloneRuleFormCode
          that.fnCountDown()
        }, 1000)
      } else {
        clearTimeout(that.setTimeoutCountDownId)
        cloneRuleFormCode.isInCountDown = false
        cloneRuleFormCode.countSecond = 60
        that.ruleFormCode = cloneRuleFormCode
      }
    },
    submitForm (type) {
      let that = this
      // 密码登录
      if (type === 'ruleFormPW') {
        let params = this.ruleFormPW
        api._UserLogin(params).then(res => {
          console.log(res)
          let data = res.data.data
          let user = {
            name: data.name,
            password: data.password
          }
          // console.log(that.$store.state)
          that.$store.state.global.userData = user
          that.$router.push({ path: '/LayOut' })
          // this.$router.push({ path: this.redirect, query: this.otherQuery })
        }).catch(err => {
          console.log(err)
        })
      } else {
        // 验证码登录
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;width: 100vw;background: url('/static/img/bk_login.jpg');
  .logo {
    width: 200px;margin: 0 auto;margin-top: 100px;margin-bottom: 40px;
    .el-image {
      height:inherit;width: auto;
    }
  }
  .form {
    width: 400px;max-height: 400px;margin: 0 auto;background: #fff;
    /* tab样式 */
    /deep/ .el-tabs__nav{
      display: flex;width:100%;
      .el-tabs__item {flex-grow: 1;padding:0;font-size:20px;color:#9b9ea0;margin-bottom:15px;}
      .el-tabs__item.is-active{color:#409EFF;}
    }
    /*密码表单，验证码表单 */
    .pwlogin,.codelogin {
      margin-top:25px;
      /deep/ .el-form-item {margin-bottom:40px;}
      /deep/ .el-form-item__content {margin-left:0 !important;}
      /deep/ .el-form-item__error {margin-left:20px;}
      .star {width:20px;}
      .submit button {width:100%;margin-left:20px;}
    }
    .codelogin .btn-code{padding: 7px 10px;}
  }
  .copyright {
    margin-top: 100px;
  }
}
</style>
