export const doubles = (dominoes: number[][] = []): number => {
  let count: number = 0;

  for (const domino of dominoes) {
    if (domino[0] === domino[1]) {
      count += 1;
    }
  }
  return count;
};

export const sortAsc = (dominoes: number[][] = []): number[][] => {
  const asc = dominoes.sort((a, b) => {
    const totalA = a[0] + a[1];
    const totalB = b[0] + b[1];

    if (totalA - totalB === 0) {
      return a[0] - b[0];
    }
    return totalA - totalB;
  });
  return [...asc];
};

export const sortDesc = (dominoes: number[][] = []): number[][] => {
  const desc = dominoes.sort((a, b) => {
    const totalA = a[0] + a[1];
    const totalB = b[0] + b[1];

    if (totalB - totalA === 0) {
      return b[0] - a[0];
    }
    return -totalA;
  });
  return [...desc];
};

export const removeDupes = (dominoes: number[][] = []): number[][] => {
  const res = [];
  const removed = [];

  for (let i = 0; i < dominoes.length; i++) {
    const domino = dominoes[i];
    for (let j = 0; j < dominoes.length; j++) {
      if (i !== j) {
        const check = dominoes[j];

        if (
          (domino[0] == check[0] && domino[1] == check[1]) ||
          (domino[0] == check[1] && domino[1] == check[0])
        )
          removed.push(i);
      }
      
    }
  }

  for (let i = 0; i < dominoes.length; i++) {
    if (!removed.includes(i)) {
      res.push(dominoes[i]);
    }
  }

  return [...res];
};
export const flip = (dominoes: number[][] = []): number[][] => {
  const result = dominoes.map((domino) => [domino[1], domino[0]]);
  return result;
};
export const removeData = (
  dominoes: number[][] = [],
  num: number
): number[][] => {
  for (let i = dominoes.length - 1; i >= 0; i--) {
    const total = dominoes[i][0] + dominoes[i][1];
    if (total === Number(num)) {
      dominoes.splice(i, 1);
    }
  }
  return [...dominoes];
};