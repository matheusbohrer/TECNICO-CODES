document.getElementById('tipo').addEventListener('change',
    function() {
        const tipo = this.value;

        document.getElementById('notebookFields').style.display = tipo === 'notebook' ? 'block' : 'none';
        document.getElementById('desktopFields').style.display = tipo === 'desktop' ? 'block' : 'none';

        document.getElementById('corNotebook').required = tipo === 'notebook';
        document.getElementById('tipoGabinete').required = tipo === 'desktop';

        document.getElementById('corGabinete').required = tipo === 'desktop';
    }
)

function validateForm(event) {
    event.preventDeFault();

    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const tipo = document.getElementById('tipo').value;

    let isValid = true;

    if(!validateCPF(cpf)) {
        alert('CPF inválido! Deve conter 11 dígitos.')
        isValid = false;
    }
}

function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    return cpf.length === 11;
}

function validateForm(event) {
    event.preventDefault();

}

if(!validateEmail(email)) {
    alert("E-mail inválido!");
    isValid = false;
}

if(!validateTelefone) {}