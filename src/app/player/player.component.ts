import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() public _id:string;
  private player;
  private ytEvent;
  constructor() { }

  ngOnInit() {
  }
  onStateChange(event) {
    console.log("youtubeid ="+this._id);
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

}
