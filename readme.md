### (Finalizado) - 06/06/2023 -  Acesse por aqui : https://projeto-nlw-five.vercel.app/
# NLW - SPACETIME
<a href="https://imgur.com/DpGuc3P"><img src="https://i.imgur.com/DpGuc3P.png" title="source: imgur.com" /></a>
### Cápsula do Tempo. Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!


<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

Front-End:
- Next.js | TypeScript | TailwindCSS | axios | lucid-react | js-cookie | jwt

Back-End:
- TypeScript | Fastify | Prisma | axios | zod

## 💻 Projeto

O objetivo da aplicação de recordação de memórias é permitir que o usuário possa adicionar à uma timeline textos e fotos de acontecimentos marcantes de sua vida, organizados por mês e ano.


## 💻 Instalação

```bash
#Crie uma pasta e clone os seguintes repositórios ->

Front-End:
git clone https://github.com/deividvaz1/Projeto-NLW.git

Back-End:
git clone https://github.com/deividvaz1/NLW-SERVER.git
```
Nas váriaveis ambiente, você vai precisar criar um token e obter o valor do GITHUB_CLIENT_ID e dentro do .env.local você botará como NEXT_PUBLIC_GITHUB_CLIENT_ID e o valor do GITHUB_CLIENT_ID

```bash
# Acesse a pasta back-end do projeto
cd server
# Instale as dependências
npm i
# Execute a aplicação
npm run dev
```
Para criar o banco de dados no seu computador, rode o seguinte comando no terminal do Back-End:
```bash
$ npx prisma migrate dev
```
```bash
# Em outra janela do seu terminal acesse a pasta do front-end do projeto
cd web
# Instale as dependências
npm i
# Execute a aplicação
npm run dev
# Agora basta acessa-la
```



## 🔖 Layout

<a href="https://imgur.com/lXwmehl"><img src="https://i.imgur.com/lXwmehl.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/XwjY9SU"><img src="https://i.imgur.com/XwjY9SU.png" title="source: imgur.com" /></a>

Você também pode visualizar o layout original do projeto através do link abaixo (é necessário ter uma conta do Figma):

- [Acessar o layout no Figma](https://www.figma.com/community/file/1240070456276424762/C%C3%A1psula-do-tempo-%E2%80%A2-Trilha-Ignite)

## Melhorias?
- [x] Fazer deploy do site na vercel
- [x] Editar e deletar memórias
- [x] Responsividade do site
- [ ] Compartilhar memórias(opcional);
