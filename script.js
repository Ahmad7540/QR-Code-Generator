let input = document.querySelector("input");
let img = document.querySelector("img");
let button = document.querySelector("button");

function qrGenerate(e) {
  if (input.value.length > 0) {
    url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
    img.src = url + input.value;
    img.style.visibility = "visible";
    img.style.display = "block";
  } else {
    img.style.visibility = "hidden";
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
}

button.addEventListener("click", qrGenerate);
