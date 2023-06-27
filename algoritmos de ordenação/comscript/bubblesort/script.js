function bubbleSort(arr) {
    const passos = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          passos.push([...arr]);
        }
      }
    }
    passos.push([...arr]);
    return passos;
  }
  
  const array = Array.from({ length: 21 }, (_, i) => 20 - i);
  const originalElement = document.getElementById("original");
  originalElement.textContent = array.join(", ");
  
  const passos = bubbleSort(array);
  const passosElement = document.getElementById("passos");
  for (let i = 0; i < passos.length; i++) {
    passosElement.innerHTML += `<p>${i + 1}. [${passos[i].join(", ")}]</p>`;
  }
  
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = passos[passos.length - 1].join(", ");
  