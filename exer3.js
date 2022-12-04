// 3 - Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre
// da faculdade, calcule e imprima sua média e a sua classificação conforme tabela abaixo:

class Aluno{
        nome
        nota1
        nota2
        nota3

        constructor(nome, nota1, nota2, nota3) {
            this.nome = nome
            this.nota1 = nota1
            this.nota2 = nota2
            this.nota3 = nota3
        }

        calcularMedia() {
            return (this.nota1 + this.nota2 + this.nota3) / 3
        }

        descreverSituacao() {
            const media = this.calcularMedia()

            if(media < 5) {
                return 'Reprovado'
            } else if(media >= 5 && media <= 7){
                return 'Recuperacão'
            } else {
                return 'Aprovado'
            }
        }
}

const aluno = new Aluno('João', 10, 7, 9)
// console.log(aluno.calcularMedia().toFixed(1))
// console.log(aluno.descreverSituacao())

console.log('Aluno: ' + aluno.nome + ' Media Final: '
 +  aluno.calcularMedia().toFixed(1) + ' Situação: ' 
 + aluno.descreverSituacao())