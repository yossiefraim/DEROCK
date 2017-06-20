import { Song } from '../schemes/song';

export class Album {
    _id:string;
    id:number;
    albumName:string;
    ArtistName:string;
    songs:[Song];
    albumDateOfIssue:string;
    likes:number;
    favorite:boolean;
    genre:string;
    recomendeSacle:number;
}
