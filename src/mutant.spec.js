import isMutant from "./isMutant.js";

test("isMutant function should return false for non-mutants", () => {
  expect(
    isMutant(["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", " GCGTCA", " TCACTG"]) // humano
  ).toBe(false);
});

test("isMutant function should return true for mutants with horizontal sequences", () => {
  expect(
    isMutant(["ATGCGA", "CAGTGC", "TTATGT", "AGACGG", "CCCCTA", "TCACTG"]) // mutante
  ).toBe(true);
});

test("isMutant function should return true for mutants with vertical sequences", () => {
  expect(
    isMutant(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"])
  ).toBe(true);
});

test("isMutant function should return true for mutants with diagonal sequences", () => {
  expect(
    isMutant(["ATGCGA", "CAGTGC", "TTATGT", "AGACGG", "CCTCTA", "TCACTG"])
  ).toBe(true);
});

test("isMutant function should return true for mutants with multiple sequences este es de esto", () => {
  expect(
    isMutant(["ATGCGA", "CAGTGC", "TTATTT", "AGAAGG", "CCTCTA", "TCACTG"])
  ).toBe(true);
});

test("isMutant from the test", () => {
  expect(
    isMutant(["ATGCGA", "CAGTGC", "TTATTT", "AGAAGG", "CCTCTA", "TCACTG"])
  ).toBe(true);
});

test("isMutant function should return false for invalid DNA tables", () => {
  expect(
    isMutant(["ATGCGA", "CAGTGC", "TTATGT", "AGACG", "CCCCTA", "TCACTG"])
  ).toBe(false);
  expect(
    isMutant(["ATGCGA", "CAGTGC", "TTATGT", "AGAXGG", "CCCCTA", "TCACTG"])
  ).toBe(false);
  expect(isMutant(["ATGCGA", "CAGTGC", "TTATGT", "", "CCCCTA", "TCACTG"])).toBe(
    false
  );
  expect(isMutant(["ATGCGA", "CAGTGC", "TTATGT"])).toBe(false);
});