import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  constructor(private animeService: AnimeService) { }
  animes:Array<Anime>=[]
  episodiostotales:number=0;
  promedio:number=0;
  selectedAnime!: Anime;
  selected= false!;
  getAnimes() {
    this.animeService.getAnimes().subscribe(animes => {
      this.animes = animes;
      
     
    });
    return this.animes
    
  }

generarepisodios():number{
 
  let i:number=0;
  while(i<=this.animes.length){
    this.episodiostotales+=this.animes[i].episode;
  }
  return this.episodiostotales
}

promediorating():number{
  let ratings:number=0;
  let i:number=0;
  while(i<=this.animes.length){
    ratings+=parseFloat(this.animes[i].Rating);

  }
return this.promedio=ratings/(this.animes.length)
}

onSelected(anime: Anime): void {
  this.selected = true;
  this.selectedAnime= anime;
}
  ngOnInit() {
    this.getAnimes();
   
    
    
  }

}
