import { React, useEffect, useState } from 'react'
import { meteoService } from '../services/MeteoService'

export const ResultatRechercheMeteo = (props) => {

    const [resultatMeteo, setResultatMeteo] = useState({})

    const sauvegarderResultat = (resultat) => {
        resultatMisEnForme = 
    }
    
    useEffect(() => {
        meteoService.getMeteoByVille().then((resultat) => sauvegarderResultat(resultat))   
    }, [])

    return (
        <div>
            
        </div>
    )
}
