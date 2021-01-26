description
temperature
ressenti
min_temp
max_temp
pression 
humidite
vitesse_vent

{
    "coord": {
        "lon": 3.0586,
        "lat": 50.633
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "ciel dégagé",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 2.59,
        "feels_like": -2.35,
        "temp_min": 2,
        "temp_max": 3.33,
        "pressure": 1018,
        "humidity": 80
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.12,
        "deg": 180
    },
    "clouds": {
        "all": 0
    },
    "dt": 1611685547,
    "sys": {
        "type": 1,
        "id": 6559,
        "country": "FR",
        "sunrise": 1611646284,
        "sunset": 1611678540
    },
    "timezone": 3600,
    "id": 2998324,
    "name": "Lille",
    "cod": 200
}

export class MeteoModel {
    "coord": {
        "lon": 3.0586,
        "lat": 50.633
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "ciel dégagé",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 2.59,
        "feels_like": -2.35,
        "temp_min": 2,
        "temp_max": 3.33,
        "pressure": 1018,
        humidity
    }
    visibility
    wind= {
        speed,
        deg
    }
    clouds = {
        all
    }
    dt
    sys = {
        type,
        id,
        country,
        sunrise,
        sunset
    }
    timezone
    id
    name
    cod

    constructor(description, temperature,ressenti,min_temp,max_temp,pression,humidite,vitesse_vent) {
        this.description = description;
        this.temperature = temperature;
        this.ressenti = ressenti;
        this.min_temp = min_temp;
        this.max_temp = max_temp;
        this.pression = pression;
        this.humidite = humidite;
        this.vitesse_vent = vitesse_vent;
    }
}