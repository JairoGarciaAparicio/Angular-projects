import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
//-------------------DECLARACION SERVICIO -------------------------
export class PokemonService {

//1º Declarar variables
url = "https://pokeapi.co/api/v2/pokemon";
cabeceras = new HttpHeaders({"Content-type" : "application/json"});
//2º Generacion de las llamadas GET y POST
  constructor(private http:HttpClient) { 
  }
  //3º Acceso general de todos los componentes y obtener todos los datos que me ofrece la API en estruct json
  public getAll() {
  return this.http.get(this.url, {headers:this.cabeceras});
  }
  public buscar(nombre:string){
    let otraUrl = this.url + "/" + nombre;
    return this.http.get(otraUrl, {headers:this.cabeceras});
  }
}
