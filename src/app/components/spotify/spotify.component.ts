import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger,
} from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { SpotifyService } from 'src/app/services/spotify.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('void => *', [
        query('.page-head, #recentPlay, .flex-center', [
          style({ opacity: 0, transform: 'translateY(-96px) translateZ(0)' }),
          stagger(-50, [
            animate(
              '500ms 0.7s cubic-bezier(0.4, 0.55, 0.265, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
      transition('* => void', [
        query('#hvr, .page-head, #recentPlay', [
          style({ opacity: 1, transform: 'none' }),
          stagger(50, [
            animate(
              '250ms 0.2s cubic-bezier(0.4, 0.55, 0.265, 1)',
              style({
                opacity: 0,
                transform: 'translateY(-96px) translateZ(0)',
              })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class SpotifyComponent implements OnInit {

  constructor(private apiSpotify: SpotifyService, private titleService: Title) {
    titleService.setTitle('Spotify Statistic - Adry Mirza');
  }

  tracks;
  recentPlay;
  online = false;
  loaded = false;

  getNowPlay = async () => {
    (await this.apiSpotify.getCurrentPlay()).subscribe(async (res) => {
      if (res != null) {
        this.online = true
        this.recentPlay = res['item']
      } else {
        (await this.apiSpotify.getLastPLay()).subscribe((res) => {
          this.recentPlay = res['items'][0]['track']
          this.online = false
        })
      }
    })
  }

  getTrack = async () => {
    (await this.apiSpotify.getTopTrack()).subscribe((res) => {
      let tracks = res['items']
      this.tracks = tracks.map((t) => ({
        albumImageUrl: t.album.images[2].url,
        artist: t.artists.map((_artist) => _artist.name).join(', '),
        songUrl: t.external_urls.spotify,
        title: t.name,
        id: t.id,
      })
      );
      this.tracks.splice(5, 1)
    })
  }

  @HostBinding('@pageAnimations')

  ngOnInit(): void {
    this.getNowPlay()
    setInterval(() => this.getNowPlay(), 1500);
    this.getTrack()

    if ($('script[src="../assets/js/animate.js"]').length > 0) {
      $('script[src="../assets/js/animate.js"]').remove();
      setTimeout(() => {
        $("body").append('<script src="../assets/js/animate.js"></script>');
      }, 1500);
    }

    setTimeout(() => {
      if (this.tracks && this.recentPlay) {
        setTimeout(() => {
          this.loaded = true
        }, 250);
      }
    }, 1000);

  }

}
