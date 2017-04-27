import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather.interface';

@Component({
  selector: 'weather-component',
  template: `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <style>
    #weather{
      color: #9d9d9d
    }
  </style>
  <div  class="navbar-header" *ngIf="weather">
  <img src="{{weather.current.condition.icon}}">
    <div id="weather">
      {{ weather.location.name}},
      {{ weather.location.region}}
      {{ weather.current.temp_f}} °F
      {{ weather.current.condition.text}}
    </div>
    
  </div>
  `,
})

export class WeatherComponent implements OnInit {
  weather: Weather;

  constructor(private weatherService: WeatherService) {}
 
 ngOnInit() {
   this.weatherService
    .getWeather()
    .subscribe((data: Weather) => this.weather = data);
 }

}