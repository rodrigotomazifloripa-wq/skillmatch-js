# SkillMatch JS

## Sobre o Projeto

O **SkillMatch JS** e um simulador de compatibilidade entre o perfil de um candidato e vagas de Front-End Junior.

O sistema compara automaticamente as habilidades do candidato com os requisitos de cada vaga e exibe:

- percentual de compatibilidade com cada vaga
- habilidades encontradas (que o candidato ja possui)
- habilidades faltantes (que o candidato ainda nao possui)
- classificacao da compatibilidade: Alta, Media ou Baixa
- qual vaga possui maior aderencia ao perfil
- recomendacao de estudo com base nas habilidades faltantes

---

## Objetivo

Praticar os principais conceitos do Modulo 01 do curso de Desenvolvedor Front-End React do SENAI:

- Logica de programacao
- JavaScript puro
- Tipos de dados: string, number, boolean, array, object
- Condicionais: if-else
- Operadores logicos e matematicos
- Escopo de variaveis: var, let, const
- Lacos de repeticao: for, for...of, forEach
- Funcoes e arrow functions
- Arrays e metodos: map, filter, find, every, reduce
- Objetos simples com chaves e valores
- Programacao Orientada a Objetos: classes, construtor, heranca, this
- Closures
- Callbacks
- Promises
- Async / Await
- Versionamento com GitHub e GitFlow simplificado
- Metodologia Kanban

---

## Como Executar

Este projeto **nao precisa de Node.js** nem de nenhuma instalacao.

### Opcao 1 — Console do Navegador (recomendado)

1. Abra o navegador **Google Chrome**
2. Pressione `F12` ou `Ctrl + Shift + J` para abrir o DevTools
3. Clique na aba **Console**
4. Copie todo o conteudo do arquivo `skillmatch.js`
5. Cole no console e pressione `Enter`

### Opcao 2 — VS Code com extensao

1. Instale a extensao **Code Runner** no VS Code
2. Abra o arquivo `skillmatch.js`
3. Pressione `Ctrl + Alt + N` para executar

### Opcao 3 — Ambiente online

1. Acesse [jsfiddle.net](https://jsfiddle.net) ou [playcode.io](https://playcode.io)
2. Cole o conteudo de `skillmatch.js` na area de JavaScript
3. Execute e veja o resultado no console

---

## Estrutura do Projeto

```txt
skillmatch-js/
├── skillmatch.js
├── README.md
└── planejamento/
    └── tarefas-kanban.md
```

---

## Extensoes Recomendadas no VS Code

| Extensao | Finalidade |
|---|---|
| Code Runner | Executar JavaScript diretamente no VS Code |
| ESLint | Verificar erros e padronizar o codigo |
| Prettier | Formatar automaticamente o codigo |
| GitLens | Visualizar historico de commits e branches |

---

## Conceitos de JavaScript Aplicados

### var, let e const

No JavaScript existem tres formas de declarar variaveis:

- **`var`**: forma antiga. Tem escopo de funcao, nao respeita blocos como `if` e `for`, pode ser redeclarada e sofre hoisting. Nao e recomendada em projetos modernos.
- **`let`**: introducao do ES6. Tem escopo de bloco. Pode ter seu valor alterado, mas nao pode ser redeclarada no mesmo escopo.
- **`const`**: tambem ES6 e com escopo de bloco. Deve ser usada quando o valor nao sera reatribuido. Para objetos e arrays declarados com `const`, os valores internos ainda podem ser modificados, mas a referencia nao pode ser trocada.

**Neste projeto foram utilizados somente `const` e `let`.**

---

## Como a Internet Funciona

A internet e uma rede global de computadores interconectados que se comunicam por meio de protocolos padronizados, principalmente o **TCP/IP**.

Quando voce acessa um site:
1. Seu dispositivo (cliente) envia uma requisicao para um servidor usando o protocolo **HTTP/HTTPS**
2. O servidor recebe, processa os dados e envia uma resposta
3. O navegador interpreta a resposta (HTML, CSS, JavaScript) e exibe o conteudo na tela

---

## Arquitetura Cliente-Servidor

No desenvolvimento web, o modelo cliente-servidor divide as responsabilidades:

- **Cliente (Frontend)**: o navegador do usuario. Envia requisicoes e exibe os dados recebidos. E onde vivem HTML, CSS e JavaScript.
- **Servidor (Backend)**: computador remoto que processa as requisicoes, acessa bancos de dados e retorna dados ao cliente.

Neste projeto, a funcao `buscarVagasSimuladas()` simula essa comunicacao: ela retorna uma **Promise** que resolve apos 1 segundo, representando o tempo de resposta de uma API real. A funcao `iniciarSistema()` usa **async/await** para aguardar essa resposta antes de continuar, exatamente como acontece em aplicacoes reais.

---

## Branches Utilizadas

| Branch | Objetivo |
|---|---|
| `main` | Versao estavel e final do projeto |
| `develop` | Branch de integracao e desenvolvimento |
| `feat/analise-vagas` | Implementacao das funcoes de analise, compatibilidade e POO |
| `docs/readme` | Criacao e atualizacao da documentacao |

---

## Historico de Commits

O projeto seguiu o padrao de commits semanticos:

- `feat:` para novas funcionalidades
- `docs:` para documentacao
- `fix:` para correcoes

---

## Tecnologias Utilizadas

- JavaScript ES6+
- VS Code
- GitHub / GitHub Desktop
- Kanban (GitHub Projects)

---

## Autor

**Rodrigo Tomazi**
Curso: Desenvolvedor Front-End React — SENAI M1S6
