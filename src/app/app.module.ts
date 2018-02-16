import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {WeatherService} from './weather/weather.service';

import {AgmCoreModule} from '@agm/core';
import { WeatherMapComponent } from './weather-map/weather-map.component';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        WeatherMapComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCBsbhV7d7BEkCG5TdC-2dc9K5MNK0rDuU'
        })
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
