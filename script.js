const aluno = [
    {
    nome: "Carlos",
    notaPrimeiraProva: 7,
    notaSegundaProva: 8,
    },

    {
    nome: "Pedro",
    notaPrimeiraProva: 6,
    notaSegundaProva: 9,
    },

    {nome: "Anderson",
    notaPrimeiraProva: 8,
    notaSegundaProva: 9,
    },

    {nome: "Ricardo",
    notaPrimeiraProva: 3,
    notaSegundaProva: 6,
    },
]

function calculaMedia(notaPrimeiraProva, notaSegundaProva) {
    const media = (notaPrimeiraProva + notaSegundaProva)/2
    return media;
}

 for (i=0; i<aluno.length; i++)
{
    let mediaTotal = calculaMedia(aluno[i].notaPrimeiraProva, aluno[i].notaSegundaProva)

    if (mediaTotal > 7)
    {
        alert('A média do(a) aluno(a) '+aluno[i].nome+ ' é ' +mediaTotal+  
        ' \nParabéns '+aluno[i].nome+ ' Você foi aprovado no concurso! ')

    }
    else 
    {
        alert('A média do(a) aluno(a) '+aluno[i].nome+ ' é ' +mediaTotal+' \nNão foi dessa vez '+aluno[i].nome+ ' Tente novamente! ')
    }

}

