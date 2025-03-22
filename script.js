let carré = document.querySelectorAll(".main div");
for (let ele of carré) {
    ele.onclick = function () {
        let symbole = document.querySelector("#turn span");
        if (this.textContent == "") {
            this.textContent = symbole.textContent;
        }
        this.style.display = "grid";
        this.style.placeItems = "center";
        this.style.height = "100vh;"
        this.style.fontSize = "35px";
        for (let i = 0; i < carré.length; i++) {
            if ((i == 0 || i == 3 || i == 6) && carré[i].textContent == carré[i + 1].textContent && carré[i + 1].textContent == carré[i + 2].textContent && carré[i].textContent != "") {
                alert(`${symbole.textContent} is win`)
            }
            else if ((i == 0 || i == 1 || i == 2) && carré[i].textContent == carré[i + 3].textContent && carré[i + 3].textContent == carré[i + 6].textContent && carré[i].textContent != "") {
                alert(`${symbole.textContent} is win`)
            }
            else if (i == 2 && carré[i].textContent == carré[i + 2].textContent && carré[i + 2].textContent == carré[i + 4].textContent && carré[i].textContent != "") {
                alert(`${symbole.textContent} is win`)
            }
            else if (i == 0 && carré[i].textContent == carré[i + 4].textContent && carré[i + 4].textContent == carré[i + 8].textContent && carré[i].textContent != "") {
                alert(`${symbole.textContent} is win`)
            }
        }
        if (symbole.textContent == "x") {
            symbole.textContent = "o"
        } else {
            symbole.textContent = "x"
        }
    }
}
function reset() {
    for (let i = 0; i < carré.length; i++) {
        carré[i].textContent = "";
    }
}
let BtnReset = document.getElementById("reset");
BtnReset.addEventListener("click", reset);