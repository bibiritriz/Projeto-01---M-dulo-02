var prods = [
    { id: 'bife', name: "Bife com Batata", price: 30.0 },
    { id: 'coxa', name: "Coxa de Frango", price: 25.0 },
    { id: 'panela', name: "Carne de Panela", price: 22.0 },
    { id: 'farofa', name: "Farofa", price: 10.0 },
    { id: 'salada', name: "Salada", price: 8.0 },
    { id: 'torresmo', name: "Torresmo", price: 12.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;
    
    output.innerHTML = "";

    for (var input of quantities) {
        var id = input.id;

        output.innerHTML += `Produto: ${prods[id-1].name}  - Preço: ${prods[id-1].price} - Quantidade: ${input.value} </br>`;
        total            += prods[id-1].price * parseFloat(input.value);
    }

    output.innerHTML += `<h2>Total: ${total}</h2>`;

}

