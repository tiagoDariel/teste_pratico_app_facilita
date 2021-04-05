<template>
  <div class="container">
    <div>
      <b-card class="mt-4">
        <div class="row">
          <div class="col-2">
            <b-button @click="show = !show"> Emprestar livro </b-button>
            <b-form-group v-if="show" v-slot="{ ariaDescribedby }">
              <b-form-radio
                v-model="selectProfissao"
                :aria-describedby="ariaDescribedby"
                name="profissao"
                value="Professor"
                >Professor</b-form-radio
              >
              <b-form-radio
                v-model="selectProfissao"
                :aria-describedby="ariaDescribedby"
                name="profissao"
                value="Aluno"
                >Aluno</b-form-radio
              >
            </b-form-group>
          </div>
          <div class="col" v-if="show">
            <b-form-input
              type="text"
              v-model="usuario"
              placeholder="Buscar usuário"
              @keyup="busqueUsuario(usuario)"
            ></b-form-input>

            <b-card v-if="userRetornado != ''" class="buscaProfissao">
              <div v-for="users in userRetornado" :key="users">
                <div
                  v-if="
                    users.profissao == 'Aluno' && selectProfissao == 'Aluno'
                  "
                >
                  <a
                    id="add"
                    v-b-modal.modal-emprestimo
                    @click="emprestarPara(users)"
                    ><b-icon-person></b-icon-person> {{ users.usuario }}</a
                  >
                </div>
                <div
                  v-if="
                    users.profissao == 'Professor' &&
                    selectProfissao == 'Professor'
                  "
                >
                  <a
                    id="add"
                    v-b-modal.modal-emprestimo
                    @click="emprestarPara(users)"
                    ><b-icon-person-fill></b-icon-person-fill>
                    {{ users.usuario }}</a
                  >
                </div>
              </div>
            </b-card>
            <b-card v-if="userRetornado == ''" class="buscaProfissao">
              <div v-for="users in listUsuario" :key="users">
                <div
                  v-if="
                    users.profissao == 'Aluno' && selectProfissao == 'Aluno'
                  "
                >
                  <a
                    id="add"
                    v-b-modal.modal-emprestimo
                    @click="emprestarPara(users)"
                    ><b-icon-person></b-icon-person> {{ users.usuario }}</a
                  >
                </div>
                <div
                  v-if="
                    users.profissao == 'Professor' &&
                    selectProfissao == 'Professor'
                  "
                >
                  <a
                    id="add"
                    v-b-modal.modal-emprestimo
                    @click="emprestarPara(users)"
                    ><b-icon-person-fill></b-icon-person-fill>
                    {{ users.usuario }}</a
                  >
                </div>
              </div>
            </b-card>
          </div>
        </div>
      </b-card>
      <div>
        <b-modal
          id="modal-emprestimo"
          :title="'Livros disponiveis para ' + selectUsuario.usuario"
          hide-footer
        >
          <div class="d-block text-center">
            <b-form-input
              type="text"
              v-model="livro"
              placeholder="Ex. PHP a biblia"
              @keyup="busqueLivro(livro)"
            ></b-form-input>
          </div>
          <b-card>
            <b-form-tag
              v-for="emprestimo in emprestimos"
              @remove="removeTag(emprestimo)"
              :key="emprestimo"
              :title="emprestimo"
              :variant="tagVariant"
              class="mr-1"
            ></b-form-tag>
          </b-card>
          <div v-if="livroRetornado != ''">
            <ul>
              <div v-for="livro in livroRetornado" :key="livro">
                <div v-if="livro.usuario_id == null" class="row">
                  <div class="col">
                    <a id="add" @click="addTag(livro)">
                      {{ livro.nome_livro }}
                    </a>
                  </div>
                  <div class="col">
                    <c class="livro-disponivel">Disponível</c>
                  </div>
                </div>
                <div v-else class="row">
                  <div class="col">{{ livro.nome_livro }}</div>
                  <div class="col">
                    <c class="livro-emprestado">Emprestado</c>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div v-if="livroRetornado == ''">
            <div v-for="livro in listLivros" :key="livro">
              <div v-if="livro.usuario_id == null" class="row">
                <div class="col">
                  <a id="add" @click="addTag(livro)">
                    {{ livro.nome_livro }}
                  </a>
                </div>
                <div class="col">
                  <c class="livro-disponivel">Disponivel</c>
                </div>
              </div>
              <div v-else class="row">
                <div class="col">{{ livro.nome_livro }}</div>
                <div class="col">
                  <c class="livro-emprestado">Emprestado</c>
                </div>
              </div>
            </div>
          </div>
          <b-button
            class="m-2 float-right"
            variant="primary"
            @click="emprestar(selectUsuario.id)"
          >
            Salvar
          </b-button>
        </b-modal>
      </div>
      <b-card>
        <h4>Livros Emprestados</h4>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="row" v-for="livros in listLivros" :key="livros">
          <div class="col border-bottom" v-if="livros.usuario_id != null">
            <b-icon-book></b-icon-book> {{ livros.nome_livro }}
          </div>
          <div class="col border-bottom" v-if="livros.usuario_id != null">
            <b-icon-person-fill
              v-if="livros.locador.profissao == 'Professor'"
            ></b-icon-person-fill>
            <b-icon-person
              v-if="livros.locador.profissao == 'Aluno'"
            ></b-icon-person>
            {{ livros.locador.usuario }}
            <div class="float-right" @click="printer(livros)">
              <b-icon-printer></b-icon-printer>
            </div>
          </div>
        </div>
        {{novaListadeLivros}}
      </b-card>
      <div class="embledPrint print">
        <print :printers="printar" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Print from './Print.vue'
