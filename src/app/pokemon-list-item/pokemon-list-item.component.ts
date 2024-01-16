import { Component, Input } from '@angular/core';
import { PokemonListItem } from '../../models/pokemon-list-item';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.scss'
})
export class PokemonListItemComponent {
  @Input({required: true}) pokemon!: PokemonListItem;

  getGif() {
    return this.pokemon!.images.gifs?.[0] || this.pokemon!.images.icons?.[0] || null;
  }
 
}
