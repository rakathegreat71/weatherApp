import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../services/spotify.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString:string;
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }
  // searchMusic(){
  //   this.spotifyService.searchMusic(this.searchString).subscribe(res =>{
  //     console.log(res);
  //   })
  //   // console.log(this.searchString);
  // }

}
