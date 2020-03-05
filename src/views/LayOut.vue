<template>
  <div class="flex-ul column wrapper">
    <div class="flex-li">
      <div class="li-info">
        <MyHeader></MyHeader>
      </div>
    </div>
    <div class="wrap-container">
      <!-- <div class="flex-li flex-aside">
        <my-aside :isCollapse="isCollapse"></my-aside>
      </div>
      <div class="flex-li flex-content">
        <router-view ref="container"></router-view>
        <BottomFixed></BottomFixed>
      </div> -->
      <div class="wrap-aside">
        <my-aside :isCollapse="isCollapse"></my-aside>
      </div>
      <div class="wrap-router">
        <router-view ref="container"></router-view>
        <BottomFixed></BottomFixed>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './Header'
import MyAside from './Aside'
import BottomFixed from './BottomFixed'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  created () {},
  destroyed () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
  },
  components: { MyHeader, MyAside, BottomFixed }
}
</script>

<style lang="scss" scope>
.wrap-container{display: flex;}
.wrap-router{width:100%;}
/* @import '../assets/css/site.scss'; */
</style>
