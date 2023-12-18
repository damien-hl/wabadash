// CSS
import "@fontsource/nunito-sans/200.css";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";

import "./tailwind.css";

setYear(document.getElementById("year"), new Date().getFullYear());

export function setYear(
  element: HTMLElement | null,
  year: number
) {
  if (element === null) return;
  element.innerText = year.toString();
}
