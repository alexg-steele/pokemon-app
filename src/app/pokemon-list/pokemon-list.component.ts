import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { GenerationService } from '../generation.service';
import { VersionService } from '../version.service';
import { TypeService } from '../type.service';
import { Observable } from 'rxjs';
import { PokemonSearchResponse } from '../../models/pokemon-search-response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemon$!: Observable<PokemonSearchResponse>;
  name?: string;
  generation?: string;
  version?: string;
  type?: string;

  generationList$?: Observable<String[]>;
  versionList$?: Observable<String[]>;
  typeList$?: Observable<String[]>;


  constructor(
    private pokemonService: PokemonService, 
    private generationService: GenerationService,
    private versionService: VersionService,
    private typeService: TypeService,
    private route: ActivatedRoute,
    ) {
      this.loadPokemon();
      this.getGenerations();
      this.getTypes();
      this.getVersions();
      
  }

  ngOnInit() {
    this.route.queryParams.subscribe(qp => {
      this.name = qp['name'];
      this.loadPokemon();
    })
  }

  loadPokemon() {
    this.pokemon$ = this.pokemonService.getMany(this.name, this.generation, this.version, this.type);
  }

  getGenerations() {
    this.generationList$ = this.generationService.getGenerations();
  }

  getTypes() {
    this.typeList$ = this.typeService.getTypes();
  }

  getVersions() {
    this.versionList$ = this.versionService.getVersions();
  }


}
