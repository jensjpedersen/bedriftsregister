// import { kommunenummer } from "./data/kommunenummer.mjs";
// console.log(Object.keys(kommunenummer));
// console.log(kommunenummer);


     // Importer kommunenummer fra separat modul
     import { kommunenummer } from "./data/kommunenummer.mjs";

     // Funksjon for å filtrere kommuner basert på søketekst
     function filtrerKommuner() {
         const søkeboks = document.getElementById("kommuneSearch");
         const resultatDiv = document.getElementById("resultat");

         // Tøm resultatet ved hvert søk
         resultatDiv.innerHTML = "";

         const søketekst = søkeboks.value.toLowerCase();

         // Filtrer kommuner basert på søketekst
         const matchendeKommuner = Object.keys(kommunenummer)
             .filter(kommune => kommune.toLowerCase().includes(søketekst));

         // Vis resultatet
         matchendeKommuner.forEach(match => {
             const kommuneNummer = kommunenummer[match];
             const resultatP = document.createElement("p");
             resultatP.textContent = `${match} - ${kommuneNummer}`;
             resultatDiv.appendChild(resultatP);
         });
     }