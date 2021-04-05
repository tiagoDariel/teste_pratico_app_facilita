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
          <b-card>
            <b-form-tag
              v-for="user in usuario"
              @remove="removerTag(user)"
              :key="user"
              :title="user.nome"
              :variant="tagVariant"
              class="mr-1"
            ></b-form-tag>
            <div v-if="usuario[1]">
              <div v-if="usuario[0].altura <= usuario[1].altura && usuario[0].cma <= usuario[1].cma || usuario[1].altura <= usuario[0].altura && usuario[1].cma <= usuario[0].cma">
                <p class="text-danger float-right">error ao verificar a diferemça de tamanhos!</p>
              </div>
              <div v-else>
                <b-button class="float-right" variant="primary" @click="verificar()">Verificar</b-button>
              </div>
            </div>
          </b-card>
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
                <tr v-for="list in listUser.lista" :key="list">
                  <th scope="row">
                    <b-button @click="setar(list)">Inserir</b-button>
                  </th>
                  <td>{{ list.nome }}</td>
                  <td>{{ list.altura }}m</td>
                  <td>{{ list.cma }}cm</td>
                </tr>
              </tbody>
            </table>
          </b-card>
        </div>
        <div class="col result mr-3">
          <h3>Resultado:</h3>
          <div v-if="medir.anos != ''">
            <p>para o {{medir.usuarioMenor}} ultrapassar o tamanho de {{medir.usuarioMaior}} precisa-se de {{medir.anos.length}} anos </p>
            <b> relatório <b-button @click="show = !show">verificar</b-button></b>
            <table v-if="show">
              <thead>
                <tr>
                  <th scope="col">anos/</th>
                  <th scope="col">Altura {{medir.usuarioMenor}}/</th>
                  <th scope="col">Altura {{medir.usuarioMaior}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="ano in medir.anos" :key="ano">
                  <td>{{ ano.anos }}</td>
                  <td>{{ ano.AlturasPessoaUm }}m</td>
                  <td>{{ ano.AlturasPessoaDois }}cm</td>
                </tr>
              </tbody>
            </table>
          </div>
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
      show: false,
      medir: {
        usuarioMenor: '',
        usuarioMaior: '',
        anos: []
      },
      usuario: []
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
      if (this.usuario.length <= 1) this.usuario.push(user)
      else alert('Máximo duas pessoas, caso queira outra compraração excluir as tags existentes!')
    },
    removerTag (user) {
      console.log(user)
      this.usuario.splice(this.usuario.indexOf(user), 1)
    },
    verificar () {
      this.medir.anos = []
      var alturaPessoaUm = ''
      var alturaPessoaDois = ''
      var CentimetrosPorAnoPessoaUm = ''
      var CentimetrosPorAnoPessoaDois = ''
      var conteAno = ''
      if (this.usuario[0].altura <= this.usuario[1].altura && this.usuario[0].cma > this.usuario[1].cma) {
        console.log(1)
        alturaPessoaUm = this.usuario[0].altura
        alturaPessoaDois = this.usuario[1].altura
        CentimetrosPorAnoPessoaUm = this.usuario[0].cma / 100
        CentimetrosPorAnoPessoaDois = this.usuario[1].cma / 100
        conteAno = 0
        this.medir.usuarioMenor = this.usuario[0].nome
        this.medir.usuarioMaior = this.usuario[1].nome
        while (alturaPessoaDois > alturaPessoaUm) {
          alturaPessoaUm = alturaPessoaUm + CentimetrosPorAnoPessoaUm
          alturaPessoaDois = alturaPessoaDois + CentimetrosPorAnoPessoaDois
          conteAno = conteAno + 1
          this.medir.anos.push({ anos: conteAno, AlturasPessoaUm: alturaPessoaUm.toFixed(2), AlturasPessoaDois: alturaPessoaDois.toFixed(2) })
        }
      } else {
        console.log(this.usuario[1].altura)
        alturaPessoaUm = this.usuario[1].altura
        alturaPessoaDois = this.usuario[0].altura
        CentimetrosPorAnoPessoaUm = this.usuario[1].cma / 100
        CentimetrosPorAnoPessoaDois = this.usuario[0].cma / 100
        conteAno = 0
        this.medir.usuarioMenor = this.usuario[1].nome
        this.medir.usuarioMaior = this.usuario[2].nome
        console.log(this.usuario[1].altura)
        console.log(alturaPessoaDois)
        while (alturaPessoaUm < alturaPessoaDois) {
          alturaPessoaUm = alturaPessoaUm + CentimetrosPorAnoPessoaUm
          alturaPessoaDois = alturaPessoaDois + CentimetrosPorAnoPessoaDois
          conteAno = conteAno + 1
          this.medir.anos.push({ anos: conteAno, AlturasPessoaUm: alturaPessoaUm.toFixed(2), AlturasPessoaDois: alturaPessoaDois.toFixed(2) })
        }
      }
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
