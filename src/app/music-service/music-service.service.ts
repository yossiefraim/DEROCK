import { Injectable } from '@angular/core';
import { User } from '../schemes/user';
import { Album } from '../schemes/album';
import { Song } from '../schemes/song';
import { Playlist } from '../schemes/playlist';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MusicService {

  private userUrl = 'https://musicservice.herokuapp.com/';

  constructor(private http: Http) { }

    getUser(id):Promise<User>{
      return this.http.post(this.userUrl+'login',id)
                 .toPromise()
                 .then((response )=>{
                   return response.json() as User
                 } )
                 .catch(this.handleError);

  }
  getAllSongs():Promise<Song>{
      return this.http.get(this.userUrl+'songs')
                 .toPromise()
                 .then((response )=>{
                   return response.json() as Song
                 } )
                 .catch(this.handleError);

  }
  getAllAlbums():Promise<Album>{
      return this.http.get(this.userUrl+'albums')
                 .toPromise()
                 .then((response )=>{
                   return response.json() as Album
                 } )
                 .catch(this.handleError);

  }
   addSong(addParams):Promise<any>{
      return this.http.post(this.userUrl+'addSongs',addParams)
                 .toPromise()
                 .then((response )=>{
                   return response.json() as any
                 } )
                 .catch(this.handleError);

  }
   removeSongs(removeParams):Promise<any>{
      return this.http.post(this.userUrl+'removeSongs',removeParams)
                 .toPromise()
                 .then((response )=>{
                   return response.json() as any
                 } )
                 .catch(this.handleError);

  }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }

}
