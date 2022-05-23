# Instagram clone com AdonisJS

Esse projeto é um clone Full-Stack do Instagram, do qual eu utilizei o AdonisJS como framework e algumas de suas funcionalidades para validação, ORM e logging. Também foi utilizado o Docker com uma instância do MySQL.

Nesse app é possível criar uma conta, fazer o login, receber um e-mail de ativação da conta (foi usada a ferramenta MailTrap.io para testar o envio desses e-mails), fazer upload de fotos, editar o perfil e também há como feature a possibilidade de interagir com demais perfis (follow e unfollowing).

### Ferramentas utilizadas:

- TailwindCSS
- Fontawesome (icon library)
- Docker
- DBeaver
- MailTrap.io

### Rodar projeto localmente:

- Instalar as depedências: `npm install ` 
- Migrar o banco de dados: `node ace migration:run`
- Rodar o projeto: `node ace serve --watch`

### Algumas prévias abaixo: 

Página de signup:
![](https://i.ibb.co/qdjjtqD/signup.jpg)

Página de login: 
![](https://i.ibb.co/wdFXGG8/login.jpg)
