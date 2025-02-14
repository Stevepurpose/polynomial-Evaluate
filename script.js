let polynomial = [];

function setupDOM() {
  let toSub = document.getElementById("toSub");
  let toPushA = document.getElementById("toPush");
  let choices = document.querySelector(".choices");
  let to_read = document.getElementById("to_read");

  choices.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      switch (e.target.id) {
        case "but1":
          let coefficient = parseInt(toPushA.value);
          polynomial.push(coefficient);
          to_read.innerHTML = `${coefficient} is added `;
          toPushA.value = "";
          break;

        case "but2":
          to_read.innerHTML = "Coefficients of powers of x are:<br/>" + polynomial.join(" ");
          break;

        case "but3":
          let unknown = parseInt(toSub.value);
          let result = polynomial.reduce((acc, coeff, index) => acc * unknown + coeff, 0);
          to_read.innerHTML = `The sum of the polynomial is: ${result}`;
          break;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", setupDOM);

module.exports = { polynomial };