<template>
  <div class="container">
    <b-card class="mt-4">
      <b-button v-b-modal.modal-emprestimo>
        Emprestar livro
        </b-button>
    </b-card>
     <div>
      <b-modal id="modal-emprestimo" title="Adicionar Livro" hide-footer>
        <div class="d-block text-center">
          {{livroRetornado}}
          <b-form-input
            type="text"
            v-model="livro"
            placeholder="Ex. PHP a biblia"
            @keyup="busqueLivro(livro)"
          ></b-form-input>
        </div>
        <b-button
          class="m-2 float-right"
          @click="$bvModal.hide('modal-add-livro')"
          >Sair</b-button
        >
        <b-button class="m-2 float-right" variant="primary" @click="emprestar()"
          >Salvar</b-button
        >
      </b-modal>
    </div>
    <b-card>
      <h4>Livros Emprestados</h4>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      livro: '',
      livroRetornado: [],
      form: {
        livro_id: ''
      }
    }
  },
  mounted () {
    this.ActionListUsuario()
    this.ActionListLivros()
  },
  methods: {
    ...mapActions('biblioteca', ['ActionListLivros', 'ActionListUsuario']),
    busqueLivro (filtro) {
      this.livroRetornado = this.listLivros.filter((el) => el.nome_livro.toLowerCase().indexOf(filtro.toLowerCase()) > -1)
    }
  },
  computed: {
    ...mapGetters('biblioteca', ['listLivros', 'listUsuario'])
  }
}
</script>

<style>

</style>
