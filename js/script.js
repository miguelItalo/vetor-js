const btnMediaAluno = document.querySelector('.btn-media-aluno')
const btnMediaTurma= document.querySelector('.btn-media-turma')
let mediaAlunos = []
let nomeAlunos = []
let mediaTurma = []

btnMediaAluno.addEventListener('click', () => {
    const campoNome = document.querySelector('.nome')
    const campoNota1 = document.querySelector('.nota1')
    const campoNota2 = document.querySelector('.nota2')
    let respMediaAluno = document.querySelector('.resp-media-aluno')
    let estado = document.querySelector('.estado')
    let nome = document.querySelector('.nome').value
    let nota1 = +document.querySelector('.nota1').value
    let nota2 = +document.querySelector('.nota2').value
    let regex = /^\d+$/
    let test1 = regex.test(nota1)
    let test2 = regex.test(nota2)

    
    if(test1 != true || test2 != true){
        alert('Digite um valor valido')    
    }
    else{
        if(nota1 > 10 || nota1 == '' || nota2 > 10 || nota2 == ''){
            alert('Digite um valor menor que 10')
        }
        else{
            let media = (nota1 + nota2) / 2
            mediaAlunos.push(media)
            respMediaAluno.innerText = `Média da final ${media}`
            
            if(media >= 7){
                estado.innerText = `Parabéns ${nome}! Você foi aprovado(a)!`
                estado.style.color = 'blue'
            }
            else if(media < 7 && media >= 3){
                estado.innerText = `Atenção ${nome}, você está em recuperação`
                estado.style.color = 'green'
            }
            else{
                estado.innerText = `“Ops ${nome}, você foi reprovado`
                estado.style.color = 'red'
            }
        }
    }

    campoNome.value = ''
    campoNota1.value = ''
    campoNota2.value = ''
    
})

btnMediaTurma.addEventListener('click', () => {
    let respMediaTurma = document.querySelector('.resp-media-turma')
    mediaTurma = mediaAlunos.reduce((num, soma) => num + soma)
    console.log(mediaTurma)
    let mediaDaTurmaDef = mediaTurma / mediaAlunos.length
    respMediaTurma.innerText = `A média da turma ${mediaDaTurmaDef.toFixed(2)}`
})
