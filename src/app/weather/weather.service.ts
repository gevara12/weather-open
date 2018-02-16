import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {WeatherNS} from '../weather-map/weather-map.component-namespace';

@Injectable()

export class WeatherService {

    constructor(private http: HttpClient) {
    }

    weather = {
        cityName: 'Saint-P',
        temp: 16,
        summary: 'Cloudy'
    };

    WeatherData() {
        return this.weather;
    }

    searchWeatherData(cityName: string, coords: WeatherNS.Marker = null): Observable<any> {
        // let url = `http://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&APPID=b001b7dce28456d85e7e92db3bf7954f`;
        let url = `http://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&APPID=b001b7dce28456d85e7e92db3bf7954f`;
        if (coords) {
            // console.log(coords);
            url = `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lng}&units=metric&APPID=b001b7dce28456d85e7e92db3bf7954f`;
        }
        return this.http.get(url);
    }
}