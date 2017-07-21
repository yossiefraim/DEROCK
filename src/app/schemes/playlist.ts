import { Song } from '../schemes/song';

export class Playlist {
    _id:string;
    id:number;
    PlayListName:string;
    songs:[{
        songId:number;
    }];
    likes:number;
    genre:string;
    favorite:boolean;
    recomendeSacle:number;
}
