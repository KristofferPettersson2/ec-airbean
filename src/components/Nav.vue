<template>
  <div class="nav">
    <div class="nav-icon d-flex justify-content-center" @click="navShow">
      <header>
        <div>
          <img v-if="showNav == false" src="../assets/graphics/navicon.svg" />
          <img v-if="showNav == true" src="@/assets/graphics/close.svg" width="20px" />
        </div>
        <div>
          <img src="@/assets/graphics/bag.svg" alt="" />
        </div>
      </header>
    </div>
    <section v-if="showNav" @click="closeMeny">
      <ul class="d-flex flex-column justify-content-center align-items-center">
        <router-link to="/meny">
          <li>Meny</li>
        </router-link>
        <router-link to="/about">
          <li>vårt kaffe</li>
        </router-link>
        <router-link to="/profile">
          <li>Min Profile</li>
        </router-link>
        <router-link to="/status">
          <li>Orderstatus</li>
        </router-link>
      </ul>
    </section>
    <router-view />
    <Icons  />
  </div>
</template>

<script>
import Icons from "@/components/Icons";
export default {
  name: "Nav",
  components: {
    Icons,
  },
  props: {
    
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    navShow() {
      this.showNav = !this.showNav;
    },
    closeMeny() {
      this.showNav = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-icon {
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 30px;
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  -webkit-box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.43);
  box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.43);
}
ul {
  list-style: none;
  width: 200px;
  height: 300px;
  background-color: black;
  li {
    color: white;
    padding: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
section {
  position: absolute;
  top: 40px;
  left: 100px;
}
img {
  position: absolute;
  left: 15px;
  top: 15px;
}
</style>
