# Proj2024


REDE DE ENSINODOCTUM
FACULDADES DOCTUM–Teófilo Otoni– MG
Programação para Dispositivos Móveis
Aplicação para dispositivos móveis
Trabalho prático

Kênney Talles Oliveira Campos


Aplicação para dispositivos móveis



Ipatinga
2024



 
1.	Instalando o Clone do projeto: 
Antes de iniciar certifique que as aplicações terá as suas versões de acordo com o meu projeto:
Node: 16.20
Json Seve 1.0
"@angular/material": "^16.2.14",
"bootstrap": "4.6",
"@angular/forms": "^16.2.0",

2.	Configurando:
2.1 Primeiro, você precisa clonar o repositório em sua máquina local. Abra o terminal ou prompt de comando e execute o seguinte comando:
git clone https://github.com/KennedyTalles/Angular_Proj2024.git

2.2 Depois de clonar o repositório, navegue até o diretório do projeto:
cd Angular_Proj2024

2.3 O projeto Angular utiliza o npm (Node Package Manager) para gerenciar suas dependências. Certifique-se de que você tem o Node.js e o npm instalados em sua máquina. Você pode baixá-los e instalá-los a partir do site oficial do Node.js.

Depois de instalar o Node.js e o npm, execute o comando a seguir para instalar as dependências do projeto:

npm install
Pode ser que o projeto tenha algumas configurações de ambiente específicas. Verifique se há um arquivo environment.ts na pasta src/environments. Se precisar configurar alguma variável de ambiente, faça isso antes de executar a aplicação.

Depois de instalar todas as dependências e configurar o ambiente, você pode executar a aplicação Angular com o seguinte comando:
ng serve

Isso iniciará um servidor de desenvolvimento. Por padrão, a aplicação estará disponível em http://localhost:4200/.

Abra o navegador da sua preferência e navegue até http://localhost:4200/ para ver a aplicação em execução.
Erro ao instalar dependências: Certifique-se de que você está usando uma versão compatível do Node.js. Algumas versões mais novas podem causar problemas de compatibilidade com pacotes mais antigos.
Erro ao executar ng serve: Certifique-se de que o Angular CLI está instalado globalmente. Se não estiver, você pode instalá-lo com o seguinte comando:
npm install -g @angular/cli

3.	Clonar o repositório:
git clone https://github.com/KennedyTalles/Angular_Proj2024.git
Navegar para o diretório do projeto:
cd Angular_Proj2024
Instalar as dependências:
pm install
Executar a aplicação:
ng serve
Abrir o navegador e acessar:
http://localhost:4200/

4.	Usando o Json Server
Deverá inicializa-lo em um terminal aparte, então crie mais um no símbolo de +.
Se sua pasta estiver dentro do projeto: Proj2024, vá ate a pasta database.
Use:
cd rsc/database
Execute o comando de inicialização do banco de dados:
json-server --watch db.json
Isso fará o bando de dados inicializar.
Abrir o navegador e acessar:
http://localhost:3000/
 
5.	Utilizando a aplicação:
Ao acessar a aplicação Você será direcionado diretamente para a página sobre. Esta página contém uma breve descrição da utilização da página.

O site compõem um cabeçalho fixo onde se pode navegar pelas opções:
5.1	Lista:
A lista contém todos os dados que estão cadastrados no banco de dados, incluindo 2 opções sendo elas eliminar e atualizar os dados.

5.2	Add alunos:
Em adicionar alunos, todos os dados deverão ser preenchidos corretamente com nome idade curso e e-mail, todos esses válidos. Apesar da tela constar um botão para salvar, apenas com enter também dar para executar a ação.

5.3	Detalhes:
esta tela permite fazer a busca de todos os itens listados no banco de dados através do ID, que pode ser encontrado facilmente na lista.
Esta tela também possui um botão de busca mas pressionando o botão enter, dá para executar a ação.



