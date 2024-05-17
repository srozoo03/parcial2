import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimeComponent, AnimeListComponent,AnimeDetailComponent],
  exports:[AnimeComponent,AnimeListComponent,AnimeDetailComponent]
})
export class AnimeModule { }
