import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable, concatMap, map, tap } from 'rxjs';
// import { PokemonListItem } from '../../models/pokemon-list-item';
// import { PokemonSearchResponse } from '../../models/pokemon-search-response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  pokemonId? = this.route.params.pipe(map((p) => p['id']));
  pokemon$ = this.pokemonId?.pipe(
    tap(console.log),
    concatMap(id => this.pokemonService.getPokemonById(id))
  );

  name$ = this.pokemon$?.pipe(
    map(p => p.pokemonName.toUpperCase())
  );

  baseExperience$ = this.pokemon$?.pipe(
    map(p => p.baseExperience)
  );

  weight$ = this.pokemon$?.pipe(
    map(p => p.weight)
  );

  height$ = this.pokemon$?.pipe(
    map(p => p.height)
  );

  flavorText$ = this.pokemon$?.pipe(
    map(p => p.flavorText)
  );

  genus$ = this.pokemon$?.pipe(
    map(p => p.genus)
  );

  types$ = this.pokemon$?.pipe(
    map(p => p.types)
  );

  images$ = this.pokemon$?.pipe(
    map(p => p.images)
  );

  gifs$ = this.images$?.pipe(
    map(i => i.gifs)
  )

  highFidelity$ = this.images$?.pipe(
    map(i => i['high-fidelity'])
  )

  icons$ = this.images$?.pipe(
    map(i => i.icons)
  )

  officialArtwork$ = this.images$?.pipe(
    map(i => i['official-artwork'])
  )

  sprites$ = this.images$?.pipe(
    map(i => i.sprites)
  )

  primaryIcon$ = this.officialArtwork$?.pipe(map( oa => oa[0]))
  




  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) {}


}