export default {
  components: { Print },
  data () {
    return {
      show: false,
      selectProfissao: 'Professor',
      selectUsuario: '',
      livro: '',
      usuario: '',
      livroRetornado: [],
      userRetornado: [],
      form: {
        livro_id: ''
      },
      livroId: [],
      formEmp: [],
      usuario_id: '',
      emprestimos: [],
      dataVencimento: '',
      dataAtual: '',
      printar: ''
    }
  },
  mounted () {
    this.ActionListUsuario()
    this.ActionListLivros()
  },
  methods: {
    ...mapActions('biblioteca', ['ActionListLivros', 'ActionListUsuario', 'actionSaveEmprestimo', 'ActionEmprestarLivro']),
    busqueLivro (filtro) {
      this.livroRetornado = this.listLivros.filter((el) => el.nome_livro.toLowerCase().indexOf(filtro.toLowerCase()) > -1)
    },
    busqueUsuario (filtro) {
      this.userRetornado = this.listUsuario.filter((el) => el.usuario.toLowerCase().indexOf(filtro.toLowerCase()) > -1)
    },
    addTag (livro) {
      if (this.emprestimos.includes(livro.nome_livro) === true) {
        alert('Já existe este livro na sua lista de emprestimo')
      } else {
        this.emprestimos.push(livro.nome_livro)
        this.livroId.push(livro.id)
        this.formEmp.push({ usuario_id: this.usuario_id, entrega: this.trazerDiaHoje, devolucao: this.dataVencimento })
      }
    },
    removeTag (livro) {
      this.emprestimos.splice(this.emprestimos.indexOf(livro), 1)
      this.formEmp.splice(this.formEmp.indexOf({ livro_id: livro.id }))
    },
    emprestarPara (users) {
      this.formEmp = []
      this.livroId = []
      this.emprestimos = []
      this.selectUsuario = users
      this.usuario_id = users.id
      if (users.profissao === 'Professor') {
        this.dataVencimento = this.adicionarDiasData(10)
      } else {
        this.dataVencimento = this.adicionarDiasData(3)
      }
    },
    adicionarDiasData (dias) {
      var hoje = new Date()
      var novaData = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000))
      return novaData.getFullYear() + '-' + (novaData.getMonth() + 1) + '-' + novaData.getDate()
    },
    retornarDiasDataMostrar (dias) {
      var hoje = new Date()
      var novaData = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000))
      return novaData.getDate() + '/' + (novaData.getMonth() + 1) + '/' + novaData.getFullYear()
    },
    emprestar () {
      for (var i = 0; i <= this.formEmp.length - 1; i++) {
        this.ActionEmprestarLivro({ id: this.livroId[i], form: this.formEmp[i] }).then(() => {
          if (i === this.formEmp.length - 1) return this.ActionListLivros()
        })
      }
    },
    printer (index) {
      this.printar = index
      setTimeout(function () {
        window.print()
      }, 100)
    }
  },
  computed: {
    ...mapGetters('biblioteca', ['listLivros', 'listUsuario']),
    trazerDiaHoje () {
      var hoje = new Date()
      return hoje.getFullYear() + '-' + (hoje.getMonth() + 1) + '-' + hoje.getDate()
    }
  }
}
</script>

<style>
#add {
  cursor: pointer;
}
#add:hover {
  font-size: 18px;
}
.buscaProfissao {
  height: 30vh;
  overflow: auto;
}
.livro-emprestado {
  font-family: fantasy;
  font-size: 13px;
  color: rgb(30, 47, 63);
}
.livro-disponivel {
  font-family: fantasy;
  font-size: 13px;
  color: rgb(59, 189, 33);
}
.print {
  visibility: hidden;
}
@media print {
  .nonePrint {
    visibility: hidden;
  }
  .embledPrint {
    visibility: visible;
    font-size: 20px;
  }
  * {
    margin-top: -20px;
    margin-right: 80px;
    margin-left: 60px;
    margin-bottom: 0;
  }
}
</style>
