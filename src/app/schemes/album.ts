import { Song } from '../schemes/song';

export class Album {
    _id:string;
    id:number;
    albumName:string;
    ArtistName:string;
    songs:[{
        songId:number;
    }];
    albumDateOfIssue:string;
    likes:number;
    favorite:boolean;
    genre:string;
    recomendeSacle:number;
}
