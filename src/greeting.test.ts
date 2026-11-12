import assert from "node:assert/strict";
import { test } from "node:test";

import { greeting } from "./greeting.ts";

test("greets a person by name", () => {
  assert.equal(greeting("Ada"), "Hello, Ada!");
});

test("ignores spaces around the name", () => {
  assert.equal(greeting("  Ada  "), "Hello, Ada!");
});

test("greets nobody in particular when the name is empty", () => {
  assert.equal(greeting(""), "Hello!");
});
