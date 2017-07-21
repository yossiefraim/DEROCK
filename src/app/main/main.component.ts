import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music-service/music-service.service';
import { User } from '../schemes/user';
import { Song } from '../schemes/song';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MusicService]
})
export class MainComponent implements OnInit {

  constructor(private musicService : MusicService) { }
  user:User;
  songs:Song;
  id:object = {"id":1};
  ngOnInit() {

      this.getUser();
     
  }
    getUser(){
    this.musicService
      .getUser(this.id)
      .then((user:User)=>{
          this.user=user;
      });      
  }
 



}
