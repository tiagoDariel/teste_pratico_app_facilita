<template>
  <div class="container">
    <div>
      <b-modal id="modal-add-livro" title="Adicionar Livro" hide-footer>
        <div class="d-block text-center">
          <b-form-input
            type="text"
            v-model="form.nome_livro"
            placeholder="Ex. PHP a biblia"
          ></b-form-input>
        </div>
        <b-button
          class="m-2 float-right"
          @click="$bvModal.hide('modal-add-livro')"
          >Sair</b-button
        >
        <b-button class="m-2 float-right" variant="primary" @click="addLivro()"
          >Salvar</b-button
        >
      </b-modal>
    </div>
    <b-card class="bg-light">
      <b-button
        class="m-1 float-right"
        variant="outline-primary"
        v-b-modal.modal-add-livro
        ><b-icon-folder-plus></b-icon-folder-plus></b-button
      >
      <h3 class="text-center">Livros</h3>
      <div class="mt-4">
        <div v-for="livro in listLivros" :key="livro">
          <div><b-icon-book></b-icon-book> {{ livro.nome_livro }}</div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: {
        nome_livro: ''
      }
    }
  },
  mounted () {
    this.ActionListLivros()
    this.mudarData('2017-04-03')
  },
  methods: {
    ...mapActions('biblioteca', ['ActionListLivros', 'actionAddLivro']),
    async addLivro () {
      await this.actionAddLivro(this.form).then(() => {
        return this.$bvModal.hide('modal-add-livro')
      })
    }
  },
  computed: {
    ...mapGetters('biblioteca', ['listLivros']),
    mudarData (data) {
      var array = data.split('-')
      console.log(array)
      return array
    }
  }
}
</script>

<style>
</style>
