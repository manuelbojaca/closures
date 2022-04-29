function crearContador () {
    var counter = 0;
    function contarU(num) {
      counter += num;
    }
    return {
      contar: function() {
        contarU(1);
      },

      valor: function() {
        return counter;
      }
    }
  }

var newCounter = crearContador();

console.log(newCounter.valor());
newCounter.contar();
newCounter.contar();
newCounter.contar();
console.log(newCounter.valor());