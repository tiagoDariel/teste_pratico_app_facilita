<template>
  <div>
    <Menu />
    <div class="container">
      <h1 class="text-center mt-4">Fibonacci</h1>
      <b-card class="mt-4">
        <b-form>
          <b-form-group id="input-group-2" label="Números" label-for="input-2">
            <!--recebendo só numeros e virgulas -->
            <b-form-input
              id="input-2"
              onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 44"
              data-accept-comma="1"
              v-model="form.numeros"
              placeholder="Insira números separados por vírgula"
              required
            ></b-form-input>
          </b-form-group>
        </b-form>
        <b-button class="float-right" @click="save()">salvar</b-button>
      </b-card>
      <!--destacando ultimo registro -->
      <div class="bg-dark" v-if="novoNumero != ''" align="center">
      <div class="card text-dark bg-light m-3" style="max-width: 34rem;">
        <div class="card-header"><h4>Último registro</h4></div>
          <div class="card-body">
            <div class="bg-light text-primary"><b class=" ml-4">Valores passados :</b> <br />
              <c class="m-4">{{ novoNumero[novoNumero.length - 1].numeros }}</c>
            </div>
            <div class="bg-light text-success"><b class=" ml-4">Valores Válidos fibonacci :</b> <br />
                <c class="m-4">{{ novoNumero[novoNumero.length - 1].numeros_fibonacci }}</c>
            </div>
          </div>
        </div>
      </div>
      <hr> <!--separador -->

      <div class="row mb-4" align="center" v-if="novoNumero != ''">
        <div  class="col-6" v-for="valores in novoNumero" :key="valores">
          <div
            class="card mt-3"
            header="Card Header"
            header-text-variant="white"
            header-tag="header"
          >
            <div class="card-header">
              <b-link class="mt-0 float-right text-dark position-relative" @click="closed(valores.id)">X</b-link>
            </div>
            <div class="card-bod">
                  <div class="bg-light text-primary"><b class=" ml-4">Valores passados :</b> <br />
                  <c class="m-4">{{ valores.numeros }}</c>
                  </div>
                  <div class="bg-light text-success"><b class=" ml-4">Valores Válidos fibonacci :</b> <br />
                  <c class="m-4">{{ valores.numeros_fibonacci }}</c>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Menu from '../../../components/Menu'
export default {
  components: {
    Menu
  },
  data () {
    return {
      acceptedNumber: [],
      form: {
        numeros: '',
        numeros_fibonacci: ''
      }
    }
  },
  mounted () {
    this.actionListNumero()
    /* transformando fragmento digitado em array com a exposão de divisão na virgula
    var newArray = this.campo.split(',')
    // transformando fragmentos em inteiro
    var transform = newArray.map(transformInteger => {
      return parseInt(transformInteger)
    })

    // ordenando array para forma crescente
    var ordeny = transform.sort((n1, n2) => {
      return n1 - n2
    })
    for (var i = 0; i < ordeny.length; - 1 i++) {
      this.fn = 0 // \
      this.f2 = 1 /// |>  valores reiniciados
      this.f1 = 0 // /
      while (this.f1 <= ordeny[ordeny.length - 1]) {
        // se valor da ordem for igual ao valor do resultado insira o valor verdadeiro do fibonacci
        if (ordeny[i] === this.fn) {
          this.acceptedNumber.push(ordeny[i])
        }
        this.fn = this.f1 + this.f2 // F¹ + F² = Fn
        this.f2 = this.f1 // F² = F¹
        this.f1 = this.fn // F¹ = Fn
      }
    }
    // removendo numero repetido
    this.acceptedNumber = this.acceptedNumber.filter((remove, removerNum) => {
      return this.acceptedNumber.indexOf(remove) === removerNum
    })
    */
  },
  methods: {
    ...mapActions('fibonacci', [
      'actionSaveNumero',
      'actionListNumero',
      'actionsDeleteNumero'
    ]),
    async save () {
      var newArray = this.form.numeros.split(',')
      var transform = newArray.map((transformar) => {
        return parseInt(transformar)
      })
      var ordeny = transform.sort((a, b) => {
        return a - b
      })
      for (var i = 0; i < ordeny.length; i++) {
        var f1 = 0
        var f2 = 1
        var fn = 0
        while (f1 <= ordeny[ordeny.length - 1]) {
          fn = f1 + f2 // F¹ + F² = Fn
          f2 = f1 // F² = F¹
          f1 = fn // F¹ = Fn
          if (ordeny[i] === fn) {
            this.acceptedNumber.push(ordeny[i])
          }
        }
        this.acceptedNumber = this.acceptedNumber.filter(
          (remove, removerNum) => {
            return this.acceptedNumber.indexOf(remove) === removerNum
          }
        )
        this.form.numeros_fibonacci = this.acceptedNumber.toString()
      }
      await this.actionSaveNumero(this.form)
    },
    closed (id) {
      console.log(id)
      this.actionsDeleteNumero(id)
    }
  },
  computed: {
    ...mapGetters('fibonacci', ['novoNumero'])
  }
}
</script>
<style>
hr {
  border: 0;
  border-top: medium double #CCC;
  height: 1px;
  overflow: visible;
  padding: 0;
  color: #CCC;
  text-align: center;
}
hr::after {
  content: "Registros anteriores";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.4em;
  padding: 0 0.3em;
  background: white;
}
</style>
