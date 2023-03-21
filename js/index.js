import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { clearBtn, handleBtnPress, handleKeyPress } from "./keyHandles.js";
import themeSwitcher from "./themeSwitcher.js";

document.querySelectorAll(".charKey").forEach(function (btnCharKey) {
  btnCharKey.addEventListener("click", handleBtnPress);
});

document.getElementById("clear").addEventListener("click", clearBtn);

input.addEventListener("keydown", handleKeyPress);

document.getElementById("equal").addEventListener("click", calculate);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
