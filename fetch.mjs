import { kommunenummer } from './data/kommunenummer.mjs'


const baseUrl = "https://data.brreg.no/enhetsregisteret/api/enheter?"


function formatUrl(baseUrl, kommunenummer, year) {
    const url = `${baseUrl}kommunenummer=${kommunenummer}&size=100&fraStiftelsesdato=${year}-01-01&tilStiftelsesdato=${year}-12-31`
    return url
}


async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}


/**
  * Get selected value from dropdown 
  * TODO - implement userinput
  */ 
function getSelected() {
    return {
        kommune: 'Oslo', 
        year: 2020};
}



function getKommunenummer(kommune) {
    const nummer = kommunenummer[kommune]

    if (nummer === undefined) {
        throw new Error(`${kommune} finnes ikke`)
    }

    return nummer
    
}


async function main() {
    const { kommune, year } = getSelected();
    const kommunenummer = getKommunenummer(kommune)
    const url = formatUrl(baseUrl, kommunenummer, year)
    const data = await fetchData(url)
    console.log(data)
}


