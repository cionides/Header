import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather.interface';

@Component({
  selector: 'weather-component',
  template: `
  <div *ngIf="weather">
    {{ weather.location.name}},
    {{ weather.current.temp_f}} F
    {{ weather.current.condition.text}}
    <img src="{{weather.current.condition.icon}}">
  </div>
  `
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