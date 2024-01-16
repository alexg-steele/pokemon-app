import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { GenerationService } from '../generation.service';
import { VersionService } from '../version.service';
import { TypeService } from '../type.service';
import { Observable } from 'rxjs';
import { PokemonSearchResponse } from '../../models/pokemon-search-response';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonSearchParams } from '../../models/pokemon-search-params';



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
  page?: number;

  generationList$?: Observable<String[]>;
  versionList$?: Observable<String[]>;
  typeList$?: Observable<String[]>;


  constructor(
    private pokemonService: PokemonService, 
    private generationService: GenerationService,
    private versionService: VersionService,
    private typeService: TypeService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.loadPokemon();
      this.getGenerations();
      this.getTypes();
      this.getVersions();
      
  }

  ngOnInit() {
    this.route.queryParams.subscribe(qp => {
      this.name = qp['name'];
      this.generation = qp['generation'];
      this.version = qp['version'];
      this.type = qp['type'];
      this.page = parseInt(qp['page']);
      this.loadPokemon();
    })
  }

  loadPokemon() {
    this.pokemon$ = this.pokemonService.getMany(this.name, this.generation, this.version, this.type, this.page);
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

  getPage(page: number){
    this.page = page;
    this.updateQuery();
  }

  updateQuery() {
    console.log(this.name, this.generation, this.version, this.type)
    const queryParams: PokemonSearchParams = {
      name: this.name,
      generation: this.generation,
      version: this.version,
      type: this.type,
      page: this.page,
    }

    this.router.navigate(
      [],
      {queryParams}
    )

  
  }


}
