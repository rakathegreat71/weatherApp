import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // data:any;
  weather: any;
  location: {
    city: string,
    state: string
  };
  constructor(private weatherService: SpotifyService) { }

  ngOnInit() {
    if(localStorage.getItem('location') == null){
        this.location = {
          city: 'Delhi',
          state: 'india'
        }
        console.log("localStorage item:"+localStorage.location);
    }
    else{
      console.log("localStorage item:"+localStorage.location);
      this.location =JSON.parse(localStorage.getItem("location")) ;
    }
    this.weatherService.getWeather(this.location.city, this.location.state).subscribe(res =>{
      // console.log(res);
       this.weather = res.current_observation;
     });


  }



}
