import { describe, expectTypeOf, it } from "vitest";
import { a } from "../index.js";

describe("it works", () => {
  it("works", () => {
    expectTypeOf(a).toEqualTypeOf(0);
  });
});
