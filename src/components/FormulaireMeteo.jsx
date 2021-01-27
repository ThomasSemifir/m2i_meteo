import { React } from 'react'
import { Bouton } from './Bouton'

export const FormulaireMeteo = (props) => {

    const {ville, handleChange, rechercheVille, rechercheLocalisation} = props;
    const label= {
        fontSize: '1.25em',
        fontWeight: 'bold'
    }

    return (
        <form style={{display:"flex", flexDirection:"row", justifyContent:"true"}} onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="ville" style={label}>Rechercher une ville: </label>
            <input id= "ville" name="ville" type="text" value={ville} onChange={handleChange}></input>
                <Bouton onClick={rechercheLocalisation}>📍</Bouton>
                <Bouton onClick={rechercheVille}>Chercher</Bouton>  
        </form>
    )
}
