<template>
  <div>
    {{ acceptedNumber }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      campo: '1,5,8,10,261,23,14,23,21,56',
      fn: '',
      f1: '',
      f2: '',
      acceptedNumber: [],
      rejectedNumber: []
    }
  },
  mounted () {
    // transformando fragmento digitado em array com a exposão de divisão na virgula
    var newArray = this.campo.split(',')
    // transformando fragmentos em inteiro
    var transform = newArray.map(transformInteger => {
      return parseInt(transformInteger)
    })

    // ordenando array para forma crescente
    var ordeny = transform.sort((n1, n2) => {
      return n1 - n2
    })
    for (var i = 0; i < ordeny.length - 1; i++) {
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
  }
}
</script>
<style>
</style>
