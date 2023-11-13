import fs from "fs";
import { describe, expect, test } from "bun:test";
import main from ".";

const input = fs.readFileSync("./input.txt").toString().trim();
const output = fs.readFileSync("./output.txt").toString().trim();
const [q, ...ins] = input.split("\n");
const outs = output.split("\n");

describe("Test with bun", () => {
  [...Array(Number(q))].forEach((_, i) => {
    // {{{ Change here
    test(["Check", `in: ${ins[i]}`, `out: ${outs[i]}`].join("\n"), () => {
      const [n, m] = ins[i].split(" ");
      const a = main.legoBlocks(Number(n), Number(m)).toString();
      const b = outs[i].toString();
      expect(a).toBe(b);
    });
    // }}}
  });
});
