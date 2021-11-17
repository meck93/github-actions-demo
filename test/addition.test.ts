import { asserts } from "../dev_dependencies.ts";
import { add } from "../src/addition.ts";

Deno.test("[Addition]: should add 1 + 1", () => {
  const expected = 2;
  const a = 1;
  const b = 1;
  asserts.assertEquals(add(a, b), expected);
});
