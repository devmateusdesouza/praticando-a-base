function selectionSort(arr) {
    const passos = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        passos.push([...arr]);
      }
    }
    passos.push([...arr]);
    return passos;
  }
  
  const array = Array.from({ length: 21 }, (_, i) => 20 - i);
  const originalElement = document.getElementById("original");
  originalElement.textContent = array.join(", ");
  
  const passos = selectionSort(array);
  const passosElement = document.getElementById("passos");
  for (let i = 0; i < passos.length; i++) {
    passosElement.innerHTML += `<p>${i + 1}. [${passos[i].join(", ")}]</p>`;
  }
  
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = passos[passos.length - 1].join(", ");
  