(() => {
  const readline = require("readline");
  const { stdin } = require("process");
  const rl = readline.createInterface({ input: stdin });
  // const inputs = [];
  rl.on("line", (input) => {
    if (input === "") {
      // main(inputs);
      return rl.close();
    }
    main([input]);
    // inputs.push(input);
  });
})();

/** @param {string[]} inputs */
function main(inputs) {
  const [m, n] = inputs[0].split(/\s+/).map(Number);
  console.log(towerOfHanoi(m, n));
}

/**
 * @param {number} m number of pegs
 * @param {number} n number of disks
 * @returns {number} number of optimal moves
 */
function towerOfHanoi(m, n) {
  const MAX_PEGS = 64;
  const MAX_DISKS = 64;
  /** @type {number[][]} */
  const optimalMoves = [...Array(MAX_DISKS)].map(() =>
    [...Array(MAX_PEGS)].map(() => 0),
  );
  optimalMoves[0] = [...Array(MAX_PEGS)].map(() => 1);
  [...Array(MAX_DISKS - 1)]
    .map((_, i) => i + 1)
    .forEach((i) => {
      optimalMoves[i][2] = optimalMoves[i - 1][2] * 2 + 1;
    });
  for (let i = 1; i < MAX_DISKS; i++) {
    for (let j = 3; j < MAX_PEGS; j++) {
      if (i <= j - 1) {
        optimalMoves[i][j] = 2 * (i + 1) - 1;
      } else {
        optimalMoves[i][j] = optimalMoves[i][j - 1];
        for (let k = 0; k <= i - 1; k++) {
          optimalMoves[i][j] = Math.min(
            optimalMoves[i][j],
            optimalMoves[i - k - 1][j - 1] + optimalMoves[k][j] * 2,
          );
        }
      }
    }
  }

  return optimalMoves[n - 1][m - 1];
}
