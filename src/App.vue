<template>
  <div id="app">
    <navbar/>
    <div id="wrapper">
        <router-view></router-view>
    </div>
    <foot/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Foot from "./components/Foot.vue";

export default {
  name: "app",
  components: { navbar: NavBar, foot: Foot },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
    #app {
        height: 100%;
    }
    #wrapper {
        height: 100%;
        width: 70%;
        margin: 150px auto -270px auto;
    }
</style>
