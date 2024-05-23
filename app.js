document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mesa = document.getElementById('mesa').value;
    const inputs = document.querySelectorAll('input[type="number"]');
    const selectedBebidas = [];
    inputs.forEach((```javascript
input) => {
        if (input.value > 0) {
            selectedBebidas.push(`${input.value} ${input.name}`);
        }
    });

    const result = `
        <h3>Informe del Pedido</h3>
        <p><strong>Número de Mesa:</strong> ${mesa}</p>
        <p><strong>Bebidas Seleccionadas:</strong> ${selectedBebidas.join(', ')}</p>
    `;
    document.getElementById('result').innerHTML = result;
});

document.getElementById('printButton').addEventListener('click', function() {
    printReport();
});

function printReport() {
    const printContent = document.getElementById('result').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}
