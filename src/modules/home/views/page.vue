<template>
  <div class="menu-home container">
    <div class="row">
      <div class="col-5 image img1 m-3" onclick="window.location='/medir-altura'" align='center'><div class="title mt-4"><h1 class="m-4">Medir Altura</h1></div></div>
      <div class="col-5 image img2 m-3" onclick="window.location='/matriz'" align='center'><div class="title mt-4"><h1 class="m-4">Matriz</h1></div></div>
      <div class="col-5 image img3 m-3" onclick="window.location='/fibonacci'" align='center'><div class="title mt-4"><h1 class="m-4">Fibonacci</h1></div></div>
      <div class="col-5 image img4 m-3" onclick="window.location='/biblioteca'" align='center'><div class="title mt-4"><h1 class="m-4">Biblioteca</h1></div></div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  .menu-home {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    height: 500px;
    width: 600px;
  }
  .img1 {
    background-image: url('../../../imagens/altura.jpg');
    background-position: center;
    background-origin: inherit;
    background-size: 250px;
    border: 3px double;
  }
  .img2 {
    background-image: url('../../../imagens/matriz.jpg');
    background-position: center;
    background-origin: inherit;
    background-size: 250px;
    border: 3px double;
  }
  .img3 {
    background-image: url('../../../imagens/fibonacci.jpg');
    background-position: center;
    background-size: 310px;
    border: 3px double;
  }
  .img4 {
    background-image: url('../../../imagens/biblioteca.jpg');
    background-position: center;
    background-size: 250px;
    border: 3px double;
  }
  .image {
    height: 250px;
    width: 900px;
    background-repeat: no-repeat;
    cursor: pointer;
    border-radius: 50px;
  }
  .title {
    color: white;
    width: 100%;
    height: 80%;
    display: none ;
  }
  .image:hover {
    background: rgb(0, 0, 0, .8);
  }
  .image:hover .title{
    display: initial;
  }
  h1 {
    position: relative;
    top:60px;
    bottom: auto;
  }
</style>
