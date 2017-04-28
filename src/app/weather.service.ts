import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Forecast } from './forecast.interface';


@Injectable()
export class WeatherService {
  constructor (
    private http: Http
  ) {}

  getForecast(): Observable<Forecast> {
    return this.http.get(`https://api.apixu.com/v1/forecast.json?key=a7af6a59fa2a4b559ca132906172404&q=Chicago`)
    .map((res:Response) => res.json());
  }

}