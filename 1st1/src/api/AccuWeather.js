import axios from 'axios'

class AccuWeather {
    constructor(){
        this.apiURL = 'http://api.apixu.com/v1/';
        this.apiKey = 'b4276c7df1f2400ea9c120534191901';
        this.capitals = [
            "Porto Velho",
            "Manaus",
            "Rio Branco",
            "Campo Grande",
            "Macapá",
            "Brasília",
            "Boa Vista",
            "Cuiabá",
            "Palmas",
            "Teresina",
            "São Paulo",
            "Rio de Janeiro",
            "Belém",
            "São Luís",
            "Goiânia",
            "Salvador",
            "Maceió",
            "Porto Alegre",
            "Curitiba",
            "Florianópolis",
            "Belo Horizonte",
            "Fortaleza",
            "Recife",
            "João Pessoa",
            "Aracaju",
            "Natal",
            "Vitória"
          ];         
    }
    getForecastFromLocation(location, days = 1){
        return axios.get(this.buildURL('forecast.json'), {
            params: {
                q: location,
                key: this.apiKey,
                days
            }
        });
    }
    getCapitalsForecast(){
        return Promise.all(
            this.capitals.map((capital) => this.getForecastFromLocation(capital))
        );
    }
    buildURL(method){
        return this.apiURL + method;
    }
}

export default AccuWeather;