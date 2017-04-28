import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { CurrentWeather } from './current-weather.interface';
import { Forecast } from './forecast.interface';


@Component({
  selector: 'weather-component',
  template: `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <style>
    #weather{
      color: #9d9d9d
    }
  </style>
  <div *ngIf="currentWeather">
   <img src="{{currentWeather.current.condition.icon}}">
  </div>
  <div  class="navbar-header" *ngIf="currentWeather">
    <div id="weather">
      {{ currentWeather.location.name }}
      {{ currentWeather.current.temp_f }} °F
      {{ currentWeather.current.condition.text}}
    </div>
    <div  *ngIf="forecast">
     <img src="{{forecast.forecast.forecastday.day.icon}}">
      {{ forecast.forecast.forecastday.day.condition.text }}
    </div>
  </div>
  `,
})

export class WeatherComponent implements OnInit {
  currentWeather: CurrentWeather;
  forecast: Forecast;

  constructor(private weatherService: WeatherService) {}
 
 ngOnInit() {
   this.getCurrentWeather();
   this.getForecast();

 }

 getCurrentWeather() {
   this.weatherService
    .getCurrentWeather()
    .subscribe((data: CurrentWeather) => this.currentWeather = data);
 }

 getForecast() {
  this.weatherService
    .getForecast()
    .subscribe((data: Forecast) => this.forecast = data);
 }

}