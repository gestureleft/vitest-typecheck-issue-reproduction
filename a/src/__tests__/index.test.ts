import { describe, it, expect } from "vitest";
import { a } from "../index.js";

describe("a", () => {
  it("does the thing", () => {
    expect(a()).toBe("a");
  });
});
