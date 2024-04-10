// Backend API
// Any native code should be here, e.g. calling databases or reading from the filesystem

import { runSQL } from "./api";

test.each([
  [
    "select model, cyl from mtcars where model='Mazda RX4 Wag'",
    [{ model: "Mazda RX4 Wag", cyl: BigInt(6) }],
  ],
  ["select model from mtcars where mpg > 33", "Toyota Corolla"],
  ["select cyl from mtcars where mpg > 33", BigInt(4)],
  ["select foo from baz", null]
])("query (%s)", async (query, expected) => {
  const res = await runSQL(query);
  expect(res).toEqual(expected);
});
