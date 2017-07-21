import { Component, OnInit,Input } from '@angular/core';
import { MusicService } from '../music-service/music-service.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() public _id:string;
  @Input() public songId:number;
  private player;
  private ytEvent;
  constructor(private musicService : MusicService) { }

  addParams:object= {"id":1,"addSongId":0};
  removeParams:object={"id":1,"removeSongId":0};

  ngOnInit() {
  }
  onStateChange(event) {
    console.log("youtubeid ="+this._id);
    console.log("songId = "+this.songId);
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }
  addSong(){
    this.addParams["addSongId"] = this.songId;
    this.musicService
    .addSong(this.addParams);
  }
  removeSong(){
    this.removeParams["removeSongId"] = this.songId;
    console.log(this.removeParams);
    this.musicService
    .removeSongs(this.removeParams);
  }

}
