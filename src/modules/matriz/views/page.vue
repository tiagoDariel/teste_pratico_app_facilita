<template>
  <div>
    <Menu />
    <b-card class="container card  mt-3">
      <input type="text" v-model="form.x" class="form-control" placeholder="valor para linha">
      <input type="text" class="mt-4 form-control" v-model="form.y" placeholder="valor para coluna">
      <button class="btn btn-success mt-2" @click="listMatriz()">mostrar Matriz</button>
    </b-card>
    <b-card class="container card text-primary text" v-if="matriz != '' ">
      colunas
      <div v-for="mat in matriz" :key="mat">
       linha {{mat}}
      </div>
    </b-card>
  </div>
</template>

<script>
import Menu from '../../../components/Menu'
export default {
  components: { Menu },
  data () {
    return {
      form: {
        x: '',
        y: ''
      },
      matriz: []
    }
  },
  mounted () {
    /* this.matriz = new Array(this.form.y)
    for (let y = 0; y < this.form.y; y++) {
      this.matriz[y] = new Array(this.form.x)
    }
    for (let i = 0; i < this.form.x; i++) {
      for (let y = 0; y < this.form.y; y++) {
        this.matriz[y][i] = i
      }
    } */
  },
  methods: {
    listMatriz () {
      this.matriz = new Array(this.form.y)
      for (let y = 0; y < this.form.y; y++) {
        this.matriz[y] = new Array(this.form.x)
      }
      for (let i = 0; i < this.form.x; i++) {
        for (let y = 0; y < this.form.y; y++) {
          this.matriz[y][i] = i
        }
      }
    }
  }
}
</script>

<style>
.card {
  width: 500px;
}
.text {
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px;
}
</style>
