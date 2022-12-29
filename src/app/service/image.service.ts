import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, list } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  //Utilizaremos el Firebase Storage para guardar las imagenes.
  //Esta se puede cargar de forma manual o se puede utilizar la API para que devuelva la url de la img
  //Se instala la libreria de Firebase.

  url: string="";

  constructor(private storage: Storage) { }

  //Metodo Subir imagenes.
  public uploadImage($event:any, name:string) {
    //Capturamos la imagenes y se guarda en un Array
    const file = $event.target.files[0];
    console.log(file);

    //Referencia de la imagen en el Storage, y su nombre
    const imgRef=ref(this.storage, `imagen/`+name);

    //Metodo que sube la imagen
    uploadBytes(imgRef, file)
      .then(response=>{this.getImage()})
      .catch(error=> console.log(error));   
    } 

    //Metodo obtener imagenes.
    getImage(){
      const imgesRef = ref(this.storage, 'imagen');
      list(imgesRef)
        .then(async response=>{
          for(let item of response.items){
            this.url=await getDownloadURL(item);
            console.log("La url es: "+this.url);
            
          }
        })
        .catch(error=> console.log(error));
    };
}
