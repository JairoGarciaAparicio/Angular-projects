import { Component } from '@angular/core';
import { PokemonService } from './service/pokemon.service';//Inyectamos la importtacion del servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//-----------------INYECTAMOS EL SERVICIO----------------------//

/*
.subscribe()
Método de angular, conecta dicho metodo con eventos observables.
Siempre que se genere algún cambio en estos, se traslada al codigo,
y su resultado
Metodo asociado a la libria rxjs, apoya a la funcion cada vez que
quiere acceder a un elemento observable, cada vez que surja un cambio
en dicha funcion
*/
export class AppComponent {
  title = 'ejercicio5-Pokemon-REST';
  nombre: string = '';
  pokemons: any = [];
  pokemon: any = null;
  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAll().subscribe((datos: any) => {
      this.pokemons = datos.results;
    })

  }
  buscar(){
    this.pokemonService.buscar(this.nombre).subscribe((item)=>{
      this.pokemon = item;
      return null;
    })

  }
}
  