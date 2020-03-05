<template>
  <div class="footer">
    <span class="inline">{{footerInfo.version}}</span>
    <span class="inline" >{{footerInfo.webHost}}</span>
    <span class="inline pointer" @click="jumpto(footerInfo.webCodeF)">- {{footerInfo.webCodeF}}</span>
  </div>
</template>

<script>
import {appConfig} from '../common/appConfig'
export default {
  data () {
    return {
      footerInfo: {}
    }
  },
  created () {},
  destroyed () {},
  mounted () {
    this.footerInfo = appConfig.footerInfo
  },
  computed: {},
  watch: {},
  methods: {
    jumpto (url) {
      // window.location.href = url
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
