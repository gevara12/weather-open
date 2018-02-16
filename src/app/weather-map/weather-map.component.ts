import {Component, Input, OnInit} from '@angular/core';
import {WeatherNS} from './weather-map.component-namespace';
import {WeatherService} from '../weather/weather.service';

@Component({
    selector: 'weather-map',
    templateUrl: './weather-map.component.html',
    styleUrls: ['./weather-map.component.scss']
})

export class WeatherMapComponent implements OnInit {

    @Input() weather: WeatherNS.Weather;

    lat: number = 59.85;
    lng: number = 30.19;
    zoom: number = 10;

    marker: WeatherNS.Marker = new WeatherNS.Marker();

    constructor(private weatherService: WeatherService) {
    }

    ngOnInit() {
        this.getUserLocation();
    }

    getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }

    mapClicked($event: any) {
        // console.log($event);
        this.marker.lat = $event.coords.lat;
        this.marker.lng = $event.coords.lng;
        this.weatherService.searchWeatherData(null, this.marker)
            .subscribe(data => {
                // debugger;
                this.weather = {
                    cityName: data.city.name,
                    // country: data.sys.country,
                    temp: data.list[0].main.temp,
                    summary: data.list[0].weather[0].main,
                    icon: data.list[0].weather[0].icon
                };
            });
        console.log(this.weather);
    }

}