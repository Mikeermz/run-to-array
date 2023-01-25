class MutantDetector {
  constructor(seq) {
    this.minSize = 4;
    this.seq = seq.map(element => element.toUpperCase());
    this.isValidSeq = this.validateSeq();
    this.isValidSeqSize = this.validateSeqSize();
    this.numMutantSeq = 0;
    this.minMutantSeq = 2;
    this.isMutant = false;
    this.mutantSeq = new Set(['AAAA', 'TTTT', 'CCCC', 'GGGG']);
    this.visitedSeq = new Set();
  }

  validateSeq() {
    const regex = /^[ATCG]+$/;
    let validate = true

    for (const element of this.seq) {
      if (!regex.test(element)) {
        validate = false
        break;
      }
    }

    return validate
  }

  validateSeqSize() {
    const colSize = this.seq.length;
    const rowSize = colSize > 0 ? this.seq[0].length : 0;
    
    return colSize >= this.minSize && rowSize >= this.minSize;
  }

  getHorizontalSubSeq(row, colS, colE) {
    const subSeq = this.seq[row].substring(colS, colE + 1);
    return subSeq;
  }

  getVerticalSubSeq(col, rowS, rowE) {
    const subSeq = [];

    for (let row = rowS; row <= rowE; row++) {
      subSeq.push(this.seq[row][col]);
    }

    return subSeq.join('');
  }

  getDiagonalSubSeq(rowS, rowE, colS, colE) {
    const subSeq = [];
    const colStep = rowS > rowE ? -1 : 1;

    let row = rowS;
    let col = colS;

    while (row <= rowE && (col >= colE || col <= colE)) {
      subSeq.push(this.seq[row][col]);

      row += 1;
      col += colStep;
    }

    return subSeq.join('');
  }

  getSubSeq(rowS, rowE, colS, colE) {
    if (rowS === rowE) {
      return this.getHorizontalSubSeq(rowS, colS, colE);
    } else if (colS === colE) {
      return this.getVerticalSubSeq(colS, rowS, rowE);
    } else {
      return this.getDiagonalSubSeq(rowS, rowE, colS, colE);
    }
  }

  detectSubSeqMutant(subseq) {
    if (this.mutantSeq.has(subseq)) {
      this.numMutantSeq += 1;
      this.isMutant = this.numMutantSeq >= this.minMutantSeq;
    }
  }

  validateSubSeqs(row, col) {
    const lastRow = row + this.minSize - 1;
    const lastCol = col + this.minSize - 1;

    const subseqs = [
      [row, row, col, lastCol], // Top horizontal
      [row, lastRow, col, col], // Left vertical
      [row, lastRow, col, lastCol], // Diagonal top to bottom
      [row, lastRow, lastCol, col], // Diagonal bottom to top
      [lastRow, lastRow, col, lastCol], // Bottom horizontal
      [row, lastRow, lastCol, lastCol], // Right vertical
    ];

    for (let i = 0; i < subseqs.length; i += 1) {
      const seq = subseqs[i].join('');
      if (this.visitedSeq.has(seq)) {
        continue;
      } else {
        this.visitedSeq.add(seq);
      }

      const [row, lastRow, col, lastCol] = subseqs[i];

      if (lastRow >= this.seq.length || lastCol > this.seq[0].length) {
        continue;
      }

      const subseq = this.getSubSeq(
        row,
        lastRow,
        col,
        lastCol,
      );
      this.detectSubSeqMutant(subseq);

      if (this.isMutant) break;
    }
  }

  detectIsMutant() {
    if (!this.isValidSeq) return 'Invalid Character';
    if (!this.isValidSeqSize) return 'Invalid Sequence';

    for (let row = 0; row < this.seq.length; row += 1) {
      if (this.isMutant) break;

      for (let col = 0; col < this.seq[0].length; col += 1) {
        if (this.isMutant) break;
        this.validateSubSeqs(row, col);
      }
    }

    return this.isMutant;
  }
}

const tests = [
  {
    id: 0,
    seq: [
      "ATG",
      "CAG",
      "TTA",
    ],
    expected: false,
  },
  {
    id: 1,
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "AGAAGG",
      "CCCCTA",
      "TCACTG",
    ],
    expected: true,
  },
  {
    id: 2,
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATTT",
      "AGACGG",
      "GCGTCA",
      "TCACTG"
    ],
    expected: false,
  },
  {
    id: 3,
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "AGACGG",
      "CCCCTA",
      "TCACTG",
    ],
    expected: true,
  },
  {
    id: 4,
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "AGAAGG",
      "CCCCTA",
      "TCACTG",
    ],
    expected: true,
  },
  {
    id: 5,
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATTT",
      "AGAAGG",
      "CCTCTA",
      "TCACTG",
    ],
    expected: false,
  },
  {
    id: 6,
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "AGACGA",
      "CCCCTA",
      "TCACTG",
    ],
    expected: true,
  },
  {
    id: 7, 
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "AGAXGG",
      "CCCCTA",
      "TCACTG",
    ],
    expected: true,
  },
  {
    id: 8,
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "",
      "CCCCTA",
      "TCACTG",
    ],
    expected: false,
  },
  {
    id: 9,
    seq: [
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
    ],
    expected: false,
  },
  {
    id: 10,
    seq: [
      "BNZALAK",
      "CAGTGC",
      "TTATGT",
      "AGAAGG",
      "CCCCTA",
      "TCACTG",
    ],
    expected: true,
  }
];

for (let testIdx = 0; testIdx < tests.length; testIdx += 1) {
  const result = new MutantDetector(tests[testIdx].seq).detectIsMutant();
  console.log(result)
  console.log(testIdx, ' - ', result === tests[testIdx].expected);
}

// const mikee = new MutantDetector([
//   "AAGTGC", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTX", "TCACTG"
// ]);

// console.log(mikee.detectIsMutant())