
var facturas = function (num) {

    var facturas = []

    for (let i = 0; i < num; i++){
        facturas[i] = {
                        numFactura: '',
                        cliente: '',
                        fecha: '',
                        items : []
                    };
        
    }
    
    return {
        addFactura: function ( ind, numFactura, cliente, fecha) {
            
            facturas[ind].numFactura = numFactura;
            facturas[ind].cliente = cliente;
            facturas[ind].fecha = fecha;
        },
        
        addItem: function (indf, indi, id, precio, cantidad) {
            facturas[indf].items[indi] = {
                                            id: id,
                                            precio: precio,
                                            cantidad:cantidad,
                                        };
        },
        
        verFactura: function (ind){
            
            return facturas[ind];
        },
        
        verFacturas: function (){
            return facturas;
        }
    }
    
}

var fac10 = facturas(10);
fac10.addFactura(3,'12457', 'JOrge Nieto', '10_abril');
fac10.addFactura(4,'12457', 'JOrge Nieto', '10_abril');
fac10.addItem(4, 0, 'Gansito', '10000', '100');
console.log('factura n', fac10.verFactura(4));
console.log('Todas las facturas', fac10.verFacturas());
console.log('factura n', fac10.verFactura(4).items);
  