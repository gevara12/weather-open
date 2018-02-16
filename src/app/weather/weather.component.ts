import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Observable} from 'rxjs/Observable';
import {WeatherNS} from '../weather-map/weather-map.component-namespace';
import Weather = WeatherNS.Weather;

// import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'weather-cast',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
    wasClicked = false;
    // public activities$: Observable<any>;

    public weather: Weather;

    toggleClick() {
        this.wasClicked = !this.wasClicked;
    }

    constructor(private weatherService: WeatherService) {
        // this.weather = {
        //     city: 'Saint-P',
        // cityName: data.list[0].name,
        //     temp: 16,
        //     summary: 'Cloudy'
        // };
    }

    ngOnInit(): any {
        this.weatherService.searchWeatherData('Saint Petersburg')
            .subscribe(data => {
                console.info(data);
                this.weather = {
                    cityName: data.name,
                    // country: data.sys.country,
                    temp: data.main.temp,
                    summary: data.weather[0].main,
                    icon: data.weather[0].icon,
                    humidity: data.main.humidity
                };
            });
    }
}
