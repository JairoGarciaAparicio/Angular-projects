import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio4-i18n';
  idioma:string = "es";
  constructor(private translate : TranslateService){
    this.translate.use(this.idioma);
  }
  ngOnInit() {
  }
  cambiarIdioma(nuevoIdioma:string){
    this.idioma = nuevoIdioma;
    this.translate.use(this.idioma);
  }

}
