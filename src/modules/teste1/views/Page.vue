<template>
  <div>
    <div v-for="ano in anos" :key="ano">
      {{ano.anos}}° ano
    </div>
    <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pessoas: [
        { name: 'juca', height: 1.10, CPA: 3 },
        { name: 'chico', height: 1.50, CPA: 2 }
      ],
      anos: []
    }
  },
  mounted () {
    var alturaPessoaUm = this.pessoas[0].height
    var alturaPessoaDois = this.pessoas[1].height
    var CentimetrosPorAnoPessoaUm = this.pessoas[0].CPA / 100
    var CentimetrosPorAnoPessoaDois = this.pessoas[1].CPA / 100
    var conteAno = 0
    while (alturaPessoaDois > alturaPessoaUm) {
      alturaPessoaUm = alturaPessoaUm + CentimetrosPorAnoPessoaUm
      alturaPessoaDois = alturaPessoaDois + CentimetrosPorAnoPessoaDois
      conteAno = conteAno + 1
      this.anos.push({ anos: conteAno, AlturasPessoaUm: alturaPessoaUm.toFixed(2), AlturasPessoaDois: alturaPessoaDois.toFixed(2) })
    }
  }
}
</script>

<style>

</style>
