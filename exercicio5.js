const buscaForcaBruta = (vetor, elemento) => {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === elemento) {
      console.log(`vetor[${i}] = ${elemento}? ${vetor[i] === elemento}`);
      return i;
    }
  }
};

const buscaDivisaoConquista = (vetor, elemento) => {
  let inicio = 0;
  let fim = vetor.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (vetor[meio] === elemento) {
      return vetor[meio];
    } else if (vetor[meio] < elemento) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }
};

const buscaGulosa = (vetor, elemento) => {
  let indice = 0;

  while (indice < vetor.length && vetor[indice] < elemento) {
    indice++;
  }

  if (indice < vetor.length && vetor[indice] === elemento) {
    return indice;
  }
};
