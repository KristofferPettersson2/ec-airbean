<template>
  <div id="app">
    <div id="nav">
     <Landing/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Landing from '@/views/Landing'
export default {
  name: "App",
  components:{
    Landing
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
