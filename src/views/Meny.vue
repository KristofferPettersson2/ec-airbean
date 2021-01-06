<template>
  <div class="meny">
    <div>
      <div>
        <h1>Meny</h1>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <img src="../assets/graphics/add.svg" />
            </div>
            <span>Byggkaffe</span>
          </li>
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
  margin-top: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul div{
      border-radius: 50%;
      background-color: black;
  }
  ul span{
    margin-left: 10px;
  }
  img {
    cursor: pointer;
    width: 20px;
  }
  li {
    display: flex;
    flex-direction: row;
    margin: 30px;
  }
}
</style>
