<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部tabber菜单区域 -->
    <tabbar v-if="isShowTabbar()" />
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue';

export default {
  name: 'App',
  components: {
    Tabbar
  },
  methods: {
    // 判断tabbar是否显示
    isShowTabbar() {
      const noTabbar = ['/detail']
      // console.log(this.$route)
      return !noTabbar.includes(this.$route.path)
    }
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  ul,p,h3 {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
</style>
