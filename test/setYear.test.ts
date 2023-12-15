import { setYear } from "../src/main";

describe("setYear test suite", () => {
  test("current year is set", () => {
    const span = document.createElement("span");
    const year = new Date().getFullYear();

    setYear(span, year);

    expect(span.innerText).toBe(year.toString());
  });
});
