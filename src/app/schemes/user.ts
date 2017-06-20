import { Song } from '../schemes/song';
import { Album } from '../schemes/album';
import { Playlist } from '../schemes/playlist';

export class User {
    userRecomendedSongs:Song[]=[];
    userRecomendedAlbums:Album[]=[];
    userPlaylist:Playlist[]=[];
    userFavoriteSongs:[{
        result:Song[];
    }];
    userFavoriteAlbums:[{
        result:Album[];
    }];
}
