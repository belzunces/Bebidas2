document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mesa = document.getElementById('mesa').value;
    const inputs = document.querySelectorAll('input[type="number"]');
    const selectedBebidas = [];
    inputs.forEach((input) => {
        if (input.value > 0) {
