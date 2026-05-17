// ============================================================
// SKILLMATCH JS
// Simulador de Compatibilidade com Vaga Front-End Junior
// Autor: Rodrigo
// Curso: Desenvolvedor Front-End React - SENAI - M1S6
// ============================================================

// ============================================================
// POO - CLASSES, CONSTRUTOR, THIS (RF09, RF10, RF11)
// ============================================================

class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  // RF11 - Uso do this dentro do metodo
  exibirResumo() {
    return `${this.cargo} | ${this.empresa} | ${this.modalidade} | R$ ${this.salario.toFixed(2)}`;
  }
}

// RF10 - Heranca: VagaFrontEnd herda de Vaga usando extends e super
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nivel da vaga: ${this.nivel}`;
  }

  exibirResumoCompleto() {
    return `${this.exibirResumo()} | ${this.exibirNivel()}`;
  }
}

// ============================================================
// RF01 - PERFIL DO CANDIDATO (objeto simples com chaves e valores)
// ============================================================

const candidato = {
  nome: "Rodrigo",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Logica de Programacao", "Kanban", "HTML", "CSS"],
  experienciaMeses: 3
};

// ============================================================
// RF02 - LISTA DE VAGAS (array com instancias de VagaFrontEnd)
// ============================================================

const vagas = [
  new VagaFrontEnd(
    "TechStart",
    "Desenvolvedor Front-End Junior",
    ["JavaScript", "GitHub", "Logica de Programacao"],
    2800,
    "Remoto",
    "Junior"
  ),
  new VagaFrontEnd(
    "CodeLab",
    "Estagio Front-End",
    ["JavaScript", "Kanban", "GitHub"],
    1800,
    "Hibrido",
    "Estagio"
  ),
  new VagaFrontEnd(
    "WebSolutions",
    "Programador JavaScript Junior",
    ["JavaScript", "Arrays", "Objetos", "Funcoes"],
    3000,
    "Presencial",
    "Junior"
  ),
  new VagaFrontEnd(
    "DigitalFactory",
    "Front-End Developer",
    ["JavaScript", "HTML", "CSS", "GitHub", "Kanban"],
    3500,
    "Remoto",
    "Pleno"
  ),
  new VagaFrontEnd(
    "StartupX",
    "Estagiario de Programacao Web",
    ["HTML", "CSS", "JavaScript"],
    1200,
    "Remoto",
    "Estagio"
  )
];

// ============================================================
// RF13 - CLOSURE: Contador de analises realizadas
// A funcao interna mantem acesso a variavel "total" do escopo externo
// ============================================================

function criarContadorDeAnalises() {
  let total = 0;
  return function () {
    total++;
    return total;
  };
}

const contarAnalise = criarContadorDeAnalises();

// ============================================================
// RF04 - CLASSIFICAR COMPATIBILIDADE por percentual (if-else)
// ============================================================

function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Media compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}

// ============================================================
// RF03 - CALCULAR COMPATIBILIDADE com uma vaga
// RF08 - Array methods: filter (habilidades encontradas e faltantes)
//                       every (verifica se atende todos os requisitos)
// ============================================================

const calcularCompatibilidade = (candidatoParam, vaga) => {
  const habilidadesEncontradas = vaga.requisitos.filter(req =>
    candidatoParam.habilidades.includes(req)
  );

  const habilidadesFaltantes = vaga.requisitos.filter(req =>
    !candidatoParam.habilidades.includes(req)
  );

  const totalRequisitos = vaga.requisitos.length;
  const totalAtendidos = habilidadesEncontradas.length;
  const percentual = Math.round((totalAtendidos / totalRequisitos) * 100);

  const classificacao = classificarCompatibilidade(percentual);

  // RF08 - every: retorna true apenas se o candidato atende a TODOS os requisitos
  const atendeTotal = vaga.requisitos.every(req =>
    candidatoParam.habilidades.includes(req)
  );

  return {
    vaga,
    habilidadesEncontradas,
    habilidadesFaltantes,
    percentual,
    classificacao,
    atendeTotal
  };
};

// ============================================================
// RF08 - MAP: Gera uma nova lista com o resultado de cada vaga
// ============================================================

const analisarTodasVagas = (candidatoParam, listaVagas) => {
  return listaVagas.map(vaga => calcularCompatibilidade(candidatoParam, vaga));
};

// ============================================================
// RF05 - LISTAR HABILIDADES FALTANTES por vaga (for...of)
// ============================================================

function exibirHabilidadesFaltantes(resultado) {
  if (resultado.habilidadesFaltantes.length === 0) {
    console.log("  Voce possui TODAS as habilidades exigidas por esta vaga!");
  } else {
    console.log(`  Para a vaga da ${resultado.vaga.empresa}, faltam:`);
    for (const habilidade of resultado.habilidadesFaltantes) {
      console.log(`    - ${habilidade}`);
    }
  }
}

// ============================================================
// RF06 - ENCONTRAR A VAGA COM MAIOR COMPATIBILIDADE
// RF08 - REDUCE: compara todos os resultados e retorna o maior
// ============================================================

const encontrarMelhorVaga = (resultados) => {
  return resultados.reduce((melhor, atual) =>
    atual.percentual > melhor.percentual ? atual : melhor
  );
};

// ============================================================
// RF08 - FIND: Buscar uma vaga especifica por nome de empresa
// ============================================================

const buscarVagaPorEmpresa = (listaVagas, nomeEmpresa) => {
  return listaVagas.find(
    vaga => vaga.empresa.toLowerCase() === nomeEmpresa.toLowerCase()
  );
};

// ============================================================
// RF07 - GERAR RECOMENDACAO DE ESTUDO com base nas habilidades faltantes
// ============================================================

function gerarRecomendacaoDeEstudo(resultados) {
  const todasFaltantes = [];

  for (let i = 0; i < resultados.length; i++) {
    const faltantes = resultados[i].habilidadesFaltantes;
    for (let j = 0; j < faltantes.length; j++) {
      if (!todasFaltantes.includes(faltantes[j])) {
        todasFaltantes.push(faltantes[j]);
      }
    }
  }

  if (todasFaltantes.length === 0) {
    return "Parabens! Voce possui todas as habilidades exigidas pelas vagas analisadas!";
  }

  return `Priorize estudar ${todasFaltantes.join(", ")}, pois esses conteudos aparecem nas vagas analisadas.`;
}

// ============================================================
// RF03 - EXIBIR RESULTADO DE UMA ANALISE no console
// Integra o closure contarAnalise para numerar cada analise
// ============================================================

function exibirResultadoAnalise(resultado) {
  const numeroAnalise = contarAnalise();
  const separador = "--------------------------------------------------";

  console.log("\n" + separador);
  console.log(`Analise #${numeroAnalise}`);
  console.log(separador);
  console.log(`Empresa:                ${resultado.vaga.empresa}`);
  console.log(`Cargo:                  ${resultado.vaga.cargo}`);
  console.log(`Modalidade:             ${resultado.vaga.modalidade}`);
  console.log(`Salario:                R$ ${resultado.vaga.salario.toFixed(2)}`);
  console.log(`Nivel:                  ${resultado.vaga.nivel}`);
  console.log(`Compatibilidade:        ${resultado.percentual}%`);
  console.log(`Classificacao:          ${resultado.classificacao}`);
  console.log(`Atende todos os req.:   ${resultado.atendeTotal ? "Sim" : "Nao"}`);

  const encontradas = resultado.habilidadesEncontradas.length > 0
    ? resultado.habilidadesEncontradas.join(", ")
    : "Nenhuma";

  const faltantes = resultado.habilidadesFaltantes.length > 0
    ? resultado.habilidadesFaltantes.join(", ")
    : "Nenhuma";

  console.log(`Habilidades encontradas: ${encontradas}`);
  console.log(`Habilidades faltantes:   ${faltantes}`);
  console.log(resultado.vaga.exibirResumoCompleto());
}

