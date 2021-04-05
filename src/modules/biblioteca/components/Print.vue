<template>
  <div>
    <p>Locador: {{printers.locador.usuario}}</p>
    <p>Profissão: {{printers.locador.profissao}}</p>
    <p>Livro: {{printers.nome_livro}}</p>
    <p>Dia da locação: {{locacao}}</p>
    <p>Dia da devolução: {{devolucao}}</p>
  </div>
</template>

<script>
export default {
  props: {
    printers: Object
  },
  data () {
    return {
      locacao: '',
      devolucao: ''
    }
  },
  mounted () {
    var array = this.printers.entrega.split('-')
    this.locacao = array[2] + '/' + array[1] + '/' + array[0]

    var arrayD = this.printers.devolucao.split('-')
    this.devolucao = arrayD[2] + '/' + arrayD[1] + '/' + arrayD[0]
  }
}
</script>

<style>
</style>
