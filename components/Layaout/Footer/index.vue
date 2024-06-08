<template>
  <footer>
    <p class="container">2024</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
margin-top: 4em;

  .container {
    color: #00c3f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    
    border-top: 1px solid;
    border-image: linear-gradient(to right, #00c3f505, #00c3f550, #00c3f505);
    border-image-slice: 1;
  }
}

@media screen and (max-width: 850px) {
  footer {
    padding-bottom: 50px;
  }
}
</style>