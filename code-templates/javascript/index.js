//@ts-check
const MOD = BigInt(1e9 + 7);

/**
 * @param {number} n
 * @param {number} m
 */
function legoBlocks(n, m) {
  /** @type {bigint[]} */
  const oneFloor = [0n, 1n, 2n, 4n, 8n];
  /** @type {bigint[]} */
  const dirtyMultiFloor = [0n];
  /** @type {bigint[]} */
  const cleanMultiFloor = [0n];

  for (let width = 1; width <= m; width++) {
    if (width > 4) {
      oneFloor[width] = oneFloor.slice(-4).reduce((p, c) => p + c) % MOD;
    }

    dirtyMultiFloor[width] = [...Array(n)].reduce(
      (p) => (p * oneFloor[width]) % MOD,
      1n,
    );

    cleanMultiFloor[width] = [...Array(width - 1)]
      .map((_, i) => i + 1)
      .reduce((p, i) => {
        return (
          p - ((cleanMultiFloor[i] * dirtyMultiFloor[width - i]) % MOD) + MOD
        );
      }, dirtyMultiFloor[width] + MOD);
  }

  return cleanMultiFloor[m] % MOD;
}

export default { legoBlocks };
