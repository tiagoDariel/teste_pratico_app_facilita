<template>
  <div>
    <b-form>
       <b-form-input
          id="input-1"
          v-model="form.nome"
          type="text"
          placeholder="Nome"
          required
        ></b-form-input>
        <div class="row mt-2">
          <div class="col">
            <b-input-group append="m" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input v-model="form.altura" placeholder="Altura em metros" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46"></b-form-input>
            </b-input-group>
          </div>
          <div class="col">
            <b-input-group append="cm" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input v-model="form.cma" type="text" placeholder="Centimetros Por Ano" onkeypress="return event.charCode >= 48 && event.charCode <= 57" required>
            </b-form-input>
            </b-input-group>
          </div>
        </div>
      <b-button class="float-right mt-2" @click="save()">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        nome: '',
        altura: '',
        cma: ''
      }
    }
  },
  methods: {
    ...mapActions('medirAltura', ['ActionsAddUser']),
    save () {
      this.ActionsAddUser(this.form)
    }
  }
}
</script>

<style>

</style>
