for (let i = 2; i <= 50; i += 2) {
  if ((i % 3) === 0) {
    continue
  }
  if (i >= 40) {
    break
  }
  console.log(i)
}