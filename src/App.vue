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
  components: { navbar: NavBar, foot: Foot }
}
</script>

<style scoped>
    #app {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    #wrapper {
        flex: 1 0 auto;
        width: 70%;
        margin: 150px auto 0 auto;
    }
</style>
