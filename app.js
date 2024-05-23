document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mesa = document.getElementById('mesa').value;
    const inputs = document.querySelectorAll('input[type="number"]');
    const selectedBebidas = [];
    inputs.forEach((input) => {
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
    generateReport(mesa, selectedBebidas);
});

document.getElementById('exportButton').addEventListener('click', function() {
    exportReport();
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

function sendEmail(email, subject, body) {
    const mailtoLink = `mailto:${belzun1981@gmail.com}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Example usage:
// sendEmail('example@example.com', 'Informe de Pedido', sessionStorage.getItem('report'));
