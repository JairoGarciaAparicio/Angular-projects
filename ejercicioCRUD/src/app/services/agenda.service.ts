import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {


/* Declaramos el servicio, de conexión a BBDD y gestión de los datos 
-CREATE(C) -> Altas de datos
-READ(R) -> Listado de datos, consultas o busquedas
-UPDATE(U) -> Modificaciones y cambios
-DELETE(D) -> Eliminar datos
 */


  constructor(private angularFirestore : AngularFirestore) { }
  
  public todosAmigos():any{
    return this.angularFirestore.collection('agenda').snapshotChanges();
  }
  public buscarAmigos(id:string):any{
    return this.angularFirestore.collection('agenda').doc(id).snapshotChanges();
  }
  public altaAmigo(nuevo:any):any{
    return this.angularFirestore.collection('agenda').add(nuevo);

  }
  public borrarAmigo(id:string):any{
    return this.angularFirestore.collection('agenda').doc(id).delete;

  }
  public modificarAmigo(id:string, data:any):any{
    return this.angularFirestore.collection('agenda').doc(id).set(data);
  }
}
