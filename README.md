# 🏋️ Calculadora de IMC + Busca de Endereço - Academia FACEF

Este projeto é uma aplicação web desenvolvida como atividade avaliativa individual para a disciplina de Desenvolvimento Front-End. Ele oferece duas funcionalidades principais:

- **Calculadora de IMC (Índice de Massa Corporal)**
- **Preenchimento automático de endereço a partir do CEP (utilizando a API ViaCEP)**

## 🔧 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript ES6 (nativo)**
- **API Pública ViaCEP**
- **JQuery (para funcionalidades adicionais no site)**

## 📌 Funcionalidades

### ✅ 1. Calculadora de IMC
- Permite que o usuário insira seu peso e altura.
- Realiza o cálculo do IMC com validações (números válidos, altura positiva, separadores decimais etc).
- Exibe o valor do IMC e uma classificação conforme os padrões da OMS:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade grau I, II e III

### ✅ 2. Busca de Endereço por CEP
- Usuário informa o CEP no formulário de matrícula.
- O sistema busca automaticamente os dados de endereço via [ViaCEP](https://viacep.com.br/).
- Campos como rua, bairro, cidade, estado e país são preenchidos automaticamente.
- Possui validações de CEP e mensagens de erro apropriadas.

### ✅ 3. Formulário de Matrícula com Validação
- Validação de campos obrigatórios (nome e CEP).
- Botão "Limpar" para resetar todos os campos do formulário.

## 📁 Estrutura do Projeto

├── index.html # Página principal com IMC e formulário
├── css/
│ └── style.css # Estilos personalizados
├── js/
│ ├── funcoes.js # Scripts principais (IMC, CEP, validações)
│ ├── jquery.js # Biblioteca JQuery
│ ├── ancora.js # Rolagem suave para âncoras
│ └── scroll.js # Efeitos de scroll da página
├── imagens/ # Imagens utilizadas no site
├── icon/ # Ícones da navegação


## 🎯 Como usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Use os campos da calculadora ou realize o teste do formulário de matrícula.

## 🧠 Observações

- A aplicação foi escrita em **JavaScript ES6 puro**, sem uso de frameworks front-end.
- O projeto é totalmente estático e não depende de back-end.
- Requer conexão com a Internet para funcionar a busca de CEP via API.

## 👩‍💻 Desenvolvido por

Ingrid Xisto — Aluna da UniFECAF  
Projeto para a disciplina: **Desenvolvimento Front-End**

---
