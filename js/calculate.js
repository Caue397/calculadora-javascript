export default function () {
  const resultInput = document.getElementById("result");
  if (input.value) {
    resultInput.value = "ERROR";
    resultInput.classList.add("error");
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove("error");
  } else {
    resultInput.value = "ERROR";
    resultInput.classList.add("error");
  }
}
