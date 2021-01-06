<template>
  <div class="meny">
    <div>
      <div>
        <h1>Meny</h1>
      </div>
      <div>
        <ul>
          <li>Byggkaffe</li>
          <li>Byggkaffe</li>
          <li>Byggkaffe</li>
          <li>Byggkaffe</li>
          <li>Byggkaffe</li>
          <li>Byggkaffe</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meny",
};
</script>

<style lang="scss" scoped>
.meny {
  width: 100%;
  text-align: center;
   div {
      width: 100%;
  }
  li {
    list-style-type: none;
    margin: 30px;
  }
}
</style>
