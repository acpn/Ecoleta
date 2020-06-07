# Semana Next Level (RocketSeat)

![Screenshot](logo.jpg)

# Ecoleta

Durante a NLW da Rocketseat foi desenvolvido o Ecoleta, um sistema para cadastro de pontos de coleta de resíduos orgânicos, materiais eletrônicos entre outros. Foi desenvolvido o back-end utilizando nodeJs, front-end com ReactJs e o aplicativo mobile utilizando react-native.

# Executar aplicativo

* Primeiramente é necessário configurar a base de dados, nessa versão do projeto foi utilizado postgres com docker. Caso não tenha o docker instalado acesse o link abaixo e faça a intalação.
    - Docker containers
        - https://docs.docker.com/get-docker/

* Após o download do docker execute o comando abaixo:
    ```bash
     docker pull postgres
    ```

* Execute o comando abaixo. Onde esta NOME_BASE adicione um nome de sua preferência. USER e PASSWORD podem ser os de us apreferência também. 
    ```bash
    docker run --name NOME_BASE -p 5432:5432 -e POSTGRES_DB=NOME_BASE -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin123 -d postgres
    ```

* Edite o arquivo **connection.ts** dentro do diretório server/src/database. Altere o valor das variáveis: user, password e database de acordo com os valores passados no comando **docker run** acima.


* Executando o backend, a partir do diretório server execute:
    ```bash
    npm run dev
    ```

* Para executar o frontend, a partir do diretório web execute:
    ```bash
    npm start
    ```

* Para executar o mobile, a partir do diretório mobile execute:
    ```bash
    expo start
    ```
Depois de executar o start do mobile, uma aba abrirá em seu navegador, então basta escanear o QR code com a câmera do seu celular e aguardar a instalação. Caso seu dispositivo não tenha o expo instalado, abrirá a loja de aplicativo para instalação. Após a instalação basta abrir o projeto.