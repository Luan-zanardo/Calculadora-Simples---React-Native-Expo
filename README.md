## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina:

1.  **Instalar o Node.js:** Certifique-se de ter o Node.js instalado em seu computador.
2.  **Instalar o Expo CLI:** Não é necessário instalar globalmente, usaremos via `npx`.
3.  **Clonar ou baixar os arquivos:** Tenha os arquivos do projeto em uma pasta.
4.  **Instalar dependências:** No terminal, dentro da pasta do projeto, execute:
    ```bash
    npm install
    ```
5.  **Iniciar o projeto:** Execute o comando:
    ```bash
    npx expo start
    ```
6.  **Abrir no dispositivo:**
    *   Use o aplicativo **Expo Go** no seu celular (Android ou iOS) e escaneie o código QR que aparecerá no terminal.
    *   Ou pressione `w` no terminal para abrir no navegador (requer configuração adicional de web).

## 🛠️ O que foi feito (Passo a Passo)

### 1. Criação do Projeto
O projeto foi iniciado usando o comando:
```bash
npx create-expo-app . --template blank
```
Isso cria uma estrutura básica limpa para começarmos a programar.

### 2. Instalação do React Native Paper
Para os botões e o visual do display, instalamos a biblioteca React Native Paper:
```bash
npm install react-native-paper react-native-safe-area-context
```

### 3. Estrutura do Código (App.js)
Toda a lógica está concentrada no arquivo `App.js` para facilitar a leitura.

*   **Imports:** Importamos o `useState` do React para gerenciar os números, e componentes do `react-native` e `react-native-paper`.
*   **Estados (useState):**
    *   `display`: Guarda a expressão completa (ex: "10+5") que aparece na tela.
    *   `primeiroNumero`: Guarda o primeiro número digitado.
    *   `operacao`: Guarda o sinal da operação atual.
    *   `finalizado`: Sinaliza se o resultado acabou de ser exibido.
*   **Funções Principais:**
    *   `digitarNumero`: Adiciona números ao final da string do display.
    *   `escolherOperacao`: Adiciona o sinal da operação (+, -, *, /) diretamente no display junto com os números.
    *   `calcular`: Divide a string do display para encontrar o segundo número, faz a conta e mostra apenas o resultado.
    *   `limpar`: Reseta todos os estados para o valor inicial (0).

### 4. Interface (UI)
*   **Surface:** Usado como o fundo do display para dar uma leve sombra.
*   **View com Row:** Os botões são organizados em linhas (`flexDirection: 'row'`) para formar o teclado da calculadora.
*   **Estilos Simples:** Cores básicas foram usadas para diferenciar números, operações, o botão de limpar e o botão de igual.

## 📂 Estrutura de Pastas Básica
```
Calculadora/
├── .expo/            # Arquivos do Expo
├── node_modules/     # Bibliotecas instaladas
├── App.js            # Todo o código da aplicação
├── app.json          # Configurações do Expo
├── package.json      # Lista de dependências e comandos
└── README.md         # Este arquivo de explicação
```
