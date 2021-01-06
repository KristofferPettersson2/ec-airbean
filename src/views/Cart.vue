<template>
  <div class="cart" v-if="$store.state.cartShow">
    <header>
      <h1>Din Beställning</h1>
      <section>
        <ul>
          <li>list</li>
          <li>list</li>
          <li>list</li>
        </ul>
        <h2>Total</h2>
        <button class="btn-dark btn">Take my money!</button>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang="scss" scoped>
.cart {
  border: 2px solid red;
  background-color: grey;
  width: 500px;
  height: 500px;
  position: absolute;
  right: 100px;
  top: 150px;
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    margin-top: 50px;
  }
  h2 {
    margin-top: 50px;
  }
  button {
    margin-top: 50px;
  }
}
</style>
