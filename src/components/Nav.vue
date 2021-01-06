<template>
 <div class="nav">
    <header>
      <div>
        <div @click="navShow" class="nav-icon">
          <img v-if="showNav == false" src="../assets/graphics/navicon.svg" />
          <img v-if="showNav == true" src="@/assets/graphics/close.svg" />
        </div>
      </div>
      <div>
        <router-link to="/cart">
          <div class="cart-icon" @click="showCart">
            <img src="../assets/graphics/bag.svg" />
          </div>
        </router-link>
      </div>
    </header>
    <section v-if="showNav" @click="navShow">
      <ul>
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
  </div>


</template>

<script>
export default {
  name: "Nav",
  components: {},
  props: {},
  data() {
    return {
      showNav: false,
      cartShow: false,
    };
  },
  methods: {
    navShow() {
      this.showNav = !this.showNav;
    },
    showCart() {
      this.cartShow = !this.cartShow;
      this.$store.commit("showCart", this.cartShow);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin-left: 60px;
  margin-right: 60px;
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
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  div {
    padding-top: 20px;
  }
  .nav-icon img {
    background-color: white;
  }
  .cart-icon img {
    background-color: black;
  }
  img {
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    -webkit-box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.43);
    box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.43);
  }
}
section {
  position: absolute;
  top: 150px;
}
</style>
