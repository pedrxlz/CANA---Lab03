// Algoritmos desenvolvidos para a disciplina de Construção e Análise de Algoritmos

// Algoritmos de Ordenação

// BubbleSort

const bubbleSort = (vetor) => {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        const aux = vetor[j];
        vetor[j] = vetor[j + 1];
        console.log(vetor);
        vetor[j + 1] = aux;
        console.log(vetor);
      }
    }
  }
  return vetor;
};

// SelectionSort

const selectionSort = (vetor) => {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (vetor[j] < vetor[min]) {
        min = j;
      }
    }
    const aux = vetor[min];
    vetor[min] = vetor[i];
    console.log(vetor);
    vetor[i] = aux;
    console.log(vetor);
  }
  return vetor;
};

// MergeSort

const mergeSort = (vetor) => {
  if (vetor.length <= 1) {
    return vetor;
  }
  const meio = Math.floor(vetor.length / 2);
  const esquerda = vetor.slice(0, meio);
  console.log({ esquerda });
  const direita = vetor.slice(meio);
  console.log({ direita });
  return merge(MergeSort(esquerda), MergeSort(direita));
};

const merge = (esquerda, direita) => {
  const resultado = [];
  let indexEsquerda = 0;
  let indexDireita = 0;
  while (indexEsquerda < esquerda.length && indexDireita < direita.length) {
    if (esquerda[indexEsquerda] < direita[indexDireita]) {
      resultado.push(esquerda[indexEsquerda]);
      console.log(resultado);
      indexEsquerda++;
    } else {
      resultado.push(direita[indexDireita]);
      console.log(resultado);
      indexDireita++;
    }
  }
  return resultado
    .concat(esquerda.slice(indexEsquerda))
    .concat(direita.slice(indexDireita));
};
