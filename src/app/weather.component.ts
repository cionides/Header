import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Forecast } from './forecast.interface';


@Component({
  selector: 'weather-component',
  templateUrl: 'weather.component.html',
  styleUrls: ['./header.component.css']
})

export class WeatherComponent implements OnInit {
  forecast: Forecast;

  constructor(private weatherService: WeatherService) {}
 
 ngOnInit() {
   this.getForecast();
 }

 getForecast() {
  this.weatherService
    .getForecast()
    .subscribe((data: Forecast) => this.forecast = data);
 }

}