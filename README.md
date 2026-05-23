# SkillMatch JS

## Sobre o Projeto

O **SkillMatch JS** é um simulador de compatibilidade entre o perfil de um candidato e vagas de Front-End Júnior.

O sistema compara automaticamente as habilidades do candidato com os requisitos de cada vaga e exibe:

- percentual de compatibilidade com cada vaga
- habilidades encontradas (que o candidato já possui)
- habilidades faltantes (que o candidato ainda não possui)
- classificação da compatibilidade: Alta, Média ou Baixa
- qual vaga possui maior aderência ao perfil
- recomendação de estudo com base nas habilidades faltantes

---

## Objetivo

Praticar os principais conceitos do Módulo 01 do curso de Desenvolvedor Front-End React do SENAI:

- Lógica de programação
- JavaScript puro
- Tipos de dados: string, number, boolean, array, object
- Condicionais: if-else
- Operadores lógicos e matemáticos
- Escopo de variáveis: var, let, const
- Laços de repetição: for, for...of, forEach
- Funções e arrow functions
- Arrays e métodos: map, filter, find, every, reduce
- Objetos simples com chaves e valores
- Programação Orientada a Objetos: classes, construtor, herança, this
- Closures
- Callbacks
- Promises
- Async / Await
- Versionamento com GitHub e GitFlow simplificado
- Metodologia Kanban

---

## Como Executar

Este projeto **não precisa de Node.js** nem de nenhuma instalação.

### Opção 1 — Console do Navegador (recomendado)

1. Abra o navegador **Google Chrome**
2. Pressione `F12` ou `Ctrl + Shift + J` para abrir o DevTools
3. Clique na aba **Console**
4. Copie todo o conteúdo do arquivo `skillmatch.js`
5. Cole no console e pressione `Enter`

### Opção 2 — VS Code com extensão

1. Instale a extensão **Code Runner** no VS Code
2. Abra o arquivo `skillmatch.js`
3. Pressione `Ctrl + Alt + N` para executar

### Opção 3 — Ambiente online

1. Acesse [jsfiddle.net](https://jsfiddle.net) ou [playcode.io](https://playcode.io)
2. Cole o conteúdo de `skillmatch.js` na área de JavaScript
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

## Extensões Recomendadas no VS Code

| Extensão | Finalidade |
|---|---|
| Code Runner | Executar JavaScript diretamente no VS Code |
| ESLint | Verificar erros e padronizar o código |
| Prettier | Formatar automaticamente o código |
| GitLens | Visualizar histórico de commits e branches |

---

## Conceitos de JavaScript Aplicados

### var, let e const

No JavaScript existem três formas de declarar variáveis:

- **`var`**: forma antiga. Tem escopo de função, não respeita blocos como `if` e `for`, pode ser redeclarada e sofre hoisting. Não é recomendada em projetos modernos.
- **`let`**: introdução do ES6. Tem escopo de bloco. Pode ter seu valor alterado, mas não pode ser redeclarada no mesmo escopo.
- **`const`**: também ES6 e com escopo de bloco. Deve ser usada quando o valor não será reatribuído. Para objetos e arrays declarados com `const`, os valores internos ainda podem ser modificados, mas a referência não pode ser trocada.

**Neste projeto foram utilizados somente `const` e `let`.**

---

## Como a Internet Funciona

A internet é uma rede global de computadores interconectados que se comunicam por meio de protocolos padronizados, principalmente o **TCP/IP**.

Quando você acessa um site:
1. Seu dispositivo (cliente) envia uma requisição para um servidor usando o protocolo **HTTP/HTTPS**
2. O servidor recebe, processa os dados e envia uma resposta
3. O navegador interpreta a resposta (HTML, CSS, JavaScript) e exibe o conteúdo na tela

---

## Arquitetura Cliente-Servidor

No desenvolvimento web, o modelo cliente-servidor divide as responsabilidades:

- **Cliente (Frontend)**: o navegador do usuário. Envia requisições e exibe os dados recebidos. É onde vivem HTML, CSS e JavaScript.
- **Servidor (Backend)**: computador remoto que processa as requisições, acessa bancos de dados e retorna dados ao cliente.

Neste projeto, a função `buscarVagasSimuladas()` simula essa comunicação: ela retorna uma **Promise** que resolve após 1 segundo, representando o tempo de resposta de uma API real. A função `iniciarSistema()` usa **async/await** para aguardar essa resposta antes de continuar, exatamente como acontece em aplicações reais.

---

## Branches Utilizadas

| Branch | Objetivo |
|---|---|
| `main` | Versão estável e final do projeto |
| `develop` | Branch de integração e desenvolvimento |
| `feat/analise-vagas` | Implementação das funções de análise, compatibilidade e POO |
| `docs/readme` | Criação e atualização da documentação |

---

## Histórico de Commits

O projeto seguiu o padrão de commits semânticos:

- `feat:` para novas funcionalidades
- `docs:` para documentação
- `fix:` para correções

---

## Links do Projeto

- **Repositório GitHub:** https://github.com/rodrigotomazifloripa-wq/skillmatch-js
- **Quadro Kanban:** https://github.com/users/rodrigotomazifloripa-wq/projects/1
- **Video Sobre o Sistema:** https://drive.google.com/file/d/1qy9SFeh894r3ECCQ0rwOxMNH8gInIRAj/view?usp=sharing
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
