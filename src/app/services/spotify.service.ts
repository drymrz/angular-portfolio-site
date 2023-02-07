import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private _http: HttpClient) { }

  TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=11&offset=10`
  RECENT_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`
  NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
  TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

  client_id = environment.spotifyCredentials.clientId
  client_secret = environment.spotifyCredentials.clientSecret
  refresh_token = environment.spotifyCredentials.refreshToken

  getAccessToken = async () => {
    const response = await fetch(this.TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(this.client_id + ":" + this.client_secret)
      },
      body: `grant_type=refresh_token&refresh_token=${this.refresh_token}`
    })

    return response.json()
  }

  getTopTrack = async () => {
    const { access_token } = await this.getAccessToken();
    return this._http.get(this.TOP_TRACKS_ENDPOINT, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${access_token}`
      })
    })
  }

  getCurrentPlay = async () => {
    const { access_token } = await this.getAccessToken();
    return this._http.get(this.NOW_PLAYING_ENDPOINT, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${access_token}`
      })
    })
  }

  getLastPLay = async () => {
    const { access_token } = await this.getAccessToken();
    return this._http.get(this.RECENT_PLAYED_ENDPOINT, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${access_token}`
      })
    })
  }
}
