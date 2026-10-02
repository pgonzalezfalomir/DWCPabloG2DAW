const A = [5, 2, 4, 9, 3, 7]

for (let i = 0; i < A.length - 1; i++) {
  for (let j = 0; j < A.length - 1 - i; j++) {
    if (A[j] > A[j+1]) {
      let aux = A[j];
      A[j] = A[j+1];
      A[j+1] = aux;
    }
  }
}

console.log(A)