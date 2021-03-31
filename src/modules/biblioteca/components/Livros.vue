<template>
  <div class="container">
    <b-card class="bg-light">
    <h3 class='text-center'>Adicionar Livro</h3>
    <b-container fluid>
    <b-row class="my-1" v-for="imput in imputs" :key="imput">
      <b-col>
        <b-form-input :id="`type-${imput.type}`" :type="imput.type"></b-form-input>
      </b-col>
    </b-row>
     <b-button class="float-right" variant="outline-primary" @click="addLivro()">Adicionar Livro</b-button>
  </b-container>
  </b-card>
  <b-card class="bg-light">
    <h3 class='text-center'>Livros</h3>
    <div v-for="livro in listLivros" :key="livro">
      <div> <b-icon-book></b-icon-book> {{livro.nome_livro}}</div>
    </div>
  </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      imputs: [
        { indice: 'livro', type: 'text', name: 'nome_livro' }
      ]
    }
  },
  mounted () {
    this.ActionListLivros()
  },
  methods: {
    ...mapActions('biblioteca', ['ActionListLivros'])
  },
  computed: {
    ...mapGetters('biblioteca', ['listLivros'])
  }
}
</script>

<style>

</style>
