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
    <el-button @click="showDialog">显示弹窗</el-button>
    <!-- 弹窗--手动标签 -->
    <Dialog ref="CmDialog" :dialogContent="dialogContent1" @left="cancelBtn" @right="confirmBtn">
      <el-form :model="handLabelForm" :rules="rulesHandLabel" ref="rulesHandLabel" class="handLabel">
        <el-form-item prop="labelName">
          <div class="flex-ul row">
            <div class="flex-li">
              <div class="star">标签名称:</div>
              <div class="li-info">
                <el-input v-model="handLabelForm.name" placeholder="请输入标签名称"></el-input>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="flex-ul row">
            <div class="flex-li">
              <div class="li-info add-option">
                +增加组合项
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </Dialog>
    <!-- 弹窗--标签功能 -->
    <Dialog ref="CmDialog2" :dialogContent="dialogContent2" @left="cancelBtn" @right="confirmBtn">
    </Dialog>
    <!-- 弹窗--自动标签 -->
    <Dialog ref="CmDialog3" :dialogContent="dialogContent3" @left="cancelBtn" @right="confirmBtn">
      <el-form :model="autoLabelForm" :rules="rulesAutoLabel" ref="rulesAutoLabel" class="autoLabel">
        <el-form-item prop="labelName">
          <div class="flex-ul row">
            <div class="star">● 将为满足限制条件的用户，自动添加上标签</div>
          </div>
        </el-form-item>
        <el-form-item prop="labelName">
          <div class="flex-ul row">
            <div class="flex-li">
              <div class="star">*自动标签:</div>
              <div class="li-info">
                <el-input v-model="autoLabelForm.name" placeholder="请输入自动标签"></el-input>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item prop="labelName">
          <div class="flex-ul row">
            <div class="flex-li">
              <div class="star">*自动标签:</div>
              <div class="li-info">
                <el-checkbox-group v-model="autoLabelForm.checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="(item, index) in autoLabelForm.items" :label="item" :key="item">
                    <span class="span-checkbox">{{item}}</span>
                    <el-input class="span-input" v-model="autoLabelForm[label+index]"></el-input> 元
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </Dialog>
    <!-- 弹窗--标签设置 -->
    <Dialog ref="CmDialog4" :dialogContent="dialogContent4" @left="cancelBtn" @right="confirmBtn">
      <el-form :model="setLabelForm" :rules="rulesSetLabel" ref="rulesSetLabel" class="setLabel">
        <el-form-item prop="labelName">
          <div class="flex-ul row">
            <div class="flex-li">
              <div class="star">标签名称:</div>
              <div class="li-info">
                <el-input v-model="handLabelForm.name" placeholder="请输入标签名称"></el-input>
              </div>
              <div class="li-info add-option">
                +新标签
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item prop="" class="label-line-group">
          <div class="flex-ul row">
            <div class="flex-li lf-show">
              <div class="star"></div>
              <div class="li-info">
                <el-tag
                  :key="tag"
                  v-for="tag in setLabelForm.dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="tagClose(tag)">
                  {{tag}}
                </el-tag>
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </Dialog>
  </div>
</template>

<script>
import * as api from '../../api'
import Dialog from '../../components/DialogCM'
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
      dialogFormVisible: false,
      // 手动标签
      dialogContent1: {
        title: '手动标签',
        dialogType: 'form',
        leftBtnName: '取消',
        rightBtnName: '保存',
        tipName: '关闭',
        content: ''
      },
      handLabelForm: {
        name: ''
      },
      rulesHandLabel: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
        ]
      },
      // 自动标签
      dialogContent3: {
        title: '自动标签',
        dialogType: 'form',
        leftBtnName: '取消',
        rightBtnName: '保存',
        tipName: '关闭',
        content: ''
      },
      autoLabelForm: {
        name: '',
        checkedCities: ['上海', '北京'],
        items: ['累计消费金额满', '最近消费时间', '累计消费次数', '平均消费满']
      },
      rulesAutoLabel: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
        ]
      },
      // 标签功能
      dialogContent2: {
        title: '标签功能',
        dialogType: 'form',
        leftBtnName: '取消',
        rightBtnName: '确定',
        tipName: '关闭',
        content: '消费满300元\n 消费满50元 \n '
      },
      // 标签设置
      dialogContent4: {
        title: '标签设置',
        dialogType: 'form',
        leftBtnName: '取消',
        rightBtnName: '保存',
        tipName: '关闭',
        content: ''
      },
      setLabelForm: {
        name: '',
        dynamicTags: ['标签一', '标签二', '标签三']
      },
      rulesSetLabel: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: { Dialog },
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
      }
    },
    // 显示弹窗
    showDialog () {
      console.log(this.$refs.CmDialog4)
      this.$refs.CmDialog4.dialogFormVisible = true
    },
    cancelBtn (e) {
      this.$refs.CmDialog4.dialogFormVisible = false
    },
    confirmBtn (e) {
      console.log(e)
      this.$refs.CmDialog4.dialogFormVisible = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      console.log(checkedCount)
      // this.checkAll = checkedCount === this.autoLabelForm.items.length
      // this.isIndeterminate = checkedCount > 0 && checkedCount < this.autoLabelForm.items.length
    },
    // 标签删除
    tagClose (tag) {
      this.setLabelForm.dynamicTags.splice(this.setLabelForm.dynamicTags.indexOf(tag), 1)
    }
  }
}
</script>

<style>

</style>
