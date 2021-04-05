<template>
  <div>
    <p>Locador: {{printers.locador.usuario}}</p>
    <p>Profissão: {{printers.locador.profissao}}</p>
    <p>Livro: {{printers.nome_livro}}</p>
    <p>Dia da locação: {{printers.novaDataLocacao}}</p>
    <p>Dia da devolução: {{printers.novaDataDevolucao}}</p>
  </div>
</template>

<script>
export default {
  props: {
    printers: Object
  }
}
</script>

<style>
</style>
