<template>
  <div id="app">
    <div class="conteudo">
      <router-view/>
    </div>
      <div class="footer bg-dark">
        <div class="mt-4">
          <div>© Tiago Dariel</div>
            <b-icon-github></b-icon-github> <a href="https://github.com/tiagoDariel">github</a>
            <b-icon-linkedin class="ml-2"></b-icon-linkedin> <a href="https://www.linkedin.com/in/tiago-dariel-a7904a144/">linkedin</a>
            <b-icon-facebook class="ml-2"></b-icon-facebook> <a href="https://www.facebook.com/tiagodariel/">facebook</a>
        </div>
      </div>
  </div>
</template>
<style>
  .footer {
   position: fixed;
   left: 0;
   margin-bottom: 0;
   bottom: 0;
   height: 12vh;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
  }
  .conteudo {
    position: relative;
    margin-bottom: 15vh;
  }
</style>
