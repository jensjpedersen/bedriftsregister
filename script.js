const firmanavn = document.getElementsByClassName("firmanavn");
const stiftelsesar = document.getElementsByClassName("stiftelsesar");
const kommunenr = document.getElementsByClassName("kommunenr");
const orgnr = document.getElementsByClassName("orgnr");

const baseUrl = "https://data.brreg.no/enhetsregisteret/api/enheter/?";

async function getFirma() {
  try {
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error(
        `Feil ved henting av data: HTTP-statuskode ${response.status}`
      );
    }

    const data = await response.json();

    if (
      data._embedded &&
      data._embedded.enheter &&
      data._embedded.enheter.length > 0
    ) {
      const firmaListe = data._embedded.enheter;

      firmaListe.forEach((firma) => {
        const firmaElement = document.createElement("div");
        firmaElement.classList.add("resultat");

        const firmanavnElement = document.createElement("div");
        firmanavnElement.classList.add("firmanavn");
        firmanavnElement.textContent = `${firma.navn}`;

        const stiftelsesarElement = document.createElement("div");
        stiftelsesarElement.classList.add("stiftelsesar");
        stiftelsesarElement.textContent = `${firma.stiftelsesdato}`;

        const kommunenrElement = document.createElement("div");
        kommunenrElement.classList.add("kommunenr");
        kommunenrElement.textContent = `${firma.forretningsadresse.kommunenummer}`;

        const orgnrElement = document.createElement("div");
        orgnrElement.classList.add("orgnr");
        orgnrElement.textContent = `${firma.organisasjonsnummer}`;

        firmaElement.appendChild(firmanavnElement);
        firmaElement.appendChild(stiftelsesarElement);
        firmaElement.appendChild(kommunenrElement);
        firmaElement.appendChild(orgnrElement);

        document.body.appendChild(firmaElement);
      });
    } else {
      console.error(
        "Feil ved henting av data: Ugyldig struktur i dataene eller ingen enheter."
      );
      alert(
        "Det oppstod en feil ved henting av data. Ugyldig struktur i dataene eller ingen enheter."
      );
    }
  } catch (error) {
    console.error("Feil ved henting av data:", error.message);
    alert("Det oppstod en feil ved henting av data.");
  }
}

getFirma();
