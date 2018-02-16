export namespace WeatherNS {
    export class Marker {
        lat: number;
        lng: number;
    }

    export class Weather {
        cityName: string;
        // country: string;
        temp: number;
        summary: string;
        icon: string;
        humidity: number;
        // list: List[];
    }

    // export class List {
    //     list: [any];
    // }
}