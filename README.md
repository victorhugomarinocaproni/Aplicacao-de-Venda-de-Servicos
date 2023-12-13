![bannerInFocus](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/ffbd8800-c006-46ca-a3eb-0a16acc1f3c7)
<br>![MySQL](https://img.shields.io/badge/mysql-%23323330.svg?style=for-the-badge&logo=mysql&logoColor=#3388FF) ![Figma](https://img.shields.io/badge/figma-%23323330.svg?style=for-the-badge&logo=figma&logoColor=purple)	![NodeJS](https://img.shields.io/badge/node.js-23323330?style=for-the-badge&logo=node.js&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%23323330.svg?style=for-the-badge&logo=css3&logoColor=blue) ![HTML5](https://img.shields.io/badge/html5-%23323330.svg?style=for-the-badge&logo=html5&logoColor=#FFA500) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Sobre a InFocus Store

Projeto desenvolvido durante o 2° semestre da faculdade de Sistemas de Informação, tendo por objetivo o desenvolvimento de um aplicação Fullstack de Venda de Servicos, em que o cenário escolhido foi o de uma loja de prestação de serviços de informática. Desse modo, seguindo tal cenários, o projeto apresenta 3 atores principais, sendo estes: o cliente, o prestador de serviço e o gerente. Assim, cada ator teve suas funções e telas separadas em pastas para uma melhor organização (frontendClientes, frontendPrestadorDeServicos, frontendGerente). Para o Front foram utilizados HTML, CSS e JavaScript puros; para o Back foi utilizado o Node.JS com Express; e para a DataBase o MySQL. Além disso, tentamos implementar uma Arquitetura MVC de Projeto seguindo o Protocolo RESTful em nossas APIs.

### Cliente: 
O fluxo do cliente apresenta 3 funcionalidades principais, dentre as quais ele pode escolher entre: gerar um novo cartão da loja; acessar o menu de compras e realizar compras de serviços (não foi implementada a feature de saldos); ou então acessar seu relatório com seus dados gerais de serviços e recompensas.
### Prestador de Serviço:
O fluxo do prestador de serviço serve para controlar quais serviços e recompensas o cliente deseja utilizar naquele momento. Além disso, há uma funcionalidade de gerar recompensas conforme a utilização de serviços. As recompensas seguem a seguinte lógica:
```
1 serviço  | Nenhuma Recompensa
2 Serviços | Instalação de Sistema Operacional
3 Serviços | Manutenção de Problemas
4 Serviços | Instalação de Antivírus
```
### Gerente:
O fluxo do gerente é bem simples, e baseia-se basicamente em um relatório gerencial com os principais dados da loja organizados. Dessa maneira, ele tem acesso à uma página de relatório com o total de seviços vendidos, kits vendidos, serviços relizados por tipo, total de recompensas geradas; além de poder ver a quantidade de serviços que foram gerados mas não utilizados.

# Tecnologias Utilizadas
### Frontend:
* HTML
* CSS
* JavaScript
  
### Backend:
* Node.js

### Database:
* MySQL

### Arquitetura de Projeto:
* Tentativa de utilização da arquiterura MVC (Model View Controller)

### Arquitetura da API:
* RESTful

### Protocolos da API:
* HTTP

  

<h4 align="center"> 
	🚀 InFocus Store ... Pronta!!! 🚀
</h4>

# Features 
- [x] Gerar Card ID
- [x] Validar Card ID
- [x] Registrar Pedidos
- [x] Registrar Recompensas
- [x] Utilizar Pedidos
- [x] Utilizar Recompensas
- [x] Gerar Relatorios

# Pré-requisitos

Antes de tudo, você precisará ter o [VSCode](https://code.visualstudio.com) instalado em sua Máquina, assim como o [MySQL](https://www.mysql.com/downloads/) e o [Node.js](https://nodejs.org/en/).
Além disso, a configuração da conexão com o banco de dados do BackEnd deverá ser alterada.
### Configurando a Conexão do Banco:
```bash
#Clone este repositório
$ git clone <https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos.git>
```
```bash
#Acesse a Pasta "backend"
```
![back](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/9c2ea286-02ac-4f67-a2fe-b596bcad5d69)

```bash
#Dentro de Backend, acesse a pasta "database"
```
![databse](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/7c3ceba7-d2c5-4017-8dc6-7b1deecfcd28)

```bash
#Abra o arquivo "conexao.js"
```
![conexao](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/882972e8-eeaf-4c74-aff0-e7398241fe3b)

#Altere seus dados para se conectar ao seu banco local.

# Imagens das Telas:
```
Fluxo do Cliente
```
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/8f7b5d0d-1f77-48ef-bcb0-3e58b6c685aa)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/ce16c05d-ee26-4406-ba25-00cf2dced155)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/97786e22-13ae-4fe8-b447-d63b96273305)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/8fcadcc7-0057-4544-90be-9dc472b5bcaa)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/24ef82f9-1f33-4e67-aa20-429e0abd4247)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/aa860057-1b34-46ab-9603-98cf26c905d5)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/1f1cc1f4-257b-47d4-ab98-578d3ae08f12)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/eacb4732-caa9-4a20-9a46-eb0ddc9c50bc)


```
Fluxo do Prestador de Serviços
```
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/03e5fef7-d5a2-4532-ac6c-1cf65041d7b5)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/5a8fbfbb-9a52-426e-84a0-917af636d183)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/a706bded-9e52-4f1c-9ea4-d3b6b73ce1de)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/11f3fc2e-a6e5-4653-9b8e-66dfcef513bb)


```
Fluxo do Gerente
```
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/194bcd63-8d37-4823-b185-8d247d490989)
![image](https://github.com/victorhugomarinocaproni/Aplicacao-de-Venda-de-Servicos/assets/113490368/6fa0094f-ec65-4983-b713-3784ab265bc0)

