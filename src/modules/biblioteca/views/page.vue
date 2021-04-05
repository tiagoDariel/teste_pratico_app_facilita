<template>
  <div class="nonePrint">
    <div>
      <Menu />
      <b-nav class="mt-4" tabs align="center">
        <b-nav-item @click="link('emprestimo')" :active='emprestimo'>Emprestimo</b-nav-item>
        <b-nav-item @click="link('biblioteca')" :active='biblioteca'>Biblioteca</b-nav-item>
        <b-nav-item @click="link('usuario')" :active='usuario'>Usuário</b-nav-item>
      </b-nav>
    </div>
    <div v-if="emprestimo">
      <emprestimo />
    </div>
    <div v-else-if="biblioteca">
      <livros />
    </div>
    <div v-else-if="usuario">
      <usuario />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Emprestimo from '../components/Emprestimo.vue'
import Livros from '../components/Livros.vue'
import Usuario from '../components/Usuario.vue'
export default {
  components: { Livros, Usuario, Emprestimo, Menu },
  data () {
    return {
      emprestimo: true,
      biblioteca: false,
      usuario: false
    }
  },
  methods: {
    link (item) {
      if (item === 'emprestimo') {
        this.emprestimo = true
        this.biblioteca = false
        this.usuario = false
      } else if (item === 'biblioteca') {
        this.emprestimo = false
        this.biblioteca = true
        this.usuario = false
      } else if (item === 'usuario') {
        this.emprestimo = false
        this.biblioteca = false
        this.usuario = true
      }
    }
  }
}
</script>
<style>

</style>
