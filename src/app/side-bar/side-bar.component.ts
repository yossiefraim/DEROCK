import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToMain(){
      this.router.navigate(['/main']);
  }
  goToSongs(){
    this.router.navigate(['/songs']);  
  }
  goToAlbums(){
    this.router.navigate(['/albums']);  
  }

}
