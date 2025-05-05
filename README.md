# Homenagem ao Dia das Mães

Este projeto é uma pequena homenagem ao Dia das Mães, criado para expressar carinho e gratidão. O site contém um carrossel de imagens, um contador de tempo, e uma música especial dedicada às mães.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir a interface.
- **Bootstrap**: Framework CSS para o layout responsivo e componente de carrossel.
- **Spotify API**: Para integrar a música no site através do player embed.

## Funcionalidades

1. **Carrossel de Imagens**: O site apresenta um carrossel com várias imagens dedicadas às mães, com mensagens especiais para cada uma delas.
2. **Contador de Tempo**: O site exibe um contador que calcula o tempo desde o nascimento do filho, atualizado em tempo real.
3. **Música Especial**: O site toca a música **"Como É Grande O Meu Amor Por Você"** de Roberto Carlos, através do player do Spotify, com uma mensagem dedicada.

## Como Rodar o Projeto

### Pré-requisitos

1. **Node.js** e **npm** instalados no seu computador.

### Passos para rodar

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/SEU-USER/NOME-DO-REPOSITORIO.git
   
2. Navegue até a pasta do projeto:
   cd NOME-DO-REPOSITORIO

3. Instale as dependências:
   npm install

4. Para rodar o projeto localmente, use o comando:
   npm start
   
5. Acesse o site em seu navegador:
   http://localhost:3000

## Estrutura do Projeto

.
├── src
│   ├── components
│   │   ├── ContagemTempo.js        # Componente principal com o carrossel e a música
│   ├── App.js                      # Componente raiz do React
│   ├── index.js                    # Ponto de entrada do aplicativo
│   ├── styles.css                  # Estilos globais
└── public
    ├── img                         # Imagens usadas no carrossel
    ├── index.html                  # Arquivo HTML de entrada

##Personalização
Imagens: Você pode substituir as imagens do carrossel pelaquelas que quiser, desde que coloque-as na pasta public/img/ e altere os caminhos no código.

Música: Para alterar a música, substitua a URL do Spotify no iframe para o link desejado.

Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

Contato
Criado por João Vitor
