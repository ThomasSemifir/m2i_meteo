
import React, { useState } from 'react'
import { FormulaireMeteo } from '../components/meteo/FormulaireMeteo'
import { meteoService } from '../services/MeteoService'
import { ResultatMeteo } from '../components/meteo/ResultatMeteo'

const style = {
    flex: {
        display: "flex",
        justifyContent: "center",
        margin: "5%"
    }
}


export const Meteo = () => {

    const [resultatMeteo, setResultatMeteo] = useState();
    const [ville, setVille] = useState('')

    const handleChange = (event) => {
        setVille(event.target.value)
    }

    const rechercheVille = () => {
        meteoService.getMeteoByVille(ville).then((resultat) => setResultatMeteo(resultat))
    }

    const rechercheLocalisation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            meteoService.getMeteoByLocalisation(position.coords.longitude.toString(), position.coords.latitude.toString()).then(resultat => { console.log(resultat); setResultatMeteo(resultat) })
        })
    }

    return (
        <>
            <h1 style={style.flex}>Ma super app Meteo!</h1>
            <div style={style.flex}>
                <FormulaireMeteo ville={ville} handleChange={handleChange} rechercheVille={rechercheVille} rechercheLocalisation={rechercheLocalisation} />
            </div>
            <div style={style.flex}>
                {resultatMeteo && <ResultatMeteo resultat={resultatMeteo} />}
            </div>
        </>
    );
}
