const A = [3, 5, 6, 2, 4, 1];

for (let i = 0; i < A.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < A.length; j++) {
    if (A[j] < A[minIndex]) {
      minIndex = j;
    }
  }
  let aux = A[i];
  A[i] = A[minIndex];
  A[minIndex] = aux;
}

console.log(A);