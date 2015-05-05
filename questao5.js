var Empregado = function(nome_, sobrenome_, salario_){
    var nome            = nome_;
    var sobrenome       = sobrenome_;
    var salarioMensal   = salario_;

    this.calcularSalarioAno = function(){
        return salarioMensal * 12;
    }

    this.dadosEmpregado = function(){
        return nome + " " + sobrenome + ", Salário: " + salarioMensal;
    }
};