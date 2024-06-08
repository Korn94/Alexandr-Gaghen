<template>
  <article id="wrap">
    <article id="lightings">
      <section class="light"></section>
      <section class="light"></section>
      <section class="light"></section>
      <section class="light"></section>
      <section class="light"></section>
    </article>
  </article>
</template>

<style scoped>
#wrap {
  width: 100%;
  height: 94%;
  position: absolute;
  margin: 0 auto 0 auto;
  overflow: hidden;
  filter: blur(20px);
}

#lightings {
  bottom: -60px;
  position: absolute;
  width: 100%;
}

.light {
  border-radius: 50%;
  height: 20px;
  width: 100%;
  position: relative;
  margin: auto;
}

/* Определение общих анимаций */
@keyframes lighting {
  from {
    box-shadow: 0 0 250px 20px var(--start-color);
  }
  to {
    box-shadow: 0 0 100px 15px var(--end-color);
  }
}

.light:nth-child(1) {
  --start-color: #00A12A;
  --end-color: #00c3f5;
  animation: lighting 5s ease-in-out infinite alternate;
}

.light:nth-child(2) {
  --start-color: #2058d3;
  --end-color: #00ffd5;
  animation: lighting 4s ease-in-out infinite alternate;
}

.light:nth-child(3) {
  --start-color: #0199ff;
  --end-color: #7ef9ff;
  animation: lighting 3s ease-in-out infinite alternate;
}

.light:nth-child(4) {
  --start-color: #00c3f5;
  --end-color: #00A12A;
  animation: lighting 2s ease-in-out infinite alternate;
}

.light:nth-child(5) {
  --start-color: #ff646c;
  --end-color: #ff180c;
  animation: lighting 1s ease-in-out infinite alternate;
}

@media screen and (max-width: 840px) {
  #wrap {
    height: 88%;
  }
}
</style>
