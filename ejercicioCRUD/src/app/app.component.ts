import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgendaService } from './services/agenda.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1-CRUD';
  contactos: any = null;
  id: string = "";
  amigo: any;
  activarModificacion: boolean = false;

  amigoForm = new FormGroup({
    nombre: new FormControl('', Validators.minLength(3)),
    telefono: new FormControl('', Validators.pattern('[6-7][0-9]{.6}'))
  });

  constructor(private agendaService: AgendaService) { }

  alta() {
    this.agendaService.altaAmigo(this.amigoForm.value).then(() => {
      alert('alta creada');
      this.amigoForm.reset();
      window.location.href = '/';
    }, (error:any) => {
      console.log(error);
    });
  }
  guardar() {
    this.agendaService.modificarAmigo(this.id, this.amigoForm.value).then(() => {
      alert('contacto modificado');
    }, (error:any) => {
      console.log(error);
    });
    this.activarModificacion = false;
  }
  modificar() {
    this.activarModificacion = true;
    this.amigoForm.setValue({
      nombre:this.amigo.nombre,
      telefono:this.amigo.telefono      
    });
  }
  borrar() {
    this.agendaService.borrarAmigo(this.id).then(()=>{
      alert('Contacto borrado'); 
    }, (error:any)=>{
      console.log(error)
    });
   }
  buscar() {
    this.agendaService.buscarAmigos(this.id).subscribe((item:any)=>{
      this.amigo=item.payload.data();
    }
  )}
//Peticion de ejecución en la actualizacion de los data
ngOninit(){
  this.agendaService.todosAmigos().subscribe((datos:any)=>{
    //Limpiar el array
    this.contactos =[];
    //Recorro los datos y agrego el array
    datos.forEach((element:any) => {
      this.contactos.push(element.payload.doc.data());
    })
  });
}


}
