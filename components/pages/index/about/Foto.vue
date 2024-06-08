<template>
  <div class="circle">
    <img src="/foto.png" alt="" />
  </div>
  <!-- <div class="block"></div> -->
</template>

<style lang="scss" scoped>
  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    // background: radial-gradient(circle at center bottom, #00c3f5, #00c3f500 80%); /* Градиентный фон снизу вверх */
    background: radial-gradient(circle at center bottom, #00c3f500 25%, #00c3f5);
    
    img {
      width: 100%;
    }
    
  }

  .block {
    position: absolute;
    left: 0;
    width: 200px;
    height: 100px;
    border-radius: 15px;
    border: 1px solid #00c3f5;
    background: radial-gradient(circle at center bottom, #00c3f5, #00c3f500); /* Градиентный фон снизу вверх */
  }
</style>