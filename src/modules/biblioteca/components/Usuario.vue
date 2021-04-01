<template>
  <div class="container">
    <div class="container"><b-icon-person-fill></b-icon-person-fill> referese a professor <b-icon-person></b-icon-person> referese a aluno</div>
       <b-modal id="modal-add-livro" title="Adicionar Livro" hide-footer>
        <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.usuario"
          placeholder="insira o nome"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Profissão:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.profissao"
          :options="profissao"
          required
        ></b-form-select>
      </b-form-group>
        <b-button
          class="m-2 float-right"
          @click="$bvModal.hide('modal-add-livro')"
          >Sair</b-button
        >
        <b-button class="m-2 float-right" variant="primary" @click="addUsuario()"
          >Salvar</b-button
        >
      </b-modal>
       <b-card class="bg-light">
      <b-button
        class="m-1 float-right"
        variant="outline-primary"
        v-b-modal.modal-add-livro
        ><b-icon-person-plus></b-icon-person-plus></b-button
      >
      <h3 class="text-center">Livros</h3>
      <div class="mt-4">
        <div v-for="user in listUsuario" :key="user">
          <div v-if="user.profissao == 'Aluno'" ><b-icon-person></b-icon-person> {{ user.usuario }}</div>
          <div v-if="user.profissao == 'Professor'" ><b-icon-person-fill></b-icon-person-fill> {{ user.usuario }}</div>
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
        usuario: '',
        profissao: ''
      },
      profissao: [
        'Professor',
        'Aluno'
      ]
    }
  },
  mounted () {
    this.ActionListUsuario()
  },
  methods: {
    ...mapActions('biblioteca', ['ActionListUsuario', 'actionAddUsuario']),
    addUsuario () {
      this.actionAddUsuario(this.form)
    }
  },
  computed: {
    ...mapGetters('biblioteca', ['listUsuario'])
  }
}
</script>
