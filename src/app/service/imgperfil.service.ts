import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, list } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgperfilService {

  url_nueva: string="";

  constructor(private storage: Storage) { }

  //Metodo Subir imagenes.
  public uploadImage($event:any, name:string) {
    //Capturamos la imagenes y se guarda en un Array
    const file = $event.target.files[0];
    console.log(file);

    //Referencia de la imagen en el Storage, y su nombre
    const imgRef=ref(this.storage, `perfil/`+name);

    //Metodo que sube la imagen
    uploadBytes(imgRef, file)
      .then(response=>{this.getImage()})
      .catch(error=> console.log(error));   
    } 

    //Metodo obtener imagenes.
    getImage(){
      const imgeRef = ref(this.storage, 'perfil');
      list(imgeRef)
        .then(async response=>{
          for(let item of response.items){
            this.url_nueva=await getDownloadURL(item);
            console.log("La url nueva es: "+this.url_nueva);
            
          }
        })
        .catch(error=> console.log(error));
    };
}
