import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  city:string;
  state:string;
  constructor() {

  }

  ngOnInit() {
    if (localStorage.location != null) {
          let location = JSON.parse( localStorage.location);
          this.city = location.city;
          this.state = location.state;
          // console.log(this.state);
    }
    else{
      this.city = "delhi";
      this.state = "india";
    }
  }

  saveForm(){
    let location = {
      "city": this.city,
      "state": this.state
    }

    localStorage.setItem("location",JSON.stringify(location));
  }

}
