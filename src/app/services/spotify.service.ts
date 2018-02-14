import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {
  searchUrl:string;
  apiKey = 'f0fbfd8e22c7f96d';
  constructor(private http:Http) { }

  getWeather(city, state){
    this.searchUrl = "http://api.wunderground.com/api/"+this.apiKey+"/conditions/q/";
    return this.http.get(this.searchUrl +'/'+ state + "/" + city + '.json')
    .map(res=>res.json());
  }

  storeLocation(location:Object){
    localStorage.setItem("location",JSON.stringify(location));
  }

}
