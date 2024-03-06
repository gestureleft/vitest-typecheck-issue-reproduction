import { describe, it, expect } from "vitest";
import { b } from "../index.js";

describe("b", () => {
  it("does the thing", () => {
    expect(b()).toBe("b");
  });
});
