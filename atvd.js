// Classe pai - Funcionario
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    // Método para calcular o salário 
    calcularSalario() {
      return this.salario;
    }
  
    // Método para exibir informações do funcionário
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
    }
  }
  
  // Classe filha - Vendedor
  class Vendedor extends Funcionario {
    constructor(nome, salario, vendas) {
      super(nome, salario); // Chama o construtor da classe pai
      this.vendas = vendas; // Número de vendas realizadas
      this.comissao = 0.05; // Comissão de 5% no total de vendas
    }
  
    // calcular o salário com comissão
    calcularSalario() {
      const salarioComComissao = this.salario + (this.vendas * this.comissao);
      return salarioComComissao;
    }
  
    // Exibir informações do vendedor
    exibirInformacoes() {
      super.exibirInformacoes(); // Chama o método da classe pai
      console.log(`Vendas realizadas: ${this.vendas}`);
      console.log(`Salário com comissão: R$ ${this.calcularSalario().toFixed(2)}`);
    }
  }
  
  // Classe filha - Gerente
  class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
      super(nome, salario); // Chama o construtor da classe pai
      this.bonus = bonus; // Bônus extra do gerente
    }
  
    // Método para calcular o salário com bônus
    calcularSalario() {
      const salarioComBonus = this.salario + this.bonus;
      return salarioComBonus;
    }
  
    // Exibir informações do gerente
    exibirInformacoes() {
      super.exibirInformacoes(); // Chama o método da classe pai
      console.log(`Bônus: R$ ${this.bonus.toFixed(2)}`);
      console.log(`Salário com bônus: R$ ${this.calcularSalario().toFixed(2)}`);
    }
  }
  
  // Exemplo de uso do sistema:
  
  // Criando um vendedor
  const vendedor = new Vendedor("Carlos", 2500, 20000);
  vendedor.exibirInformacoes();
  
  // Criando um gerente
  const gerente = new Gerente("Ana", 5000, 2000);
  gerente.exibirInformacoes();
  