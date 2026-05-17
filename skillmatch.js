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
  // RF08 - filter: retorna apenas os requisitos que o candidato possui
  const habilidadesEncontradas = vaga.requisitos.filter(req =>
    candidatoParam.habilidades.includes(req)
  );

  // RF08 - filter: retorna apenas os requisitos que o candidato NAO possui
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
// RF05 - LISTAR HABILIDADES FALTANTES por vaga
// Usa for...of para percorrer a lista de habilidades
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
// Usa for e operadores logicos para montar a lista unica de habilidades
// ============================================================

function gerarRecomendacaoDeEstudo(resultados) {
  const todasFaltantes = [];

  // for classico para percorrer todos os resultados
  for (let i = 0; i < resultados.length; i++) {
    const faltantes = resultados[i].habilidadesFaltantes;

    // for classico para percorrer habilidades faltantes de cada vaga
    for (let j = 0; j < faltantes.length; j++) {
      // Operador logico && para adicionar apenas se ainda nao estiver na lista
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

console.log("Funcoes de calculo carregadas com sucesso!");
