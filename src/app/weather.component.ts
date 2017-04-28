import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Forecast } from './forecast.interface';


@Component({
  selector: 'weather-component',
  template: `<div id="parent" style="display:flex; float:right; padding-top:10px;">
    <div id="wide" style="width:200;">
        <div style="align:right; display: table;" *ngIf="forecast">
            <div style="display: table-row; float: left;">
                <div style="float: left; display: table-cell;">
                    <img src="{{forecast.current.condition.icon}}">
                </div>
                <div style="float: left; display: table-cell;">
                    <div id="weather">
                        {{ forecast.location.name }} {{ forecast.current.temp_f}} °F
                        <br> {{ forecast.current.condition.text}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="narrow" style="width:200px;">
        <div style="float: right; width: 100%; display: table;" *ngIf="forecast">
            <div style="display: table-row; float: right;">
                <button style="width:150px;" type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Forecast</button>
                <div style="color: white;" id="demo" class="collapse">
                    Tomorrow {{ forecast.forecast.forecastday[0].day.avgtemp_f}} °F
                </div>
            </div>
        </div>
    </div>
</div>
`,
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