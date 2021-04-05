<template>
  <div>
    <Menu />
    <div class="container">
      <b-card class="mt-4">
        <h2>Adicionar Úsuario</h2>
        <Form />
    </b-card>
  <div class="row">
    <div class="col-7">
      <b-card>teste</b-card>
      <b-card>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Altura</th>
      <th scope="col">CMA</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='list in listUser.lista' :key="list">
      <th scope="row">
         <b-button>Inserir</b-button>
      </th>
      <td>{{list.nome}}</td>
      <td>{{list.altura}}m</td>
      <td>{{list.cma}}cm</td>
    </tr>
  </tbody>
</table>
      </b-card>
    </div>
    <div class="col result mr-3">
     <h3>Resultados:
     </h3>
    </div>
</div>
</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Menu from '../../../components/Menu'
import Form from '../components/Form'
export default {
  data () {
    return {
      selected: '',
      anos: []
    }
  },
  components: {
    Menu,
    Form
  },
  mounted () {
    this.actionListUser()
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
  },
  methods: {
    ...mapActions('medirAltura', ['actionListUser']),
    setar (user) {
      console.log(user)
    }
  },
  computed: {
    ...mapGetters('medirAltura', ['listUser'])
  }
}
</script>

<style>
.result {
  border: 1px solid black;
}
</style>
