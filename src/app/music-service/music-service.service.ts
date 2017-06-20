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

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }

}
