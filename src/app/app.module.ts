import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { HttpModule } from '@angular/http';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MusicLineComponent } from './music-line/music-line.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { SongsComponent } from './songs/songs.component';
import { AlbumsComponent } from './albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    MusicLineComponent,
    SideBarComponent,
    LoginComponent,
    SongsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
