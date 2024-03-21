/*Declare as seguintes propriedades (variáveis) em uma classe aluno (nome, idade e peso), instancie um
objeto com seu nome. Depois acesse e altere os valores correspondentes aos seus tipos: nome(string),
idade(inteiro), peso(double). Apresente na console o conteúdo de cada propriedade do objeto.
*/
class Aluno {
  constructor(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
  }
}

function criarAluno(nome, idade, peso) {
  return new Aluno("Augusto", 21, 51);
}

function exibirAluno(aluno) {
  console.log("Dados do Aluno:");
  console.log("Nome:", aluno.nome);
  console.log("Idade:", aluno.idade);
  console.log("Peso:", aluno.peso);
}

const meuAluno = criarAluno("Seu Nome", 20, 70.5);

exibirAluno(meuAluno);