// ============================================================
// RF12 - CALLBACK: Funcao que recebe outra funcao como parametro
// ============================================================

function finalizarAnalise(nomeCandidato, callback) {
  console.log("\n==========================================");
  console.log("Analise finalizada para: " + nomeCandidato);
  console.log("==========================================");
  callback(nomeCandidato);
}

function exibirMensagemFinal(nome) {
  console.log(`\n${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`);
  console.log("Boa sorte nas candidaturas!");
}

// ============================================================
// RF14 - PROMISE: Simular carregamento de vagas de um servidor
// Representa a arquitetura cliente-servidor de forma assincrona
// ============================================================

function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}

// ============================================================
// RF14 - ASYNC/AWAIT: Funcao principal do sistema
// Utiliza await para esperar o retorno da Promise antes de continuar
// ============================================================

async function iniciarSistema() {
  console.log("============================================================");
  console.log("  SKILLMATCH JS - Simulador de Compatibilidade com Vagas    ");
  console.log("  Front-End Junior                                           ");
  console.log("============================================================");
  console.log(`\nConectando ao servidor e buscando vagas para: ${candidato.nome}...`);

  // await pausa a execucao ate que a Promise seja resolvida
  const vagasCarregadas = await buscarVagasSimuladas();
  console.log(`${vagasCarregadas.length} vagas carregadas com sucesso!\n`);

  console.log("=== PERFIL DO CANDIDATO ===");
  console.log(`Nome:           ${candidato.nome}`);
  console.log(`Area:           ${candidato.area}`);
  console.log(`Experiencia:    ${candidato.experienciaMeses} mes(es)`);
  console.log(`Habilidades:    ${candidato.habilidades.join(", ")}`);

  // RF08 - map: analisa todas as vagas e retorna array de resultados
  const resultados = analisarTodasVagas(candidato, vagasCarregadas);

  console.log("\n=== ANALISE DE COMPATIBILIDADE COM TODAS AS VAGAS ===");

  resultados.forEach(resultado => {
    exibirResultadoAnalise(resultado);
    exibirHabilidadesFaltantes(resultado);
  });

  // RF08 - find: demonstracao de busca de vaga especifica
  console.log("\n=== BUSCA DE VAGA ESPECIFICA (find) ===");
  const vagaEncontrada = buscarVagaPorEmpresa(vagasCarregadas, "TechStart");
  if (vagaEncontrada !== undefined) {
    console.log(`Vaga encontrada: ${vagaEncontrada.exibirResumo()}`);
  } else {
    console.log("Vaga nao encontrada.");
  }

  // RF06 - Melhor vaga (reduce)
  const melhorVaga = encontrarMelhorVaga(resultados);
  console.log("\n=== VAGA MAIS COMPATIVEL ===");
  console.log(`Empresa:         ${melhorVaga.vaga.empresa}`);
  console.log(`Cargo:           ${melhorVaga.vaga.cargo}`);
  console.log(`Compatibilidade: ${melhorVaga.percentual}%`);
  console.log(`Classificacao:   ${melhorVaga.classificacao}`);

  // RF07 - Recomendacao de estudo
  console.log("\n=== RECOMENDACAO DE ESTUDO ===");
  console.log(gerarRecomendacaoDeEstudo(resultados));

  // RF12 - Callback: mensagem final com nome do candidato
  finalizarAnalise(candidato.nome, exibirMensagemFinal);
}

// Inicia o sistema
iniciarSistema();
