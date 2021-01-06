<template>
  <div id="app">
    <Header />
    <Nav />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0px;
}
.footer {
 margin-top: 600px;
}
.nav{
  margin-left: 60px;
  }
</style>
