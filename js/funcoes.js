// ---------------------- CALCULADORA DE IMC - ACADEMIA FACEF ----------------------
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularButton = document.getElementById('calcular');
const limparIMCButton = document.getElementById('limpar');
const resultadoIMCValor = document.getElementById('valor-imc');
const resultadoIMCStatus = document.getElementById('status-imc');

const calcularMeuIMC = () => {
    let peso = pesoInput.value.trim();
    let altura = alturaInput.value.trim();

    console.log('Peso:', peso);
    console.log('Altura:', altura);

    if (!peso || !altura) {
        alert('É necessário preencher o peso e a altura!');
        return;
    }

    peso = peso.replace(',', '.');
    altura = altura.replace(',', '.');

    if (isNaN(peso) || isNaN(altura)) {
        alert('Digite somente número no peso e na altura.');
        return;
    }

    if (parseFloat(altura) <= 0) {
        alert('A altura deve ser um valor maior que zero.');
        return;
    }

    if (!/\d+\.\d+|\d+\,\d+/.test(altura)) {
        alert('Por favor, insira a altura com um separador decimal (ponto ou vírgula). Exemplo: 1.75 ou 1,75');
        return;
    }

    const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    resultadoIMCValor.textContent = imc.toFixed(2);

    let meuStatus = '';
    if (imc < 18.5) {
        meuStatus = 'Abaixo do peso';
    } else if (imc < 25) {
        meuStatus = 'Peso normal';
    } else if (imc < 30) {
        meuStatus = 'Sobrepeso';
    } else if (imc < 35) {
        meuStatus = 'Obesidade grau I';
    } else if (imc < 40) {
        meuStatus = 'Obesidade grau II';
    } else {
        meuStatus = 'Obesidade grau III (mórbida)';
    }

    console.log('Status do IMC:', meuStatus);
    resultadoIMCStatus.textContent = meuStatus;
    console.log('Elemento de status atualizado:', resultadoIMCStatus);
};

const limparMeusCamposIMC = () => {
    pesoInput.value = '';
    alturaInput.value = '';
    resultadoIMCValor.textContent = '0';
    resultadoIMCStatus.textContent = '0';
};

calcularButton.addEventListener('click', calcularMeuIMC);
limparIMCButton.addEventListener('click', limparMeusCamposIMC);

// ---------------------- BUSCA DE CEP NO CADASTRO ----------------------
const cepInputCadastro = document.getElementById('input-cep');
const pesquisarCEPButtonCadastro = document.getElementById('pesquisar');
const logradouroInputCadastro = document.getElementById('logradouro');
const numeroInputCadastro = document.getElementById('numero');
const complementoInputCadastro = document.getElementById('complemento');
const bairroInputCadastro = document.getElementById('bairro');
const cidadeInputCadastro = document.getElementById('cidade');
const estadoInputCadastro = document.getElementById('estado');
const paisInputCadastro = document.getElementById('pais');
const formularioCadastro = document.getElementById('formulario');

const buscarMeuCEP = () => {
    const cep = cepInputCadastro.value.replace('-', '');

    if (!cep) {
        alert('Precisa digitar o CEP para realizar a busca do endereço!');
        return;
    }

    if (!/^\d{8}$/.test(cep)) {
        alert('Formato do CEP está errado, digite somente os 8 números!');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado, tente novamente!');
                limparMeuEndereco();
                return;
            }
            logradouroInputCadastro.value = data.logradouro;
            bairroInputCadastro.value = data.bairro;
            cidadeInputCadastro.value = data.localidade;
            estadoInputCadastro.value = data.uf;
            paisInputCadastro.value = 'Brasil';
        })
        .catch(() => {
            alert('Deu algum problema na hora de buscar o CEP, tenta de novo!');
            limparMeuEndereco();
        });
};

const limparMeuEndereco = () => {
    logradouroInputCadastro.value = '';
    numeroInputCadastro.value = '';
    complementoInputCadastro.value = '';
    bairroInputCadastro.value = '';
    cidadeInputCadastro.value = '';
    estadoInputCadastro.value = '';
    paisInputCadastro.value = '';
};

const validarMeuFormulario = () => {
    const nome = document.getElementById('nome').value.trim();
    const cep = cepInputCadastro.value.trim();

    if (!nome) {
        alert('Preciso que digite o seu nome para realizar a matrícula!');
        return false;
    }

    if (!cep) {
        alert('O CEP é obrigatório para encontrarmos o seu endereço!');
        return false;
    }

    return true;
};

pesquisarCEPButtonCadastro.addEventListener('click', buscarMeuCEP);

formularioCadastro.addEventListener('submit', (event) => {
    if (!validarMeuFormulario()) {
        event.preventDefault();
    }
});

// ---------------------- BOTÃO DE LIMPAR DO FORMULÁRIO DE CONTATO ----------------------
const botaoLimparContato = document.createElement('input');
botaoLimparContato.type = 'button';
botaoLimparContato.value = 'Limpar';
botaoLimparContato.id = 'limpar-contato';
botaoLimparContato.classList.add('limpar');

if (formularioCadastro) {
    formularioCadastro.appendChild(botaoLimparContato);
    botaoLimparContato.addEventListener('click', () => {
        formularioCadastro.reset();
    });
}
