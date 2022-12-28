import MutantDetector from "./isMutant.js";

test("Invalid Characters", () => {
  const seq = [ "MAATG", "CAG", "TTA" ]
  const result = new MutantDetector(seq).detectIsMutant();
  expect(result).toBe('Invalid Character');
});

test("Invalid Sequence", () => {
  const seq = [ "ATG", "CAG", "TTA" ]
  const result = new MutantDetector(seq).detectIsMutant();
  expect(result).toBe('Invalid Sequence');
});

test("Return true if the dna is mutant", () => {
  const seq = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
  const result = new MutantDetector(seq).detectIsMutant();
  expect(result).toBe(true);
});

test("Return false if the dna is non-mutant", () => {
  const seq = ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"];
  const result = new MutantDetector(seq).detectIsMutant();
  expect(result).toBe(false);
});
