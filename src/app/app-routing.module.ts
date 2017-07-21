import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {SongsComponent} from './songs/songs.component';
import {AlbumsComponent} from './albums/albums.component';

const appRoutes: Routes = [
  {path:'',redirectTo: '/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent},
  {path:'songs',component:SongsComponent},
  {path:'albums',component:AlbumsComponent}
];

@NgModule({
  imports :[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}