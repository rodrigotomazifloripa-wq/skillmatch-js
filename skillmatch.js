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

console.log("Dados carregados com sucesso!");
console.log("Candidato:", candidato.nome, "| Vagas disponiveis:", vagas.length);
