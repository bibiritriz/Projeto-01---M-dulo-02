var prods = [
    { id: 1, name: "Bife com Batata", price: 30.0 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
    { id: 3, name: "Carne de Panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    let name       = document.getElementById("name").value;
    var preco_final = 0;
    var total      = 0;

    output.innerHTML = "";

    output.innerHTML += `Caro, <b>${name}</b><br><br> Seguem os dados do seu pedido.<br><br> O seu pedido é: <br><br>`

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    for (var input of quantities) {
        var id = input.id;

        if(input.value > 0){
            total            = prods[id-1].price * parseFloat(input.value);
            preco_final += total;
            output.innerHTML += `<li>Prato: ${prods[id-1].name}  - Preço: ${formatter.format(prods[id-1].price)} - Quantidade: ${input.value} - Total: ${formatter.format(total)}</li></br>`;
        }
    }

    output.innerHTML += `<b>Preço Final: ${formatter.format(preco_final)}</b>`
}

