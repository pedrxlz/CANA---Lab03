const fibonacci_1 = (n) => {
  console.log(n);
  if (n <= 1) return n;
  else return fibonacci_1(n - 1) + fibonacci_1(n - 2);
};

const fibonacci_2 = (n, memo = {}) => {
  console.log(n);
  if (memo[n]) return memo[n];

  if (n <= 1) memo[n] = n;
  else memo[n] = fibonacci_2(n - 1, memo) + fibonacci_2(n - 2, memo);

  return memo[n];
};

const fibonacci_3 = (n) => {
  console.log(n);
  if (n <= 1) return n;

  const vetor = new Array(n + 1);
  vetor[0] = 0;
  vetor[1] = 1;

  for (let i = 2; i <= n; i++) vetor[i] = vetor[i - 1] + vetor[i - 2];

  return vetor[n];
};

const fibonacci_4 = (n) => {
  const phi = (1 + Math.sqrt(5)) / 2;
  console.log({ phi });
  const resultado = (Math.pow(phi, n) - Math.pow(1 - phi, n)) / Math.sqrt(5);
  console.log({ resultado });
  return Math.round(resultado);
};
