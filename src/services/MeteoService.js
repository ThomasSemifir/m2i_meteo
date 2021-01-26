const url = 'http://api.openweathermap.org/data/2.5/weather'
const urlParamsUnit = 'metric'
const urlParamsLang = 'fr'
const apiKey = 'c06516a3bb199bb320181c589f72433c'

let HTTpHeaders = new Headers()
let init = {
    method: 'GET',
    headers: HTTpHeaders,
    mode: 'cors'
};

class MeteoService {
    getMeteoByVille = (ville) => {
        // fetch('api.openweathermap.org/data/2.5/weather?q=Lille&appid=c06516a3bb199bb320181c589f72433c&lang=fr&units=metric',init).then(res => res.json())
        ville = 'Lille'
        fetch(`${url}?q=${ville}&unit=${urlParamsUnit}&appid=${apiKey}&lang=${urlParamsLang}`, init).then(res => res.json())
    }
}

export const meteoService = Object.freeze(new MeteoService())