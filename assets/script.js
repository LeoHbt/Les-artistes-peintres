let buttonPicasso = document.getElementById("buttonPicasso");
let buttonCaillebotte = document.getElementById("buttonCaillebotte");
let buttonVermeer = document.getElementById("buttonVermeer");
let buttonKadinsky = document.getElementById("buttonKadinsky");
let buttonMonet = document.getElementById("buttonMonet");
let buttonVanGogh = document.getElementById("buttonVanGogh");

document.querySelectorAll(".artist-names").forEach((element) => {
    element.addEventListener("click", () => {
        let artiste = element.innerHTML.replace(" ", "");
        let divArtiste = document.getElementById("div" + artiste);

        let allDivArtiste = document.querySelectorAll(".divPeintre");

        // Ajoute hidden a toutes les div artistes
        allDivArtiste.forEach((element) => {
            element.classList.add("hidden");
        });

        // retire hidden à la div souhaitée
        divArtiste.classList.remove("hidden");
    });
});
