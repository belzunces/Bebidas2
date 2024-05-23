document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mesa = document.getElementById('mesa').value;
    const inputs = document.querySelectorAll('input[type="number"]');
    const selectedBebidas = [];
    inputs.forEach((input) => {
        if (input.value > 0) {
```javascript
            selectedBebidas.push(`${input.value} ${input.name}`);
        }
    });

    const result = `
        <h3>Informe del Pedido</h3>
        <p><strong>Número de Mesa:</strong> ${mesa}</p>
        <p><strong>Bebidas Seleccionadas:</strong> ${selectedBebidas.join(', ')}</p>
    `;
    document.getElementById('result').innerHTML = result;
    generateReport(mesa, selectedBebidas);
});

document.getElementById('exportButton').addEventListener('click', function() {
    exportReport();
});

document.getElementById('emailButton').addEventListener('click', function() {
    sendEmail();
});

function generateReport(mesa, bebidas) {
    const report = `Número de Mesa: ${mesa}\nBebidas Seleccionadas:\n${bebidas.join('\n')}`;
    sessionStorage.setItem('report', report);
}

function exportReport() {
    const report = sessionStorage.getItem('report');
    if (report) {
        const blob = new Blob([report], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'informe_pedido.txt';
        link.click();
    } else {
        alert('No hay informe disponible para exportar.');
    }
}

function sendEmail() {
    const email = prompt('Introduce la dirección de correo electrónico:');
    if (email) {
        const report = sessionStorage.getItem('report');
        if (report) {
            const subject = 'Informe de Pedido';
            const body = encodeURIComponent(report);
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
        } else {
            alert('No hay informe disponible para enviar.');
        }
    }
}
