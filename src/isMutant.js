const isMutant = (dna) => {
  let count = 0;
  const regex = /(A{4}|T{4}|C{4}|G{4})/gi;
  for (let i = 0; i < dna.length; i++) {
    if (dna[i].length !== dna.length) {
      return false;
    }
    let matches = dna[i].match(regex);
    if (matches) {
      count += matches.length;
    }
    for (let j = 0; j < dna[i].length; j++) {
      if (
        dna[i][j] !== "A" &&
        dna[i][j] !== "T" &&
        dna[i][j] !== "C" &&
        dna[i][j] !== "G"
      ) {
        return false;
      }
      let column = "";
      for (let k = 0; k < dna.length; k++) {
        column += dna[k][j];
      }
      matches = column.match(regex);
      if (matches) {
        count += matches.length;
      }
    }
  }
  for (let i = 0; i < dna.length; i++) {
    for (let j = 0; j < dna[i].length; j++) {
      if (
        i > 2 &&
        j < dna[i].length - 3 &&
        dna[i][j] === dna[i - 1][j + 1] &&
        dna[i - 1][j + 1] === dna[i - 2][j + 2] &&
        dna[i - 2][j + 2] === dna[i - 3][j + 3]
      ) {
        count++;
      }
      // Comprobamos si hay una secuencia de cuatro letras iguales en diagonal hacia arriba a la izquierda
      if (
        i > 2 &&
        j > 2 &&
        dna[i][j] === dna[i - 1][j - 1] &&
        dna[i - 1][j - 1] === dna[i - 2][j - 2] &&
        dna[i - 2][j - 2] === dna[i - 3][j - 3]
      ) {
        count++;
      }

      // Comprobamos si hay una secuencia de cuatro letras iguales en diagonal hacia abajo a la derecha
      if (
        i < dna.length - 3 &&
        j < dna[i].length - 3 &&
        dna[i][j] === dna[i + 1][j + 1] &&
        dna[i + 1][j + 1] === dna[i + 2][j + 2] &&
        dna[i + 2][j + 2] === dna[i + 3][j + 3]
      ) {
        count++;
      }
      // Comprobamos si hay una secuencia de cuatro letras iguales en diagonal hacia abajo a la izquierda
      if (
        i < dna.length - 3 &&
        j > 2 &&
        dna[i][j] === dna[i + 1][j - 1] &&
        dna[i + 1][j - 1] === dna[i + 2][j - 2] &&
        dna[i + 2][j - 2] === dna[i + 3][j - 3]
      ) {
        count++;
      }
    }
  }
  // Devolvemos true si encontramos dos o más secuencias de cuatro letras iguales, false en caso contrario
  return count >= 2;
};
  
export default isMutant;
  