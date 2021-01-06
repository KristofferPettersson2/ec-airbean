<template>
  <div class="landing">
    <section class="img-right-left align-items-center">
      <div>
        <img src="@/assets/graphics/intro-graphic-left.svg" alt="" />
      </div>
      <h1 class="text-center text-white">AIR BEAN</h1>
      <div>
        <img src="@/assets/graphics/intro-graphic-right.svg" alt="" />
      </div>
    </section>
 
  </div>
</template>

<script>
export default {
  name: "Landing",
  components: {},
};
</script>
<style lang="scss" scoped>
.landing{background-color: #2F8C91;}
.img-right-left {
  display: flex;
  justify-content: space-between;
}
img {width: 300px;}
header img {width: 1100px;}

</style>
