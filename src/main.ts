// CSS
import "@fontsource/nunito-sans/200.css";
import "@fontsource/nunito-sans/400.css";
import "normalize.css";

import "./main.css";

// Show email after DOM loaded
window.addEventListener("DOMContentLoaded", () => {
  setEmail(
    <HTMLElement>document.getElementById("email"),
    "damienheulin87@gmail.com",
  );
  setYear(
    <HTMLElement>document.getElementById("year"),
    new Date().getFullYear(),
  );
});

/**
 * Set the reel email inside the a tag
 * @param {HTMLElement} link
 * @param {string} email
 */
export function setEmail(link: HTMLElement, email: string) {
  link.setAttribute("href", `mailto:${email}`);
}

/**
 * Set the current year
 * @param {HTMLElement} element
 * @param {number} year
 */
export function setYear(element: HTMLElement, year: number) {
  element.innerText = year.toString();
}
